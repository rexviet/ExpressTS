import {Request, Response} from 'express';

export default class UserController {
    private static instance: UserController;
    private users: Array<any>;

    constructor() {
        this.users = [
            {
                id: 1,
                name: 'A'
            },
            {
                id: 2,
                name: 'B'
            },
        ];
    }

    static getInstance() {
        if (!this.instance) {
            this.instance = new UserController();
        }
        return this.instance;
    }

    public getAllUsers = (req: Request, res: Response) => {
        console.log('getAllUsers');
        return res.status(200).json(this.users);
    }
}