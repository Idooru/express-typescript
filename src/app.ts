import express, { Request, Response, NextFunction } from "express";

const app = express();

app.set("port", process.env.PORT || 8080);

app.get("/welcome", (req: Request, res: Response, next: NextFunction) => {
  console.log(`You connect in ${req.method} ${req.url}`);
  res.send("welcome!");
});

app.listen(app.get("port"), () => {
  console.log(`
  ################################################
  🛡️  Server listening on port: ${app.get("port")}🛡️
  ################################################
    `);
});
