
    const express = require("express");
    const { v4: uuid } = require("uuid");
    const router = express.Router();
    const keys = [];
    router.post("/keys", (req, res) => {
      const key = uuid();
      keys.push(key);
      res.json({ apiKey: key });
    });
    router.get("/keys", (req, res) => res.json(keys));
    module.exports = router;
    