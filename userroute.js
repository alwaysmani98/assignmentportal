const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { authenticateUser } = require('../middlewares/authMiddleware');

router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);
router.post('/upload', authenticateUser, userController.uploadAssignment);
router.get('/admins', authenticateUser, userController.getAllAdmins);

module.exports = router;
