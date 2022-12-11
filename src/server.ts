import { createServer } from "http";
import { app } from "./app";
import { sequelize } from "./sequelize";

import * as dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT || 3000;

(async () => {
    await sequelize.sync({ alter: true }).then((result) => {
        console.log("Database has been synced");
    });

    createServer(app).listen(port, () =>
        console.info(`Server running on port ${port}`)
    );
})();