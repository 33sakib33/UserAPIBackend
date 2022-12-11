import { Request, Response } from "express";
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
}