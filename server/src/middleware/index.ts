import express, { Request, response, Response } from "express";
const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  response.send("Hello wordl!");
});

export default router;
