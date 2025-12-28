import ErrorHandler from "../error/error.js";
import { Reservation } from "../model/resevationSchema.js";

export const sendReservation = async (req, res, next) => {
    try {
        const { firstName, lastName, email, phone, time, date } = req.body;

        // ❌ Validation (use NOT operator)
        if (!firstName || !lastName || !email || !phone || !time || !date) {
            return next(
                new ErrorHandler("Please fill full reservation form!", 400)
            );
        }

        // ✅ Create reservation (must pass object)
        await Reservation.create({
            firstName,
            lastName,
            email,
            phone,
            time,
            date,
        });

        // ✅ Proper response
        res.status(200).json({
            success: true,
            message: "Reservation sent successfully",
        });

    } catch (error) {
        // ✅ Mongoose validation error handling
        if (error.name === "ValidationError") {
            const validationErrors = Object.values(error.errors).map(
                (err) => err.message
            );
            return next(
                new ErrorHandler(validationErrors.join(", "), 400)
            );
        }

        next(error);
    }
};
