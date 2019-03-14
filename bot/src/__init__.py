import json
import os

from tensor2tensor.data_generators import problem
from tensor2tensor.data_generators import text_problems
from tensor2tensor.utils import registry

@registry.register_problem
class MyProblem(text_problems.Text2TextProblem):
    """Predict next line of poetry from the last line. From Gutenberg texts."""

    @property
    def approx_vocab_size(self):
        return 2**13  # ~8k

    @property
    def is_generate_per_split(self):
        # generate_data will shard the data into TRAIN and EVAL for us.
        return False

    @property
    def dataset_splits(self):
        """Splits of data to produce and number of output shards for each."""
        # 10% evaluation data
        return [{
            "split": problem.DatasetSplit.TRAIN,
            "shards": 9,
        }, {
            "split": problem.DatasetSplit.EVAL,
            "shards": 1,
        }]

    def generate_samples(self, data_dir, tmp_dir, dataset_split):
        script_path = os.path.dirname(os.path.abspath(__file__))
        json_path = os.path.join(script_path, '../data/messages.json')

        file = open(json_path, 'r')
        messages = json.load(file)

        for message in messages:
            q, a = message['input'], message['output']
            if not q or not a:
                continue

            yield {
                'inputs': q.strip(),
                'targets': a.strip()
            }
