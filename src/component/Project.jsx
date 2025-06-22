import React from 'react'
import foodImage from '../images/food app.jpg'
import jobPortal from '../images/jobPortal.jpg'
import twitter from '../images/twitter.jpg'
import movie from '../images/movie.jpg'
import './Project.css'

const Project = () => {
    return (
        <>
            <div className="project">
                <div className="project3">
                    <img src={foodImage} alt="project banner" loading='lazy' />
                    <h1>DhosaPlaza - Food Delivery App</h1>
                    <div className="aboutProject">
                        <h3>About Project :</h3>
                        <p>Food Delivery App, you can order food , pay online,  add food to cart...</p>
                    </div>
                    <div className="aboutProject">
                        <h3>Tech Stack :</h3>
                        <p>MERN, Material UI</p>
                    </div>
                </div>
                <div className="project3">
                    <img src={jobPortal} alt="project banner" loading='lazy' />
                    <h1>KaamKarlo - Job Portal App</h1>
                    <div className="aboutProject">
                        <h3>About Project :</h3>
                        <p>you can browse jobs, apply for job, can also post job</p>
                    </div>
                    <div className="aboutProject">
                        <h3>Tech Stack :</h3>
                        <p>MERN, Material UI</p>
                    </div>
                </div>
                <div className="project3">
                    <img src={twitter} alt="project banner" loading='lazy' />
                    <h1>Social media App</h1>
                    <div className="aboutProject">
                        <h3>About Project :</h3>
                        <p>Create Post, like, bookmark, delete, follow other user</p>
                    </div>
                    <div className="aboutProject">
                        <h3>Tech Stack :</h3>
                        <p>MERN, Material UI</p>
                    </div>
                </div>
                <div className="project3">
                    <img src={movie} alt="project banner" loading='lazy' />
                    <h1>Movie Finder App</h1>
                    <div className="aboutProject">
                        <h3>About Project :</h3>
                        <p>Implemented Search, sort filter and Pagination</p>
                    </div>
                    <div className="aboutProject">
                        <h3>Tech Stack :</h3>
                        <p>MERN, Material UI</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Project