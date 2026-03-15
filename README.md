# GBizID-es

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A simple server-side code for logging in with [gBizID](https://gbiz-id.go.jp/top/) for Deno.

## Requirements
You need to apply for a gBizID Prime account (currently only for government and local government services).

## Usage
Set the following environment variables:

```
export GBIZID_CLIENT_ID=xxxx
export GBIZID_CLIENT_SECRET=xxxx
export GBIZID_SCOPE=openid,profile,user,email,offline_access,mandate
export GBIZID_REDIRECT_URL=https://xxxx.xxx.xxx/
export GBIZID_ENDPOINT=https://stg.gbiz-id.go.jp/
#export GBIZID_ENDPOINT=https://gbiz-id.go.jp/
```

Then, run the server:

```
deno run -A gbizid-server.js [port]
```

## License
MIT License