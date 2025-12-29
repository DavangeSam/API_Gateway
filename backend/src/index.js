
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const rateLimiter = require("./middleware/ratelimit");
const logger = require("./middleware/logging");
const proxyRoutes = require("./routes/proxy");
const adminRoutes = require("./routes/admin");

const app = express();
app.use(cors());
app.use(express.json());
app.use(logger);
app.use(rateLimiter);

app.use("/api", proxyRoutes);
app.use("/admin", adminRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`API Gateway running on port ${PORT}`));
