import { Router } from "express";
import { UserController } from "../controller/UserController";
// import { User } from "../models/user";
import bodyParser from "body-parser";
// import { resourceLimits } from "worker_threads";
export const route = Router();
let userCtrl = UserController.getInstance();



route.post('/addUser', userCtrl.addUser)
route.get('/readUser', (req, res) => {


})
route.post('/updateUser', (req, res) => {


})
route.post('/deleteUser', (req, res) => {


})