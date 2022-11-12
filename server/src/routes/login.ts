import { Request, Response, Router } from "express";

const router = Router();

router.post("/login", (req: Request, res: Response) => {
  res.send("hello");
});