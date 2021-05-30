import App from "./app";
import UserController from "./users/users.controller";
import AuthenticationController from "./authentication/authentication.controller";

import "dotenv/config";
import validateEnv from "./utils/validateEnv";

validateEnv();

const app = new App([new UserController(), new AuthenticationController()]);

app.listen();
