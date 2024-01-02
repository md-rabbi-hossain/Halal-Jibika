import React from 'react';
import { useParams } from 'react-router-dom';
import '../Jobdetails/jobdetails.css'
const JobDetails = () => {

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


    const { id } = useParams();

    console.log(id)
    const job = jobArray.find(job => job.id === +id);
    if (!job) {
        // Handle the case where the job with the given ID is not found
        return <div>Job not found</div>;
    }

    return (
        <div className='main-dts'>
            <div className="job-details-container">
                <h1>{job.jobTitle}</h1>
                <p>{job.companyName}</p>
                <p>{job.jobPosition}</p>
                <p>{job.jobDescription}</p>
            </div>
        </div>
    );
};

export default JobDetails;
