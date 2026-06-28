# Lab Images — build & publish (Docker Hub: levep79)

Two pre-built images the labs depend on. Everything else is an official image
(`alpine`, `nginx`, `node`, `postgres`, `redis`, `hello-world`) or built by students.

| Image | Used in | Purpose |
|-------|---------|---------|
| `levep79/broken-demo` | Lab 5 | Starts, fails on a missing env var, exits non-zero — a container to debug. |
| `levep79/course-app`  | Lab 6 (run pre-built); Labs 11–14 build the same source; Days 2–3 reuse it | The app carried through the course. |

> `course-app/` here mirrors the canonical source in `../app/`. Keep them in sync if
> you change the app (or build the image straight from `../app/` with the Lab 11–14
> Dockerfile).

Publish both **once** before the course (`docker login` first).

## broken-demo
```bash
cd broken-demo
docker build -t levep79/broken-demo:1.0 -t levep79/broken-demo:latest .
docker push levep79/broken-demo:1.0
docker push levep79/broken-demo:latest
```

## course-app
```bash
cd course-app
docker build -t levep79/course-app:1.0 -t levep79/course-app:latest .
docker push levep79/course-app:1.0
docker push levep79/course-app:latest
```

## Multi-arch (recommended for mixed Apple-Silicon / x86 cohorts)
A single-arch image built on an M-series Mac won't run on x86. Build both and push one
multi-arch tag:
```bash
docker buildx build --platform linux/amd64,linux/arm64 \
  -t levep79/course-app:1.0 -t levep79/course-app:latest --push .
```

## Quick local check (no push)
```bash
docker run --rm levep79/broken-demo                 # exits 1, logs the reason
docker run -d -e DB_HOST=db levep79/broken-demo     # stays up
docker run -d -p 8080:3000 levep79/course-app
curl localhost:8080/health                          # {"status":"ok","env":"development"}
```
