import React from "react";
import { Link } from "react-router-dom";

export default () => (
    <div>
        <header class="sticky-top bg-white border-bottom border-default">
            <div class="container">

                <nav class="navbar navbar-expand-lg navbar-white">
                    <a class="navbar-brand" href="index.html">
                        W e b f o r u m
                    </a>
                    <button class="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#navigation">
                        <i class="ti-menu"></i>
                    </button>

                    <div class="collapse navbar-collapse text-center" id="navigation">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item">
                                <a class="nav-link" href="/">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="contact.html">Contact</a>
                            </li>
                        </ul>

                        <select class="m-2 border-0" id="select-language">
                            <option id="en" value="about/" selected>En</option>
                            <option id="fr" value="fr/about/">Fr</option>
                        </select>

                        <div class="search px-4">
                            <form class="form-inline my-2 my-lg-0">
                                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                <button class="btn btn-outline-dark my-2 my-sm-0" type="submit">Search</button>
                            </form>
                        </div>

                    </div>
                </nav>
            </div>
        </header>
        <section class="section">
            <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
                <div className="jumbotron jumbotron-fluid bg-transparent">
                    <div className="container secondary-color">
                        <h1 className="display-4">Welcome to W e b f o r u m!</h1>
                        <p className="lead">
                            A curated space for the best the content and collaboration.
                        </p>
                        <hr className="my-4" />
                        <Link
                            to="/user"
                            className="btn btn-lg custom-button"
                            role="button"
                        >
                            Sign Up
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    </div>
);