/* eslint-disable react/prop-types */
const Jobs = ({ cat }) => {
    const { logo, category_name, availability } = cat;
    return (
        <div>
            <h1>Jobs</h1>
            <div className="card card-compact w-64 mx-auto bg-base-100 shadow-xl">
                <figure><img className="pt-10" src={logo}></img></figure>
                <div className="card-body">
                    <h2 className="text-2xl font-semibold">{category_name}</h2>
                    <p className="text-lg font-semibold">{availability}</p>
                </div>
            </div>
        </div>
    );
};

export default Jobs;