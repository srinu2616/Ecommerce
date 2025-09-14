import OrderModel from "../models/orderModel.js"
import UserModel from "../models/userModel.js"
//Placing orders using COD method

const placeOrder=async(req,res)=>{
    try{
        const {items,amount,address}=req.body
        const userId = req.userId;

        const orderData={
            userId,
            items,
            address,
            amount,
            paymentMethod:"COD",
            payment:false,
            date:Date.now()

        }
        const newOrder=new OrderModel(orderData)
        await newOrder.save()

        await UserModel.findByIdAndUpdate(userId,{cartData:{}})
        res.json({success:true,message:"Order Placed"})

    }
    catch(error){
        console.log(error)
        res.json({success:false,message:error.message})

    }

}

const placeOrderStripe=async(req,res)=>{
    
}


const placeOrderRazorpay=async(req,res)=>{
    
}

//All Orders data for Admin Panel

const allOrders=async(req,res)=>{
    try{
        const orders=await OrderModel.find({})
        res.json({success:true,orders})
    }
    catch(error){
        console.log(error)
        res.json({success:false,message:error.message})
    }
  
    
}

//user Order Data for Frontend
const userOrders=async(req,res)=>{
    try{

        const userId = req.userId;
        const orders=await OrderModel.find({userId})
        res.json({success:true,orders})

    }
    catch(error){
        console.log(error)
        res.json({success:false,message:error.message})


    }


}

//update order status from Admin Panel


const updateStatus = async (req, res) => {
  try {
    const { orderId, status } = req.body;

    // Input validation
    if (!orderId || !status) {
      return res.status(400).json({
        success: false,
        message: "Order ID and status are required"
      });
    }

    // Validate the status value
    const validStatuses = [
      "Order Placed",
      "Packing",
      "Shipped",
      "Out for delivery",
      "Delivered"
    ];
    
    if (!validStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        message: "Invalid status value"
      });
    }

    // Update the order status
    const updatedOrder = await OrderModel.findByIdAndUpdate(
      orderId, 
      { status },
      { new: true, runValidators: true }
    );

    if (!updatedOrder) {
      return res.status(404).json({
        success: false,
        message: "Order not found"
      });
    }

    // Send success response
    res.json({ 
      success: true, 
      message: "Order status updated successfully",
      order: updatedOrder
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ 
      success: false, 
      message: error.message 
    });
  }
};



export {placeOrder,placeOrderStripe,placeOrderRazorpay,allOrders,userOrders,updateStatus}