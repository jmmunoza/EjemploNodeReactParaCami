import express, { Express } from "express";
import dotenv from "dotenv";
import registeredRoutes from "./src/routes/Routes";
//import { errorMiddleware } from "./src/middlewares/ErrorHandlerMiddleware";
//import middlewares from "./src/middlewares/Middlewares";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

//app.use(middlewares);
app.use("/", registeredRoutes);
//app.use(errorMiddleware);
app.listen(port, () =>
  console.log(`[server]: Server is running at http://localhost:${port}`)
);
