#!/bin/bash

PROBLEM=my_problem
MODEL=lstm_seq2seq_attention_bidirectional_encoder
HPARAMS=lstm_luong_attention_multi

DATA_DIR=$HOME/src/github.com/jsuzuki20120311/nan-j-min-bot-server/bot/t2t-data
USR_DIR=$HOME/src/github.com/jsuzuki20120311/nan-j-min-bot-server/bot/src
TRAIN_DIR=$HOME/src/github.com/jsuzuki20120311/nan-j-min-bot-server/bot/t2t-train/$PROBLEM/$MODEL-$HPARAMS

#rm -rf $TRAIN_DIR

t2t-trainer --data_dir=$DATA_DIR --problem=$PROBLEM --model=$MODEL --hparams_set=$HPARAMS --output_dir=$TRAIN_DIR --t2t_usr_dir=$USR_DIR --train_steps=12600 --eval_steps=100
