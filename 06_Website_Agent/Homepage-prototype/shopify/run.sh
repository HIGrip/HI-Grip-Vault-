#!/bin/sh
# meet (optioneel), bouw, render lokaal en vergelijk met het prototype: ./run.sh [--measure] [secties]
set -e
cd "$(dirname "$0")"
A=/tmp/claude-0/-home-user-HI-Grip-Vault-/8d4f16af-09a3-5aa8-9699-19d286792f06/scratchpad/artifact-files/67937f69-4960-4b73-801a-37dedefb45ec
if [ "$1" = "--measure" ]; then python3 build.py --measure; shift; fi
python3 build.py
cd test && node render.js $A >/dev/null && node compare.js http://localhost:8801 "${1:-}" ${2:-}
