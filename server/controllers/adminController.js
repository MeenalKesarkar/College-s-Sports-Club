import Admin from "../models/Admin.js";

export const loginAdmin = async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({
                success: false,
                message: "Username and password are required"
            });
        }

        const admin = await Admin.findOne({
            name: username.trim()
        });

        console.log("Matched Admin:", admin);

        if (!admin) {
            return res.status(404).json({
                success: false,
                message: "Username not found"
            });
        }

        if (admin.Password !== password) {
            return res.status(401).json({
                success: false,
                message: "Incorrect password"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Login successful",
            admin: {
                id: admin.id,
                name: admin.name,
                sportHead: admin.sportHead
            }
        });

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};