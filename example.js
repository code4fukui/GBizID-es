import { GBizID } from "./GBizID.js";

const gbizid = new GBizID();
const code = "xxxxxxxxxxxxxxxxxxxxxxx";
const atoken = await gbizid.getAccessToken(code);
const userinfo = await gbizid.getUserInfo(atoken);
console.log(userinfo);
