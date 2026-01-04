// import mongoose from "mongoose";

// export const dbConnection = () => {
//     mongoose
//         .connect(process.env.MONGO_URI, {
//             dbName: "RESTURANT",
//         })
//         .then(() => {
//             console.log("✅ Connected to database successfully");
//         })
//         .catch((err) => {
//             console.log(`❌ Database connection error: ${err}`);
//         });
// };


// import mongoose from "mongoose";

// export const dbConnection = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI);
//     console.log("✅ Connected to database successfully");
//   } catch (err) {
//     console.error("❌ Database connection error:", err.message);
//   }
// };


import mongoose from "mongoose";

let isConnected = false;

export const dbConnection = async () => {
  if (isConnected) return;

  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "RESTURANT",
    });

    isConnected = true;
    console.log("✅ MongoDB connected");
  } catch (error) {
    console.error("❌ MongoDB error:", error.message);
    throw error;
  }
};
