// import app from "./app.js";


// app.listen(process.env.PORT, () => {
//     console.log(`server running on the port ${process.env.PORT}`)
// });

import app from "./app.js";

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
