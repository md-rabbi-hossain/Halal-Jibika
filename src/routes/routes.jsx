import { createBrowserRouter } from "react-router-dom";
import Notfound from "../Pages/Notfound/Notfound";
import About from "../Pages/About/About";
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";
import Sighup from "../Auth/Sighup/Sighup";
import Login from "../Auth/Login/Login";
import App from "../App";
import Job from "../Pages/Job/Job";
import ApplicationForm from '../components/Apply/Apply'
import JobDetails from "../components/Jobdetails/Jobdetails";
import Details from "../components/Details/Detailss";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            },

            {
                path: 'about',
                element: <About />
            },
            {
                path: 'contact',
                element: <Contact />
            },
            {
                path: 'job',
                element: <Job />
            },
            {
                path: 'signup',
                element: <Sighup />
            },
            {
                path: 'login',
                element: <Login />
            },

            {
                path: 'apply',
                element: <ApplicationForm />
            },

            {
                path: "/jobs/:id",
                element: <JobDetails />
            },

            {
                path: "/jobss/:id",
                element: <Details/>
            },
        ]
    },

    {
        path: '*',
        element: <Notfound />
    }

])



export default routes