#!/bin/bash

cd $(cd $(dirname $0); pwd)

. ${HOME}/miniconda3/etc/profile.d/conda.sh
conda activate nan-j-min-bot-amazonlinux2

npm run start
