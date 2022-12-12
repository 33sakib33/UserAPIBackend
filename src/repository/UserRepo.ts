import { resolve } from "path";
import { Status } from "tslint/lib/runner";
import { IUserManagement } from "../interface/UserInterface";
import { User } from "../models/User";
import { sequelize } from "../sequelize";
import { Op } from "sequelize";


export interface IuserRepo {
    addUserInDatabase(userManagementInstance: IUserManagement): Promise<User | null>;
    findUserById(queryParam: any): Promise<User[] | null>;
    findAllUsers(): Promise<User[] | null>
}
export class UserRepo implements IuserRepo {
    addUserInDatabase = async (userManagementInstance: IUserManagement): Promise<User | null> => {
        let txn;
        try {
            console.log("repo te printed");
            console.log(userManagementInstance);
            txn = await sequelize.transaction();
            const userDone = await User.create(userManagementInstance.user, {
                transaction: txn
            });
            txn.commit();
            return userDone;
        }
        catch (err: any) {
            if (txn) await txn.rollback();
            throw new Error(err);

        }
    }
    findUserById = async (queryParam: any): Promise<User[] | null> => {
        try {
            let user = await User.findAll({
                where: {
                    [Op.or]: [
                        { userName: queryParam.userName },
                        { id: queryParam.id }
                    ]
                }
            })
            console.log(user);
            return user;
        }
        catch (error: any) {
            console.error("error hoise")
            throw new Error(error);
        }
    }
    findAllUsers = async (): Promise<User[] | null> => {
        try {
            let userList = await User.findAll();
            return userList;
        }
        catch (err: any) {
            console.log("kisu ekta hoise")
            throw new Error(err);
        }
    }
}