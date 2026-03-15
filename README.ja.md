# GBizID-es

gBizIDを使ったログイン機能を提供するDenoのサーバーサイドコードです。

## 機能
- gBizIDを使ったログイン機能
- 法人番号の取得

## 必要環境
- gBizID Primeアカウントが必要です。

## 使い方
以下の環境変数を設定してください:

```
export GBIZID_CLIENT_ID=xxxx
export GBIZID_CLIENT_SECRET=xxxx
export GBIZID_SCOPE=openid,profile,user,email,offline_access,mandate
export GBIZID_REDIRECT_URL=https://xxxx.xxx.xxx/
export GBIZID_ENDPOINT=https://stg.gbiz-id.go.jp/
#export GBIZID_ENDPOINT=https://gbiz-id.go.jp/
```

その後、サーバーを起動してください:

```
deno run -A gbizid-server.js [port]
```

## ライセンス
MIT License