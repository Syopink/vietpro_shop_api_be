const express = require("express");
const router = express.Router();
// Import Controllers
const CategoryController = require("../apps/controllers/apis/category");
const ProductController = require("../apps/controllers/apis/product");
const OrderController = require("../apps/controllers/apis/order");
const AuthController = require("../apps/controllers/apis/auth");
const CustomerController = require("../apps/controllers/apis/customer");
// Import Middlewares
const AuthMiddlewares = require("../apps/middlewares/auth");

router.get("/categories", CategoryController.index);
router.get("/categories/:id", CategoryController.show);
router.get("/categories/:id/products", CategoryController.productsCategory);
router.get("/products", ProductController.index);
router.get("/products/:id", ProductController.show);
router.get("/products/:id/comments", ProductController.comments);
router.post("/products/:id/comments", ProductController.storeComments);
router.post("/customer/login", AuthController.loginCustomers);
router.post("/customer/register", AuthController.registerCustomers);
router.post("/customer/update",AuthMiddlewares.verifyAuthenticationCustomer, CustomerController.update);
router.post("/order",AuthMiddlewares.verifyAuthenticationCustomer,OrderController.order);
router.get("/customer/:id/orders",AuthMiddlewares.verifyAuthenticationCustomer,OrderController.ordersCustomer);
router.get("/customer/order/:id",AuthMiddlewares.verifyAuthenticationCustomer, OrderController.orderDetails);
router.get("/customer/order/:id/canceled",AuthMiddlewares.verifyAuthenticationCustomer, OrderController.canceledOrder);
router.get("/customer/test",AuthMiddlewares.verifyAuthenticationCustomer,(req, res)=>{
    res.json("Login Access")
});


module.exports = router;