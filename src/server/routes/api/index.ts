import * as express from 'express';
import * as passport from 'passport';
import ordersRouter from './orders';
import usersRouter from './users';
import snacksRouter from './snacks';
import drinksRouter from './drinks';
import paymentRouter from './payment';

const router = express.Router();

router.use('/orders', ordersRouter);
router.use('/users', passport.authenticate('jwt'), usersRouter);
router.use('/snacks', passport.authenticate('jwt'), snacksRouter);
router.use('/drinks', passport.authenticate('jwt'), drinksRouter);
router.use('/payment', passport.authenticate('jwt'), paymentRouter);

export default router;