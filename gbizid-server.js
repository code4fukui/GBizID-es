import { Server } from "https://js.sabae.cc/Server.js";
import { GBizID } from "./GBizID.js";

const gbizid = new GBizID();

class GBizIDServer extends Server {
  constructor(port) {
    super(port);
  }
  gbizlogin() {
    const url = `${Deno.env.get("GBIZID_ENDPOINT")}oauth/authorize?response_type=code&client_id=${Deno.env.get("GBIZID_CLIENT_ID")}&redirect_uri=${encodeURIComponent(Deno.env.get("GBIZID_REDIRECT_URL"))}`;
    const html = `
    <!DOCTYPE html><html lang="ja"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width">
    <title>gBizIDログイン</title>
    </head><body>
    <h1>gBizIDログイン</h1>
    <h2><a href=${url}>gBizIDを使ってログインする</a></h2>
    `;
    const bin = new TextEncoder().encode(html);
    return new Response(bin);
  }
  async handleNotFound(req) { // to override
    try {
      if (req.path == "/") { // gBizID login
        const code = req.query?.substring(5);
        console.log("code", code);
        if (!code) {
          return this.gbizlogin();
        }
        const cid = await gbizid.getCorporateIDFromCode(code);

        const html = `
<!DOCTYPE html><html lang="ja"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width">
こんにちは、法人番号 ${cid} さん！`;
        const bin = new TextEncoder().encode(html);
        return new Response(bin);
      }
    } catch (e) {
      console.log(e);
    }
    return this.err();
  }
}

if (Deno.args.length == 0) {
  console.log("deno run -A gbizid-server.js [port]");
  Deno.exit(1);
}
const port = parseInt(Deno.args[0]);
new GBizIDServer(port);
