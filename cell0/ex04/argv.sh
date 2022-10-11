#!/bin/bash
if [ -n "$3" ]; then
echo $1
echo $2
echo $3
elif [ -n "$2" ]; then
var="$1\n$2"
echo -e $var
else
echo $1
fi

