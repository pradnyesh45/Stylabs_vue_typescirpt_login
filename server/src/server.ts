import App from "./app";
import UsersController from "./users/users.controller";

import * as mongoose from "mongoose";
import "dotenv/config";

const { MONGO_USER, MONGO_PASSWORD, MONGO_PATH } = process.env;

mongoose.connect(`mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}${MONGO_PATH}`);

const app = new App([new UsersController()], 5000);

app.listen();
