import {Request, Response, Router} from "express";
import userRoutes from './user.route';

export class Routes {
    private router = Router();

    public init(app): void {          
        this.router.route('/')
            .get((req: Request, res: Response) => {            
                res.status(200).send({
                    message: 'GET request successfulll!!!!'
                })
            });
        
        this.router.use('/users', userRoutes);

        app.use('/api/', this.router);
    }
}