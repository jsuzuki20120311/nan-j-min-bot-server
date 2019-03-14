#!/bin/bash

source activate nan-j-min-bot-amazonlinux2
cd $(cd $(dirname $0); pwd)

npm run start-by-service
