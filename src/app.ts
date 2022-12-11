import express, { application } from "express";
import { app as apiInstance } from './routes/index';
import bodyParser from 'body-parser'
export const app = express();
app.use(bodyParser.json())
app.use(apiInstance);