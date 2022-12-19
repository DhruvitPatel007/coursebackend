import express from "express";
import { authorizeSubscribers, isAuthenticated } from "../middlewares/auth.js";
import { buySubscription, paymentverification } from "../controllers/PaymentController.js";
import { getRazorPayKey } from "../controllers/PaymentController.js";
import { cancleSubscription } from "../controllers/PaymentController.js";
const router = express.Router();

//Buy Subscription
router.route("/subscribe").get(isAuthenticated, buySubscription);

//Verify Payment and save reference in database
router.route("/paymentverification").post(isAuthenticated,paymentverification);

//Get Razorpay key
router.route("/razorpaykey").get(getRazorPayKey);

//Cancel Subscription
router.route("/subscribe/cancel").delete(isAuthenticated,cancleSubscription,authorizeSubscribers)


export default router;
