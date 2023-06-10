const { User } = require('../models');
const bcrypt = require('bcrypt');
//VERIFY TOKEN
const jwt = require('jsonwebtoken');

const authController = {};
authController.register = async (req, res) => {
 try {
    const {password}= req.body.password;
    if (password.length < 6) {
        return res.send('Password must be longer than 6 characters');
    }
    const newPassword = bcrypt.hashSync(req.body.password, 10);

        const newUser = await User.create(
            {
                name: req.body.name,
                lastname: req.body.lastname,
                email: req.body.email,
                phone: req.body.phone,
                roleId: req.body.role_id
            }
        );

        return res.send(newUser);
    } catch (error) {
        return res.send('Something went wrong creating users ' + error.message)
    }
}

authController.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        // const email = req.body.email;
        // const password = req.body.password;

        const user = await User.findOne(
            {
                where: {
                    email: email
                }
            }
        );

        if (!user) {
            return res.json(
                {
                    success: true,
                    message: "Wrong credentials"
                }
            )
        }

        //Validamos password
        const isMatch = bcrypt.compareSync(password, user.password); // true      

        if (!isMatch) {
            return res.json(
                {
                    success: true,
                    message: "Wrong credentials"
                }
            )
        }

        const token = jwt.sign(
            { 
                userId: user.id,
                roleId: user.role_id,
                email: user.email
            },
            'secreto',
            {
                expiresIn: '3h' 
            }
        );  

        return res.json(
            {
                success: true,
                message: "User Logged",
                token: token
            }
        );
    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: "user cant be logged",
                error: error
            }
        )
    }
}
 
module.exports = authController







