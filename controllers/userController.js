const { User } = require('../models');
const authController = require("./authController");


const userController = {}

userController.getUser = async(req, res) => {
    try {
        const userId = req.body.user_id;
        

        const favorite = await Favorite.create(
            {
                user_id: userId,
            
            }
        );

        return res.json(
            {
                success: true,
                message: "got the User",
                data: favorite
            }
        );
    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: "Favorite Book cant be created",
                error: error
            }
        )
    }

}

module.exports = userController;