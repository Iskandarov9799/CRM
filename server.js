const express = require("express");
const app = express();
const morgan = require("morgan");
const routes = require("./routes/index");
const postgres = require("./modules/postgres");
const databaseMiddleware = require("./middlewares/databaseMiddleware");

async function server(mode) {
    try {

        app.listen(process.env.PORT || 8000, () => 
        console.log(`Server is ready ${process.env.PORT || 8000}`));

        const db = await postgres();

        await databaseMiddleware(db, app);

        app.use(express.json());
        app.use(express.urlencoded({ extended: true}));

        if(mode == "dev"){
            app.use(morgan("dev"));
        };


    } catch (error) {
        console.log("Server Error", error);
    } finally {
        routes(app);
    }
}


module.exports = server;