import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const User = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState({ password: "" });

    useEffect(() => {
        const url = `/api/v1/show/${params.id}`;
        fetch(url)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Network response was not ok.");
            })
            .then((response) => setUser(response))
            .catch(() => navigate("/users"));
    }, [params.id]);

    const deleteUser = () => {
        const url = `/api/v1/destroy/${params.id}`;
        const token = document.querySelector('meta[name="csrf-token"]').content;

        fetch(url, {
            method: "DELETE",
            headers: {
                "X-CSRF-Token": token,
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Network response was not ok.");
            })
            .then(() => navigate("/users"))
            .catch((error) => console.log(error.message));
    };

    return (
        <div className="">
            <div className="hero position-relative d-flex align-items-center justify-content-center">
                <img
                    src={user.image}
                    alt={`${user.username} image`}
                    className="img-fluid position-absolute"
                />
                <div className="overlay bg-dark position-absolute" />
                <h1 className="display-4 position-relative text-white">
                    {user.username}
                </h1>
            </div>
            <div className="container py-5">
                <div className="row">
                    <div className="col-sm-12 col-lg-3">
                        <ul className="list-group">
                            <h5 className="mb-2">Password</h5>
                            {user.password}
                        </ul>
                    </div>
                    <div className="col-sm-12 col-lg-2">
                        <button
                            type="button"
                            className="btn btn-danger"
                            onClick={deleteUser}
                        >
                            Delete User
                        </button>
                    </div>
                </div>
                <Link to="/users" className="btn btn-link">
                    Back to users
                </Link>
            </div>
        </div>
    );
};

export default User;