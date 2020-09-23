import 'reflect-metadata'
import * as express from "express";
import * as cors from "cors";
import userIndexRouter from './routes/user-routes/index.route';
const app = express();
app.use(cors());
app.use(express.json());

app.use("/apiv1", userIndexRouter)

app.get("/", (req, res) => {
  res.send("Hey you i'm here...")
})

// this is for 404
app.use(function (req, res, next) {
  res.status(404).send(" route not found");
});

export default app
