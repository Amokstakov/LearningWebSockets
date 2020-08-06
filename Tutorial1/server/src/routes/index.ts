import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send({ response: "Msg Received" }).status(200);
});

export default router;
