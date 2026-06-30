import cookieParser from "cookie-parser";

import express, { Application, Request, Response } from "express";
import config from "./config";
import cors from "cors";
import  httpStatus  from "http-status";

const app: Application = express();

app.use(cors({
  origin : config.app_url,
  credentials : true,
}))


app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cookieParser());

app.get("/", (req : Request,res : Response )=>{
  res.send("HELLO EPICK")

});







app.post("/api/users", async (
  req: Request, res: Response)=>{
const payload = req.body
console.log(payload);

res.status(httpStatus.CREATED). json({
  massage : "user rejistition sussesfully"
})
  })












export default app;