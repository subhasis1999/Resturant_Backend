import mongoose from "mongoose";

export const dbConnection = () => {
    mongoose
        .connect(process.env.MONGO_URI, {
            dbName: "RESTURANT",
        })
        .then(() => {
            console.log("✅ Connected to database successfully");
        })
        .catch((err) => {
            console.log(`❌ Database connection error: ${err}`);
        });
};


// import mongoose from "mongoose";

// export const dbConnection = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI);
//     console.log("✅ Connected to database successfully");
//   } catch (err) {
//     console.error("❌ Database connection error:", err.message);
//   }
// };
