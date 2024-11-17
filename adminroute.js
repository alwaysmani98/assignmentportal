const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const { authenticateUser } = require('../middlewares/authMiddleware');

router.post('/register', adminController.registerAdmin);
router.post('/login', adminController.loginAdmin);
router.get('/assignments', authenticateUser, adminController.getAssignments);
router.post('/assignments/:id/accept', authenticateUser, adminController.acceptAssignment);
router.post('/assignments/:id/reject', authenticateUser, adminController.rejectAssignment);

module.exports = router;
