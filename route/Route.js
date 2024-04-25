import express from 'express';
import StudentController from '../controller/StudentController.js';

const route = express.Router();

route.post('/create', StudentController.insert_student);
route.get('/read', StudentController.view_student);

export default route;
