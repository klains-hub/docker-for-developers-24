#!/bin/sh
# Lab 4 — a deliberately broken container.
# It requires DB_HOST. Without it, it logs a clear error and exits non-zero.
if [ -z "$DB_HOST" ]; then
  echo "FATAL: DB_HOST environment variable is required" >&2
  exit 1
fi
echo "Connected to $DB_HOST — running."
# stay alive so a *fixed* run keeps the container up
sleep infinity
