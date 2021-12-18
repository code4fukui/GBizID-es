import { Base64 } from "https://code4fukui.github.io/Base64/Base64.js";

class GBizID {
  constructor() {
    this.openid = {
      endpoint: Deno.env.get("GBIZID_ENDPOINT"),
      scope: Deno.env.get("GBIZID_SCOPE"),
      client_id: Deno.env.get("GBIZID_CLIENT_ID"),
      client_secret: Deno.env.get("GBIZID_CLIENT_SECRET"),
    };
  }
  async fetchWithAuth(url, param) {
    const method = "POST";
    const body = Object.keys(param).map((s) => s + "=" + encodeURIComponent(param[s])).join("&");
    const s = this.openid.client_id + ":" + this.openid.client_secret;
    const headers = {
      "Accept": "application/json",
      "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
      "Authorization": "Basic " + Base64.encode(new TextEncoder().encode(s)),
    };
    const res = await fetch(url, { method, headers, body });
    return res.json();
  }
  async getAccessToken(code) {
    const param = {
      grant_type: "authorization_code",
      code,
      redirect_uri: Deno.env.get("GBIZID_REDIRECT_URL"),
    };
    const res = await this.fetchWithAuth(this.openid.endpoint + "oauth/token", param);
    if (res.error) {
      console.log(res);
      throw new Error(res);
    }
    return res.access_token;
  }
  async getUserInfo(atoken) {
    const url = this.openid.endpoint + "oauth/userinfo";
    const method = "GET";
    const headers = {
      "Authorization": "Bearer " + atoken,
    };
    const res = await fetch(url, { method, headers });
    return res.json();
  }
  async getCorporateIDFromCode(code) {
    const atoken = await this.getAccessToken(code);
    if (!atoken) {
      return null;
    }
    const userinfo = await this.getUserInfo(atoken);
    if (!userinfo) {
      return null;
    }
    const cid = userinfo.corporate_number;
    return cid;
  }
}

export { GBizID };
