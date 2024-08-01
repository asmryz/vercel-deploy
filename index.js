const express = require("express");
const app = express();
const { neon } = require("@neondatabase/serverless");

const sql = neon(`postgresql://asimdb_owner:zOwegpGBFZ20@ep-icy-frost-a553kwhr-pooler.us-east-2.aws.neon.tech/asimdb?sslmode=require`);

// Get all faculty
app.get("/", async (req, res, next) => {
    try {
        const faculty = await sql`SELECT * FROM faculty`;
        return res.json(faculty);
    } catch (err) {
        next(err);
    }
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});