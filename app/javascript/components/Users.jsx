import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Users = () => {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const url = "/api/v1/users/index";
        fetch(url)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                throw new Error("Network response was not ok.");
            })
            .then((res) => setUsers(res))
            .catch(() => navigate("/"));
    }, []);

    const allUsers = users.map((user, index) => (
        <div key={index} className="col-md-6 col-lg-4">
            <div className="card mb-4">
                <img
                    src={user.image}
                    className="card-img-top"
                    alt={`${user.name} image`}
                />
                <div className="card-body">
                    <h5 className="card-title">{user.name}</h5>
                    <Link to={`/user/${user.id}`} className="btn custom-button">
                        View User
                    </Link>
                </div>
            </div>
        </div>
    ));
    const noUser = (
        <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
            <h4>
                No users yet. Why not <Link to="/new_user">create one</Link>
            </h4>
        </div>
    );

    return (
        <>
            <section className="jumbotron jumbotron-fluid text-center">
                <div className="container py-5">
                    <h1 className="display-4">Users for every occasion</h1>
                    <p className="lead text-muted">
                        We’ve pulled together our most popular users, our latest
                        additions, and our editor’s picks, so there’s sure to be something
                        tempting for you to try.
                    </p>
                </div>
            </section>
            <div className="py-5">
                <main className="container">
                    <div className="text-end mb-3">
                        <Link to="/user" className="btn custom-button">
                            Create New User
                        </Link>
                    </div>
                    <div className="row">
                        {users.length > 0 ? allUsers : noUser}
                    </div>
                    <Link to="/" className="btn btn-link">
                        Home
                    </Link>
                </main>
            </div>
        </>
    );
};

export default Users;