import jwt from "jsonwebtoken";
import Admin from "../models/Admin.js";

export const loginAdmin = async (req, res) => {

    try {

        const { username, password } = req.body;

        if (!username || !password) {

            return res.status(400).json({

                success: false,
                message: "Username and Password are required"

            });

        }

        const admin = await Admin.findOne({

            name: username.trim()

        });

        if (!admin) {

            return res.status(404).json({

                success: false,
                message: "Admin not found"

            });

        }

        if (admin.Password !== password) {

            return res.status(401).json({

                success: false,
                message: "Incorrect Password"

            });

        }

        const token = jwt.sign(

            {

                id: admin.id,
                username: admin.name

            },

            process.env.JWT_SECRET,

            {

                expiresIn: "1d"

            }

        );

        res.status(200).json({

            success: true,
            message: "Login Successful",
            token,

            admin: {

                id: admin.id,
                name: admin.name,
                sportHead: admin.sportHead

            }

        });

    }

    catch (error) {

        res.status(500).json({

            success: false,
            message: error.message

        });

    }

};