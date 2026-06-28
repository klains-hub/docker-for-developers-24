# Course App

The single application carried through the whole course — Day 1 you *run* it
(as the pre-built `levep79/course-app` image), Day 2 you *build* it (Labs 11–14),
Day 3 you *ship* it (Compose, registry, CI, scanning).

It's a deliberately tiny, zero-dependency Node HTTP server so the focus stays on
Docker, not application code.

## Run it locally (no Docker)
```bash
node server.js
# then open http://localhost:3000  (and /health)
```

Configuration comes from the environment:
- `PORT` (default `3000`)
- `APP_ENV` (default `development`)
- `LOG_LEVEL` (default `info`; set `debug` to log each request)

## Note
On `main` there is intentionally **no `Dockerfile` or `compose.yaml`** here — you
write those during the labs. Reference versions live in `../solutions/`.

Swapping in your own stack? Replace these files and adjust the base image / start
command in the lab solutions; the lab steps stay the same.
