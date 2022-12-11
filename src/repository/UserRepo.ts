import { IUserManagement } from "../interface/UserInterface";
import { User } from "../models/User";
import { sequelize } from "../sequelize";



export interface IuserRepo {
    addUserInDatabase(userManagementInstance: IUserManagement): Promise<User | null>;
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
}