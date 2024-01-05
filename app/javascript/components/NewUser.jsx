import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const NewUser = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const onChange = (event, setFunction) => {
        setFunction(event.target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        const url = "/api/v1/users/create";

        if (username.length == 0 || password.length == 0)
            return;

        const body = {
            username,
            password,
        };

        const token = document.querySelector('meta[name="csrf-token"]').content;
        fetch(url, {
            method: "POST",
            headers: {
                "X-CSRF-Token": token,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Network response was not ok.");
            })
            .then((response) => navigate(`/user/${response.id}`))
            .catch((error) => console.log(error.message));
    };

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-sm-12 col-lg-6 offset-lg-3">
                    <h1 className="font-weight-normal mb-5">
                        Add a new user to our awesome user collection.
                    </h1>
                    <form onSubmit={onSubmit}>
                        <div className="form-group">
                            <label htmlFor="userUsername">Username</label>
                            <input
                                type="text"
                                name="username"
                                id="userUsername"
                                className="form-control"
                                required
                                onChange={(event) => onChange(event, setUsername)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="userPassword">Password</label>
                            <input
                                type="text"
                                name="password"
                                id="userPassword"
                                className="form-control"
                                required
                                onChange={(event) => onChange(event, setPassword)}
                            />
                            <small id="ingredientsHelp" className="form-text text-muted">
                                Separate each ingredient with a comma.
                            </small>
                        </div>
                        <button type="submit" className="btn custom-button mt-3">
                            Submit
                        </button>
                        <Link to="/" className="btn btn-link mt-3">
                            Back to home
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default NewUser;