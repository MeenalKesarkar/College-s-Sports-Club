import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../service/api";
import './Login.css';
function Login() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({

        username: "",
        password: ""

    });

    const handleChange = (e) => {

        setFormData({

            ...formData,
            [e.target.name]: e.target.value

        });

    };

  const handleLogin = async (e) => {

    e.preventDefault();

    try {

        const response = await api.post("/admin/login", formData);

        const data = response.data;

        if (data.success) {

            localStorage.setItem("token", data.token);

            localStorage.setItem("admin", JSON.stringify(data.admin));

            alert("Login Successful");

            navigate("/dashboard");

        } else {

            alert(data.message);

        }

    } catch (error) {

        console.log(error);

        alert(
            error.response?.data?.message ||
            "Login Failed"
        );

    }

};

    return (

        <div className="login-container">

            <form className="login-form" onSubmit={handleLogin}>

                <h2>Admin Login</h2>

                <input

                    type="text"

                    name="username"

                    placeholder="Username"

                    value={formData.username}

                    onChange={handleChange}

                    required

                />

                <input

                    type="password"

                    name="password"

                    placeholder="Password"

                    value={formData.password}

                    onChange={handleChange}

                    required

                />

                <button type="submit">

                    Login

                </button>

            </form>

        </div>

    );

}

export default Login;