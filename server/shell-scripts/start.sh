#!/bin/bash

cd $(cd $(dirname $0); pwd)
conda activate nan-j-min-bot-amazonlinux2
npm run start-by-service
