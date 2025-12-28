// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import { dbConnection } from "../backend/database/dbconnection.js"


// const app = express();

// dotenv.config({ path: './config/config.env' })

// app.use(cors({
//     origin: [process.env.FRONTEND_URL],
//     methods: ["post"],
//     credentials: [true]
// }))
// app.use(express.json());
// epp.use(express.urlencoded({ extended: true }));
// dbConnection();
// export default app;

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbConnection } from "./database/dbconnection.js";
import { errorMiddleware } from "./error/error.js";
import reservationRouter from "./routes/reservationRoute.js"

const app = express();

dotenv.config({ path: "./config/config.env" });

app.use(cors({
    origin: process.env.FRONTEND_URL,
    methods: ["POST"],
    credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1/reservation', reservationRouter);
dbConnection();

app.use(errorMiddleware);
export default app;
