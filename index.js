import express from "express";
import router from "./route.js";
import cors from "cors";
import DB_CONNECTION from "./DATABASE.js";

const app = express();
const PORT = 4000;

app.use(cors());

app.use("/", router);

DB_CONNECTION();

app.listen(PORT, () => console.log(`server is running on ${PORT}`));
