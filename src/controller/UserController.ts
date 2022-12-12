import { query, Request, Response } from "express";
import { User } from "../models/User";
import { IUserManagement } from "../interface/UserInterface";
import { UserRepo, IuserRepo } from "../repository/UserRepo";
import { BaseController } from "./BaseController";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
// import { transpileModule } from "typescript";

export class UserController extends BaseController {
    public _userRepo: IuserRepo;
    constructor(userRep: IuserRepo) {
        super();
        this._userRepo = userRep;
    }
    static getInstance(): UserController {
        return new UserController(new UserRepo());
        // return newInstance;
    }
    protected executeImpl(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>): Promise<any> {
        throw new Error("Method not implemented.");
    }
    addUser = async (req: Request, res: Response) => {
        try {
            let tempUserVar: IUserManagement = {
                user: req.body
            };
            await this._userRepo.addUserInDatabase(tempUserVar)

            res.send("thikase eituk")
        }
        catch (err) {
            console.log(err)
            res.send("hoy nai")
        }

    }
    findUser = async (req: Request, res: Response) => {
        try {
            // let tempUserVarId = req.params.userName;
            // const user = await this._userRepo.findUserById(tempUserVarId);
            // res.send(user);
            let query1 = req.query;
            const user = await this._userRepo.findUserById(query1);
            res.send(user)
        }
        catch (err) {
            console.log(err)
            res.send("hoy nai")
        }
    }
    updateUser = async (req: Request, res: Response) => {
        try {
            let updateId;
            let objectParam;
        }
        catch (err) {

        }
    }
    getAllUsers = async (req: Request, res: Response) => {
        try {
            let allUsers = await this._userRepo.findAllUsers();
            res.send(allUsers);
        }
        catch (error) {
            res.send("hoy nai")
        }
    }
}