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
import reservationRouter from "./routes/reservationRoute.js";

const app = express();

dotenv.config({ path: "./config/config.env" });

/* ✅ CORS – FIXED */
app.use(cors({
  origin: "https://resturant-frontend-ashy.vercel.app", // NO slash
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

/* ✅ Preflight support */
app.options("*", cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* ✅ Root route (optional but recommended) */
app.get("/", (req, res) => {
  res.send("🚀 Backend is running");
});

/* ✅ Routes */
app.use("/api/v1/reservation", reservationRouter);

/* ✅ DB Connection */
dbConnection();

/* ✅ Error middleware (LAST) */
app.use(errorMiddleware);

export default app;

