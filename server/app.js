import express from "express";


/*express config*/
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));


export default app;

