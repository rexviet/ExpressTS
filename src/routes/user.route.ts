import {Router} from 'express';
import UserController from '../controllers/user.controller';

class UserRoute {
    private router: Router = Router();
    private userController: UserController = UserController.getInstance();
    
    constructor() {
        console.log('user route constructor');
        this.init();
    }

    private init() {
        this.router.route('/')
            .get(this.userController.getAllUsers);
    }

    get Route(): Router{
        return this.router;
    }
}

export default new UserRoute().Route;