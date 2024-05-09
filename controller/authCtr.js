const User = require('../model/User');
const bcrypt = require('bcrypt');

const registerCb = async (req, res) => {
    try {
        const { fname, lname, email, password, conPassword } = req.body;
      
        // Check for existing email
        const doc = await User.findOne({ email });
        if (doc) {
            throw new Error('Email already exists'); // Throw an error instead of returning
        }
      
        // Verify password match
        if (password !== conPassword) {
            throw new Error('Passwords do not match'); // Throw an error instead of returning
        }
      
        // Hash password securely
        const hashedPassword = await bcrypt.hash(password, 10);
      
        // Create and save new user
        const user = new User({ firstName: fname, lastName: lname, email, password: hashedPassword });
        await user.save();
      
        res.status(201).json({ message: 'User registered successfully', user });
    } catch (error) {
        console.error(error); // Log the error for debugging
        let statusCode = 500;
        let message = 'Internal Server Error';
      
        // Handle specific errors and provide more informative messages
        if (error.message === 'Email already exists') {
            statusCode = 400;
            message = 'Email already exists';
        } else if (error.message === 'Passwords do not match') {
            statusCode = 400;
            message = 'Passwords do not match';
        }
        res.status(statusCode).json({ message });
    }
}

module.exports = registerCb;