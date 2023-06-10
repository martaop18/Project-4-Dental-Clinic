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
                message: "User profile  cant be retrieved",
                error: error
            }
        )    
    }
}

module.exports = userController;