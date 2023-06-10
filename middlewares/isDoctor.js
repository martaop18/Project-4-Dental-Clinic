const { User } = require("../models");

const isDoctor = async (req, res, next) => {
    try {
        const doctor = await User.findAll({
        where: { role_id: req.roleId },
    });

    if (!doctor) {
        return res.status(500).json({
        success: true,
        message: "You do not have permissions.",
        });
    }

    if (req.roleId === 3) {
        next();
    }
} catch (error) {
        return res.status(500).json({
            success: false,
            message: "Something went wrong",
            error: error.message,
        });
    }
};

module.exports = isDoctor;