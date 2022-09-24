import express from 'express';
import { getLoggedInUser, login, registration } from '../controllers/auth.controller';
import authCheck from '../middleware/auth.middleware';

const authRoute = express.Router();

authRoute.get('/', authCheck, getLoggedInUser);
authRoute.post('/registration', registration);
authRoute.post('/login', login);

export default authRoute;
