#!/bin/bash

PROBLEM=my_problem
MODEL=lstm_seq2seq_attention_bidirectional_encoder
HPARAMS=lstm_luong_attention_multi

DATA_DIR=$HOME/src/github.com/jsuzuki20120311/nan-j-min-bot-server/bot/t2t-data
TMP_DIR=$HOME/src/github.com/jsuzuki20120311/nan-j-min-bot-server/bot/t2t-datagen
TRAIN_DIR=$HOME/src/github.com/jsuzuki20120311/nan-j-min-bot-server/bot/t2t-train/$PROBLEM/$MODEL-$HPARAMS
USR_DIR=$HOME/src/github.com/jsuzuki20120311/nan-j-min-bot-server/bot/src

t2t-datagen --data_dir=$DATA_DIR --tmp_dir=$TMP_DIR --problem=$PROBLEM --t2t_usr_dir=$USR_DIR
