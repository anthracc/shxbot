const { Schema, model } = require("mongoose");

const reqStr = {
    type: String,
    required: true
};
const optStr = {
    type: String,
    required: false
};

const configSchema = Schema({
    _id: reqStr,
    url: reqStr,
    token: optStr
});

module.exports = model("userinfo", configSchema);