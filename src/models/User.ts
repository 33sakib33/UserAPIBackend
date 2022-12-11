import {
    Model,
    Column,
    Table,
    BeforeCreate,
} from 'sequelize-typescript';

import bcrypt from 'bcryptjs'
// import { Tracing } from 'trace_events';
interface IUser {
    username: string;
    password: string;
}
@Table({ tableName: "user3", underscored: true })
export class User extends Model<User> {

    @Column
    userName!: string;

    @Column
    password!: string;

    @BeforeCreate
    static hashPassword(instance: User) {
        if (instance.password) {
            var hash = bcrypt.hashSync(instance.password, 8);
            instance.password = hash;
        }
    }
}

