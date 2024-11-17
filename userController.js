const User = require('../models/userModel');
const Admin = require('../models/adminModel');
const Assignment = require('../models/assignmentModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.registerUser = async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({ username, password: hashedPassword });
  await newUser.save();
  res.json({ message: 'User registered successfully' });
};

exports.loginUser = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user || !bcrypt.compareSync(password, user.password)) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
  const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET);
  res.json({ token });
};

exports.uploadAssignment = async (req, res) => {
  const { task, admin } = req.body;
  const assignment = new Assignment({ userId: req.user.id, task, admin });
  await assignment.save();
  res.json({ message: 'Assignment uploaded successfully' });
};

exports.getAllAdmins = async (req, res) => {
  const admins = await Admin.find({}, 'username');
  res.json(admins);
};
