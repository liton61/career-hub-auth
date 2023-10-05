/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Job = ({ job }) => {
    const { id, logo, job_title, company_name, remote_or_onsite, job_type, location, salary } = job;
    return (
        <div className="card card-compact bg-base-100 shadow-xl p-5">
            <figure><img src={logo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-3xl text-[#474747]">{job_title}</h2>
                <h5 className="text-2xl text-[#757575]">{company_name}</h5>
                <div className="flex">
                    <button className="px-5 py-2 font-bold text-[#7E90FE] border rounded border-[#7E90FE]">{remote_or_onsite}</button>
                    <button className="ml-5 px-5 py-2 font-bold text-[#7E90FE] border rounded border-[#7E90FE]">{job_type}</button>
                </div>
                <div className="flex">
                    <h5 className="text-xl text-[#757575]"><i className="fa-solid fa-location-dot"></i> {location}</h5>
                    <h5 className="text-xl text-[#757575] ml-5"><i className="fa-solid fa-dollar-sign"></i> Salary : {salary}</h5>
                </div>
                <div className="card-actions">
                    <Link to={`/jobDetails/${id}`}>
                        <button className="btn btn-primary">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Job;