import express from "express";
import {
  addtoplaylist,
  getAllUsers,
  register,
} from "../controllers/UserController.js";
import { login } from "../controllers/UserController.js";
import { logout } from "../controllers/UserController.js";
import { getMyProfile } from "../controllers/UserController.js";
import { deleteMyProfile } from "../controllers/UserController.js";
import { authorizeAdmin, isAuthenticated } from "../middlewares/auth.js";
import { changePassword } from "../controllers/UserController.js";
import { updateProfile } from "../controllers/UserController.js";
import { updateProfilePicture } from "../controllers/UserController.js";
import { forgetPassword } from "../controllers/UserController.js";
import { resetPassword } from "../controllers/UserController.js";
import { removefromplaylist } from "../controllers/UserController.js";
import singleUpload from "../middlewares/multer.js";
import { updateUserRole } from "../controllers/UserController.js";
import { deleteUser } from "../controllers/UserController.js";

const router = express.Router();

router.route("/register").post(singleUpload, register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/me").get(isAuthenticated, getMyProfile);
router.route("/me").delete(isAuthenticated,deleteMyProfile)
router.route("/changepassword").put(isAuthenticated, changePassword);
router.route("/updateprofile").put(isAuthenticated, updateProfile);
router
  .route("/updateprofilepicture")
  .put(isAuthenticated, singleUpload, updateProfilePicture);
router.route("/forgetpassword").post(forgetPassword);
router.route("/resetpassword/:token").put(resetPassword);
router.route("/addtoplaylist").post(isAuthenticated, addtoplaylist);
router.route("/removefromplaylist").delete(isAuthenticated, removefromplaylist);
router.route("/admin/users").get(isAuthenticated, authorizeAdmin, getAllUsers);
router
  .route("/admin/user/:id")
  .put(isAuthenticated, authorizeAdmin, updateUserRole)
  .delete(isAuthenticated, authorizeAdmin,deleteUser);

export default router;
