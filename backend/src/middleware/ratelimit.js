
    const rateLimit = require("express-rate-limit");
    module.exports = rateLimit({
      windowMs: 60 * 1000,
      max: 100,
      keyGenerator: (req) => req.headers["x-api-key"] || req.ip
    });
    