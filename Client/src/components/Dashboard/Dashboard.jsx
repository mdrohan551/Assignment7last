import React from "react";
import { Link } from "react-router-dom";
import DashboardStore from '../../store/DashboardStore';
import GetDataStore from "../../store/GetDataStore";
import CreateBlogs from "./CreateBLogs/CreateBlogs.jsx";

const Dashboard = () => {
    const { contacts ,isLogin ,userLogOutRequest} = DashboardStore();
    const { BlogData, ServiceDetails, TeamDetails } = GetDataStore();
    return (
        <div className="d-flex flex-column flex-md-row bg-white text-black">

            {/* Content Area */}
            <div className="container-fluid px-5">
                <div className="row">
                    <div className="col-12">
                        <div className="top_heas d-flex justify-content-between">
                            <h1 className="mb-4">Dashboard Overview</h1>
                            <button className="btn btn-danger px-5 py-2 mb-5 mt-3" onClick={userLogOutRequest}>Logout
                            </button>


                        </div>

                        {/* Stats Cards */}
                        <div className="row">
                            <div className="col-12 col-md-4">
                                <div className="card text-white bg-primary mb-3">
                                    <div className="card-body">
                                        <h5 className="card-title">Total Blogs</h5>
                                        <p className="card-text fs-3">{(BlogData?.data || []).length} Blogs</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-4">
                                <div className="card text-white bg-success mb-3">
                                    <div className="card-body">
                                        <h5 className="card-title">Total Services</h5>
                                        <p className="card-text fs-3">{(ServiceDetails?.data || []).length} Services</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-4">
                                <div className="card text-white bg-dark mb-3">
                                    <div className="card-body">
                                        <h5 className="card-title">Total Contacts</h5>
                                        <p className="card-text fs-3">{(contacts || []).length} Messages</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-4">
                                <div className="card text-white bg-danger mb-3">
                                    <div className="card-body">
                                        <h5 className="card-title">Total Team</h5>
                                        <p className="card-text fs-3">{(TeamDetails?.data || []).length} persons</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* Blog Table */}

                        <div className="col-4">
                            <h2 className="mt-4 text-center bg-danger text-white text-uppercase p-2">Blog</h2>
                            <CreateBlogs/>
                        </div>


                        {/* Manage Services, Blogs, and Contacts */}
                        <h2 className="mt-4">Manage Services</h2>
                        {/* Contact Table */}
                        <h2 className="mt-4">Manage Contacts</h2>


                        <table className="table table-bordered mt-3 table-responsive">
                            <thead className="table-dark">
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Message</th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {contacts.map((item, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    {/* ID হিসেবে index ব্যবহার করা হয়েছে */}
                                    <td>{item.name}</td>
                                    {/* এখানে item.name থেকে নাম নেয়া হচ্ছে */}
                                    <td>{item.message}</td>
                                    {/* এখানে item.message থেকে বার্তা নেয়া হচ্ছে */}
                                    <td>{item.email}</td>
                                    {/* এখানে item.email থেকে ইমেইল নেয়া হচ্ছে */}
                                    <td>
                                        <button className="btn btn-danger btn-sm">❌ Delete</button>
                                    </td>
                                </tr>
                            ))}

                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
