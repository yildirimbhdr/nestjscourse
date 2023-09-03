import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

@Injectable()
export class CustomerExpireMiddleware implements NestMiddleware {

    use(req: Request,
        res: Response,
        next: NextFunction) {

        const { valid } = req.headers;
        if (!valid) res.status(403).json({ message: 'Customer not expire' });
        else next();
    }
}