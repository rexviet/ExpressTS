import * as express from "express";
import * as bodyParser from "body-parser";
import { Routes } from "./routes";
import * as http from 'http';

class App {

    private app: express.Application;
    public routePrv: Routes = new Routes();
    
    constructor() {
        this.app = express();
        this.config();        
        this.routePrv.init(this.app);
        this.startServer();
    }

    private config(): void{
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

    get App(): express.Application {
        return this.app;
    }

    startServer(): void {
        const server = http.createServer(this.app);
        server.listen(3000, async () => {
            console.log('server is listening on port', 3000);
        });
    }
}

export default new App().App;