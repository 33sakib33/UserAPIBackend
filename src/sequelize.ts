import { Sequelize } from "sequelize-typescript"
import * as dotenv from "dotenv"
dotenv.config();
const sequelize = new Sequelize(
    process.env.DB_NAME ? process.env.DB_NAME : "",
    process.env.DB_USER ? process.env.DB_USER : "",
    process.env.DB_PASS ? process.env.DB_PASS : "",
    {
        host: process.env.DB_HOST,
        dialect: "postgres",
        logging: false,
        schema: "core",
        pool: {
            max: 300,
            idle: 30000,
            acquire: 60000,
        },
        query: { raw: true },
    }
);

sequelize.addModels([
    __dirname + "/models/*.ts"
]);

export { sequelize };