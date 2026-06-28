# Demo 3 — The Compose stack (instructor)

```bash
docker compose up -d
docker compose ps                 # app, db, cache
docker network ls | grep default  # the auto-created <folder>_default network
docker compose logs -f app        # tail one service (Ctrl-C to stop)

# prove name-based discovery from inside the app container:
docker compose exec app sh
/ # nc -zv db 5432       # reaches Postgres by the name "db"
/ # nc -zv cache 6379    # reaches Redis by the name "cache"
/ # exit

docker compose down               # stop + remove (add -v to drop the volume)
```

**Stop & think:** Compose created a network named `<project>_default` (project =
folder name). All three services are on it, and Compose's embedded DNS resolves each
service name to its container — which is why the app reaches `db` and `cache` by name,
no IPs.

> The toy app doesn't query the db/cache — we prove the wiring with `nc`. The point
> of this demo is orchestration and networking, not app logic. It also uses plain
> `depends_on` on purpose; Lab 17 adds a healthcheck so "started" becomes "ready".
