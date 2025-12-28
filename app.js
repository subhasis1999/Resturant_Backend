
// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import { dbConnection } from "./database/dbconnection.js";
// import { errorMiddleware } from "./error/error.js";
// import reservationRouter from "./routes/reservationRoute.js"

// const app = express();

// dotenv.config({ path: "./config/config.env" });

// app.use(cors({
//     origin: process.env.FRONTEND_URL,
//     methods: ["POST"],
//     credentials: true
// }));

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use('/api/v1/reservation', reservationRouter);
// dbConnection();

// app.use(errorMiddleware);
// export default app;



import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbConnection } from "./database/dbconnection.js";
import { errorMiddleware } from "./error/error.js";
import reservationRouter from "./routes/reservationRoute.js";

const app = express();

dotenv.config({ path: "./config/config.env" });

app.use(cors({
  origin: process.env.FRONTEND_URL || "*",
  methods: ["GET", "POST"],
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ ROOT ROUTE (VERY IMPORTANT)
app.get("/", (req, res) => {
  res.send("Backend running on Vercel 🚀");
});

app.use("/api/v1/reservation", reservationRouter);

// ✅ DB connection (safe for Vercel)
dbConnection();

app.use(errorMiddleware);

export default app;   // ✅ REQUIRED
