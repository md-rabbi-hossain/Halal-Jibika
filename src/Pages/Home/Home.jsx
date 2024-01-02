import React from 'react';
import './Homes.css'
import { Link } from 'react-router-dom';
import JobDetails from '../../components/Jobdetails/Jobdetails';



const Home = () => {
    const jobArray = [
        {
            "id": 1,
            "jobTitle": "Software Engineer",
            "companyLogo": "https://example.com/company1_logo.png",
            "companyName": "Tech Co",
            "jobPosition": "Senior",
            "jobDescription": "Join our dynamic team of software engineers and contribute to cutting-edge projects."
        },
        {
            "id": 2,
            "jobTitle": "Data Analyst Intern",
            "companyLogo": "https://example.com/company2_logo.png",
            "companyName": "Data Solutions Inc.",
            "jobPosition": "Intern",
            "jobDescription": "Exciting internship opportunity for data enthusiasts. Learn and grow with our talented team."
        },
        {
            "id": 3,
            "jobTitle": "UX/UI Designer",
            "companyLogo": "https://example.com/company3_logo.png",
            "companyName": "Design Innovations Ltd.",
            "jobPosition": "Junior",
            "jobDescription": "Shape user experiences and create visually stunning designs. Join our creative design team."
        },
        {
            "id": 4,
            "jobTitle": "Marketing Specialist",
            "companyLogo": "https://example.com/company4_logo.png",
            "companyName": "Market Pro",
            "jobPosition": "Senior",
            "jobDescription": "Lead marketing campaigns and strategies for our growing company. Creative minds welcome!"
        },
        {
            "id": 5,
            "jobTitle": "Financial Analyst",
            "companyLogo": "https://example.com/company5_logo.png",
            "companyName": "Finance Experts Inc.",
            "jobPosition": "Junior",
            "jobDescription": "Analytical minds wanted! Join our finance team and contribute to data-driven decision-making."
        },
    ]


    return (
        <>
            <div className="container">
                <div className="welcome">
                <h1 className="welcomeMessage">Welcome to our Job Portal!</h1>
                <p className="siteDescription">Find your dream job and take the next step in your career with us.</p>
                <div className="buttonContainer">
                    <button style={{ width: '300px' }}>
                        <Link to='/job' style={{ textDecoration: 'none', color: 'inherit' }}>
                            Explore Now
                        </Link>
                    </button>
                </div>
                </div>
            </div>
            <div className="latest">
                <h1>Explore new latest job</h1>
                <div className="containers">
                    {
                        jobArray.map((job) => (
                            <Link to={`/jobs/${job.id}`} style={{textDecoration:'none', color:'inherit'}}> <section key={job.id} className="job-listings">
                                <ul>
                                    <li>
                                        <h3>{job.jobTitle}</h3>
                                        <p>{job.companyName}</p>
                                        <p>{job.jobPosition}</p>
                                        <p>{job.jobDescription}</p>
                                        <Link to='/apply'>Apply Now</Link>
                                    </li>
                                </ul>
                            </section></Link>
                        ))
                    }
                </div>
            </div>
        </>
    );
};



export default Home;



