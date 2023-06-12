const { User } = require('../models');
const userController = {};

userController.getUser = async(req, res) => {
    try {
        const userId = req.userId;

        const userProfile = await User.findByPk(
            userId,
            {
                attributes: {
                    exclude: ["password"]
                },
                       
                 }
        )
        return res.json({
            success: true,
            message: "user profile retrieved",
            data: userProfile
        })
    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: "User profile  cannot be retrieved",
                error: error
            }
        )    
    }
}
//UPDATE USER
userController.updateUser = async(req, res) => {
    try {
        const userId = req.userId;
        console.log(userId)

        const user = await User.findByPk(userId);

        if (!user) {
            return res.json(
                {
                    success: true,
                    message: "User doesnt exist"
                }
            );
        };

        const { phone, email } = req.body;

        const userUpdated = await User.update(
            {
                phone: phone,
                email: email
            },
            {
                where: {
                    id: userId
                }
            }
        )

        return res.json(
            {
                success: true,
                message: "User updated",
                data: userUpdated
            }
        );
    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: "User cant be updated",
                error: error
            }
        )
    }
}
//GET ALL USERS
userController.getAllUsers =  async(req, res) => {
    try {
        const users = await User.findAll({
            where: {
                role_id: 1
            }
        });
       
        return res.json({
            success: true,
            message: "users retrieved",
            data: users
        })
    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: "Users cant be retrieved",
                error: error
            }
        )    
    }
}

module.exports = userController;