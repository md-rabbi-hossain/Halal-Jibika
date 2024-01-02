import React from 'react';
import { Link, useParams } from 'react-router-dom';
import '../Details/details.css'
const Details = () => {

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
        {
            "id": 6,
            "jobTitle": "Product Manager",
            "companyLogo": "https://example.com/company6_logo.png",
            "companyName": "Product Innovators",
            "jobPosition": "Senior",
            "jobDescription": "Drive product development and strategy. Join a team passionate about creating innovative solutions."
        },
        {
            "id": 7,
            "jobTitle": "Human Resources Coordinator",
            "companyLogo": "https://example.com/company7_logo.png",
            "companyName": "HR Solutions Ltd.",
            "jobPosition": "Junior",
            "jobDescription": "Support our HR department in recruitment, employee relations, and HR initiatives. Entry-level position."
        },
        {
            "id": 8,
            "jobTitle": "Network Administrator",
            "companyLogo": "https://example.com/company8_logo.png",
            "companyName": "Connect Tech Systems",
            "jobPosition": "Senior",
            "jobDescription": "Manage and optimize our network infrastructure. Experienced professionals wanted!"
        },
        {
            "id": 9,
            "jobTitle": "Social Media Intern",
            "companyLogo": "https://example.com/company9_logo.png",
            "companyName": "Social Buzz Agency",
            "jobPosition": "Intern",
            "jobDescription": "Exciting internship to learn about social media management and content creation. Join our vibrant team!"
        },
        {
            "id": 10,
            "jobTitle": "Graphic Designer",
            "companyLogo": "https://example.com/company10_logo.png",
            "companyName": "Creative Studios",
            "jobPosition": "Junior",
            "jobDescription": "Create visually stunning graphics and designs. Join our team of creative minds."
        },
        {
            "id": 11,
            "jobTitle": "Software Development Manager",
            "companyLogo": "https://example.com/company11_logo.png",
            "companyName": "Code Masters",
            "jobPosition": "Senior",
            "jobDescription": "Lead a team of talented developers in creating cutting-edge software solutions."
        },
        {
            "id": 12,
            "jobTitle": "Customer Support Representative",
            "companyLogo": "https://example.com/company12_logo.png",
            "companyName": "Support Hub Inc.",
            "jobPosition": "Junior",
            "jobDescription": "Provide excellent customer support and assist customers with inquiries and issues."
        },
        {
            "id": 13,
            "jobTitle": "Quality Assurance Analyst",
            "companyLogo": "https://example.com/company13_logo.png",
            "companyName": "QA Solutions",
            "jobPosition": "Senior",
            "jobDescription": "Ensure the quality of our software products through thorough testing and analysis."
        },
        {
            "id": 14,
            "jobTitle": "Sales and Marketing Coordinator",
            "companyLogo": "https://example.com/company14_logo.png",
            "companyName": "Sales Pro Inc.",
            "jobPosition": "Junior",
            "jobDescription": "Coordinate sales and marketing activities to promote our products and services."
        },
        {
            "id": 15,
            "jobTitle": "IT Security Specialist",
            "companyLogo": "https://example.com/company15_logo.png",
            "companyName": "SecureTech Solutions",
            "jobPosition": "Senior",
            "jobDescription": "Implement and maintain robust IT security measures to protect our organization."
        },
        {
            "id": 16,
            "jobTitle": "Event Planning Intern",
            "companyLogo": "https://example.com/company16_logo.png",
            "companyName": "Eventful Experiences",
            "jobPosition": "Intern",
            "jobDescription": "Exciting internship opportunity to learn about event planning and coordination."
        },
        {
            "id": 17,
            "jobTitle": "Content Writer",
            "companyLogo": "https://example.com/company17_logo.png",
            "companyName": "Content Creators Ltd.",
            "jobPosition": "Junior",
            "jobDescription": "Create engaging and informative content for various platforms. Join our creative content team."
        },
        {
            "id": 18,
            "jobTitle": "Database Administrator",
            "companyLogo": "https://example.com/company18_logo.png",
            "companyName": "Data Management Solutions",
            "jobPosition": "Senior",
            "jobDescription": "Manage and optimize database systems for efficient data storage and retrieval."
        },
        {
            "id": 19,
            "jobTitle": "Business Development Associate",
            "companyLogo": "https://example.com/company19_logo.png",
            "companyName": "Business Innovators Inc.",
            "jobPosition": "Junior",
            "jobDescription": "Assist in business development activities and contribute to the growth of our company."
        },
        {
            "id": 20,
            "jobTitle": "Mobile App Developer",
            "companyLogo": "https://example.com/company20_logo.png",
            "companyName": "App Creations Ltd.",
            "jobPosition": "Senior",
            "jobDescription": "Develop innovative and user-friendly mobile applications. Join our mobile app development team."
        }
    ]

    const { id } = useParams();
    const data = jobArray.find(item => item.id === +id);

    if (!data) {
        return <div>Data not found</div>;
    }

    return (
      <div className="main-dt">
       <div>
       <div className="details-container">
            <h1>{data.jobTitle}</h1>
            <p>{data.companyName}</p>
            <p>{data.jobPosition}</p>
            <p>{data.jobDescription}</p>
            <Link to='/apply'>Apply Now</Link>
        </div>
       </div>
      </div>
    );
};

export default Details;
