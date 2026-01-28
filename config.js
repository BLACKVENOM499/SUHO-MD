const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}

module.exports = {
  SESSION_ID: process.env.SESSION_ID || "7MNgmaRA#aNI08Vi8_k-9Cdsx5REWmIb-hGudsGGBDGfiaZxBxPY",
  OWNER_NUM: process.env.OWNER_NUM || "94764703165",
  OWNER_NAME: process.env.OWNER_NAME || "Akindu",
  REPO: process.env.REPO || "https://github.com/altzzdevs/SUHO-MD", 
  PREFIX: process.env.PREFIX || ".",
  AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "false",
  AUTO_REACT_STATUS: process.env.AUTO_REACT_STATUS || "false",
  MODE : process.env.MODE || "public", 
  AUTO_STATUS_LIKE: process.env.AUTO_STATUS_LIKE || "false", 
  AUTO_RECORDING: convertToBool(process.env.AUTO_RECORDING || "false"), 
  ANTI_DELETE: convertToBool(process.env.ANTI_DELETE || "true"),
  version: process.env.version || "V2",
};

