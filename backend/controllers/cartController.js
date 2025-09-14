import UserModel from "../models/userModel.js"

const addToCart = async (req, res) => {
    try {
        const { itemId, size } = req.body;
        const userId = req.userId;

        const userData = await UserModel.findById(userId);
        let cartData = userData.cartData || {}; // cartData is top-level

        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            } else {
                cartData[itemId][size] = 1;
            }
        } else {
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }

        await UserModel.findByIdAndUpdate(userId, { cartData });
        res.json({ success: true, message: "Added to cart", cartData });

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: error.message });
    }
}

const updateCart = async (req, res) => {
    try {
        const { itemId, size, quantity } = req.body;
        const userId = req.userId;

        const userData = await UserModel.findById(userId);
        let cartData = userData.cartData || {};

        if (quantity === 0) {
            // Remove item if quantity is 0
            if (cartData[itemId] && cartData[itemId][size]) {
                delete cartData[itemId][size];
                // Remove item entry if no sizes left
                if (Object.keys(cartData[itemId]).length === 0) {
                    delete cartData[itemId];
                }
            }
        } else {
            // Ensure the item exists before setting quantity
            if (!cartData[itemId]) {
                cartData[itemId] = {};
            }
            cartData[itemId][size] = quantity;
        }

        await UserModel.findByIdAndUpdate(userId, { cartData });
        res.json({ success: true, message: "Cart Updated", cartData });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: error.message });
    }
}

const getUserCart = async (req, res) => {
    try {
        const userId = req.userId;
        const userData = await UserModel.findById(userId);
        let cartData = userData.cartData || {}; // cartData is top-level

        res.json({ success: true, cartData });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: error.message });
    }
}

export { addToCart, updateCart, getUserCart }