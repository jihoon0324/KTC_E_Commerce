const express = require("express");

require("dotenv").config();
const app = express();
const PORT = process.env.port || 5000;

const connection = require("./database/db");
connection();
