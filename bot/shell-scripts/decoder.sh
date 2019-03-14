#!/bin/bash

cd $(cd $(dirname $0); pwd)

source activate nan-j-min-bot-amazonlinux2

PROBLEM=my_problem

MODEL=lstm_seq2seq_attention_bidirectional_encoder
HPARAMS=lstm_luong_attention_multi
BEAM_SIZE=4
ALPHA=0.6

USR_DIR=$HOME/src/github.com/jsuzuki20120311/nan-j-min-bot-server/bot/src
DATA_DIR=$HOME/src/github.com/jsuzuki20120311/nan-j-min-bot-server/bot/t2t-data
TRAIN_DIR=$HOME/src/github.com/jsuzuki20120311/nan-j-min-bot-server/bot/t2t-train/$PROBLEM/$MODEL-$HPARAMS

DECODE_FILE=$1
DECODE_TO_FILE=$2

t2t-decoder --data_dir=$DATA_DIR --problem=$PROBLEM --model=$MODEL --hparams_set=$HPARAMS --output_dir=$TRAIN_DIR --decode_hparams="beam_size=$BEAM_SIZE,alpha=$ALPHA" --t2t_usr_dir=$USR_DIR  --decode_from_file=$DECODE_FILE  --decode_to_file=$DECODE_TO_FILE
