# GBizID-es

[gBizID](https://gbiz-id.go.jp/top/)でログインするシンプルなサーバー用コード for Deno

## prepare

gBizIDプライムへ申し込む（現在は政府や自治体関係のサービスのみ）

## setup

export GBIZID_CLIENT_ID=xxxx
export GBIZID_CLIENT_SECRET=xxxx
export GBIZID_SCOPE=openid,profile,user,email,offline_access,mandate
export GBIZID_REDIRECT_URL=https://xxxx.xxx.xxx/
export GBIZID_ENDPOINT=https://stg.gbiz-id.go.jp/
#export GBIZID_ENDPOINT=https://gbiz-id.go.jp/
