import { Router } from "express";
import {
  getUserInfo,
  login,
  signup,
  updateProfile,
  addProfileImage,
  removeProfileImage,
  logOut, 
} from "../controllers/AuthController.js";
import { verifyToken } from "../middlewares/AuthMiddleware.js";
import multer from "multer";

const authRoutes = Router();
const upload = multer({ dest: "uploads/profiles/" });

authRoutes.post("/signup", signup);
authRoutes.post("/login", login);

// verifyToken is a middleware that checks if the token is valid.
// Middleware should be added as the second argument in the route.
authRoutes.get("/user-info", verifyToken, getUserInfo);
authRoutes.post("/update-profile", verifyToken, updateProfile);
authRoutes.post(
  "/add-profile-image",
  verifyToken,
  upload.single("profile-image"),
  addProfileImage
);
authRoutes.delete("/remove-profile-image",verifyToken, removeProfileImage);
authRoutes.post("/logout", logOut);

export default authRoutes;
