# Lab 22 — Broken stack to diagnose

Bring it up and watch the `app` service fail to reach the database:

```bash
docker compose up -d
docker compose ps          # app keeps logging "waiting ..."
docker compose logs app    # read the actual message
```

Your job: find the single root cause, change **one** thing, and verify the `app`
logs print `CONNECTED`. The fix and explanation are in
`solutions/lab-22-troubleshoot/`.
