const Admin = require("../models/Admin");

exports.loginAdmin = async(req, res)=>{

    const{username, password} = req.body;

    const admin = await Admin.findOne({
        username,
        password
    });

    if(admin){
        res.json({
            success: true
        });
    }
    else{
        res.status(401).json({
            success:false,
            message:"Invalid Credentials"
        });
    }
};