import express from "express"
import { route } from "./UserRoute"

export const app = express();

app.use(route);