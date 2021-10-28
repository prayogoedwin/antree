import express from "express";
import roleRoutes from "./routes/index.js";
import cors from "cors";

const app = express();
const port = 5000;

try {
    await db.authenticate();
    console.log('DB Connected');
} catch (error) {
    console.error('Error:', error);
}

app.use(cors());
app.use(express.json());
app.use('/role', roleRoutes);
app.listen(port, () => console.log("server running"));


