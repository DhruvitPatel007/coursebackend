import express from "express";
import { deleteLecture, getAllCourses } from "../controllers/CourseController.js";
import { createCourse } from "../controllers/CourseController.js";
import { getCourseLectures } from "../controllers/CourseController.js";
import { addLecture } from "../controllers/CourseController.js";
import { authorizeAdmin, isAuthenticated, authorizeSubscribers } from "../middlewares/auth.js";
import singleUpload from "../middlewares/multer.js";
import { deleteCourse } from "../controllers/CourseController.js";

const router = express.Router();

//Get all courses without Lectures
router.route("/courses").get(getAllCourses);

//Create new courses - only admin
router
  .route("/createCourse")
  .post(isAuthenticated, authorizeAdmin, singleUpload, createCourse);

//Add lectures, Delete Course, Get Course Details
router
  .route("/course/:id")
  .get(isAuthenticated, authorizeSubscribers,getCourseLectures)
  .post(isAuthenticated, authorizeAdmin, singleUpload, addLecture)
  .delete(isAuthenticated, authorizeAdmin, deleteCourse);

//Delete lectures
router
  .route("/lecture")
  .delete(isAuthenticated, authorizeAdmin,deleteLecture);

export default router;
