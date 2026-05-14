# GBizID-es

Deno向けの、[gBizID](https://gbiz-id.go.jp/top/)でログインするためのシンプルなサーバーサイドコードです。

## 要件
gBizIDプライムアカウントの申請が必要です（現在は政府および地方自治体のサービスのみが対象です）。

## 使い方
以下の環境変数を設定してください：

```
export GBIZID_CLIENT_ID=xxxx
export GBIZID_CLIENT_SECRET=xxxx
export GBIZID_SCOPE=openid,profile,user,email,offline_access,mandate
export GBIZID_REDIRECT_URL=https://xxxx.xxx.xxx/
export GBIZID_ENDPOINT=https://stg.gbiz-id.go.jp/
#export GBIZID_ENDPOINT=https://gbiz-id.go.jp/
```

その後、サーバーを起動します：

```
deno run -A gbizid-server.js [port]
```

## ライセンス
MIT License — 詳細は[LICENSE](LICENSE)を参照してください。
