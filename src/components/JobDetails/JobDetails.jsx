import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id)
    const job = jobs.find(job => job.id == idInt)

    const handleApplyJob = () =>{
        toast('You have applied successfully !')
    }
    return (
        <div>
            <div className="grid gap-4 md:grid-cols-3">
                <div className="border md:col-span-2 px-7 py-5 text-justify rounded">
                    <p><span className="text-l font-bold">Job Description :</span> {job.job_description}</p>
                    <p className="mt-5"><span className="text-l font-bold">Job Responsibility :</span> {job.job_responsibility}</p>
                    <h6 className="text-l font-bold mt-5">Educational Requirements :</h6>
                    <p>{job.educational_requirements}</p>
                    <h6 className="text-l font-bold mt-5">Experience :</h6>
                    <p>{job.experiences}</p>
                </div>
                <div className="border px-7 py-5 bg-green-100 rounded">
                    <h6 className="mb-2 text-l font-bold">Job Details</h6>
                    <hr />
                    <div className="mt-2 mb-2">
                        <p><i className="fa-solid fa-dollar-sign"></i> <span className="text-l text-black font-bold">Salary : </span> {job.salary} (Per Month)</p>
                        <p><i className="fa-solid fa-user"></i> <span className="text-l text-black font-bold">Job Title : </span> {job.job_title}</p>
                        <h6 className="mt-5 mb-5 text-l font-bold">Contact Information</h6>
                    </div>
                    <hr />
                    <div className="mt-2 mb-2">
                        <p><i className="fa-solid fa-phone"></i> <span className="text-l text-black font-bold">Phone : </span> {job.contact_information.phone}</p>
                        <p><i className="fa-solid fa-envelope"></i> <span className="text-l text-black font-bold">Email : </span> {job.contact_information.email}</p>
                        <p><i className="fa-solid fa-location-dot"></i> <span className="text-l text-black font-bold">Address : </span> {job.contact_information.address}</p>
                    </div>
                    <button onClick={handleApplyJob} className="btn btn-primary w-full mt-5">Apply Now</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;