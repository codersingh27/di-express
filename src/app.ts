import * as express from "express";
import * as cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hey you i'm here...")
})

// this is for 404
app.use(function (req, res, next) {
  res.status(404).send(" route not found");
});

export default app
