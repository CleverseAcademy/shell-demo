#!/usr/bin/env bash
# file b.sh

source a.sh # Source/import b.sh in CWD (.)

echo "This is from b.sh file";
echo "FROM_A is $FROM_A";