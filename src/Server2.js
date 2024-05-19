const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const dirb = require('dirb');
const nikto = require('nikto');
const nmap = require('nmap');
const sqlmap = require('sqlmap');