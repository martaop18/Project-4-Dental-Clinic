const isAdmin = async (req, res, next) => {
  try {
    if (req.roleId === 2) {
      next();
    } else {
      return res.json({
        success: true,
        message: "You do not have permissions",
      });
    }    
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};

module.exports = isAdmin;
