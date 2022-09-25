"use strict";
const fs = require("fs");
const jwt = require("jsonwebtoken");

const privateKey = fs.readFileSync("<YOUR_P8_FILE_NAME>.p8").toString();
const teamId = "<YOUR_TEAM_ID>";
const keyId = "<YOUR_KEY_ID>";
const jwtToken = jwt.sign({}, privateKey, {
    algorithm: "ES256",
    issuer: teamId,
    expiresIn: "180d", // due to apple policy, developer key can only valid for 180 days
    header: {
        alg: "ES256",
        kid: keyId,
        typ: "JWT"
    }
});

console.log(jwtToken);