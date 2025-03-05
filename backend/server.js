// import express for API implementation
import express from 'express';

// packages for best practices middleware
import helmet from 'helmet'; // for security
import morgan from 'morgan'; // for logging
import cors from 'cors'; // for enabling CORS
import dotenv from 'dotenv'; // for environment variables
import productRoutes from './routes/productRoutes.js'; // import productRoutes

dotenv.config(); // Load environment variables from a .env file into process.env

// Create an express app API server object
const app = express();

// Create PORT constant variable
const PORT = process.env.PORT || 3000;

// Middleware
app.use(helmet()); // This setup setting various HTTP headers for security 
app.use(morgan("dev")); // This setup logging HTTP requests
app.use(express.json()); // This setup parsing JSON data
app.use(cors()); // This setup enabling CORS



app.get("/api/products", productRoutes);

app.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
});