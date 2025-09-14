import express from 'express';
import { addToCart, getUserCart, updateCart } from '../controllers/cartController.js';
import authUser from '../middleware/auth.js'; // Make sure path is correct

const cartRouter = express.Router();

// FIXED: Use correct handlers for each route
cartRouter.post('/get', authUser, getUserCart);
cartRouter.post('/add', authUser, addToCart); // ← Changed from getUserCart to addToCart
cartRouter.post('/update', authUser, updateCart); // ← Changed from getUserCart to updateCart

export default cartRouter;