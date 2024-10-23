import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectToDB from "./db.js";
import bookRoutes from "./routes/books.route.js";
import helmet from "helmet";
dotenv.config();

connectToDB();
const app = express();

app.use(
  cors({
    origin: [
      "https://mern-book-app-alpha.vercel.app",
      "https://redbookpdf.vercel.app",
      "https://redbook-0173-admin.vercel.app",
    ],
    methods: ["POST", "GET", "DELETE"],
    credentials: true,
  })
);

app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "https://vercel.live"],
      },
    },
  })
);

app.use(express.json()); // Add middleware to parse JSON bodies

app.use("/api", bookRoutes);

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
