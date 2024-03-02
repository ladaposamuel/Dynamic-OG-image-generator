import express from "express";
import apiRoutes from "./routes/apiRoutes";
import errorMiddleware from "./middlewares/errorMiddleware";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use("/api", apiRoutes);

app.use((req, res) => {
  res.status(404).json({
    status: 404,
    message: "Route not found",
  });
});

app.use(errorMiddleware);
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

export default app;
