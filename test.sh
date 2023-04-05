#!/bin/bash

set -e

PARAM=$1

if [ "$PARAM" == "" ]; then
  yarn typecheck
  yarn lint
else
  yarn test:ci $PARAM
fi
