import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

export default function StudentGrievanceForm() {
    const [formData, setFormData] = useState({
        name: "",
        regNo: "",
        email: "",
        mobile: "",
        gender: "",
        department: "MCA",
        year: "",
        grievance: "",
        respondent: "",
        grievanceType: "",
        captcha: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Your grievance has been submitted successfully.");
        setFormData({
            name: "",
            regNo: "",
            email: "",
            mobile: "",
            gender: "",
            department: "MCA",
            year: "",
            grievance: "",
            respondent: "",
            grievanceType: "",
            captcha: "",
        });
    };

    return (
        <>
            {/* SEO */}
            <Helmet>
                <title>Student Grievance Form | Grievance Redressal Cell</title>
                <meta
                    name="description"
                    content="Student Grievance Form for academic, non-academic, and discrimination-related complaints."
                />
            </Helmet>

            <section className="min-h-screen bg-gray-50 py-14">
                <div className="max-w-4xl mx-auto px-6">
                    {/* HEADER */}
                    <div className="text-center mb-10">
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">
                            Students Grievance Form
                        </h1>
                        <p className="text-gray-600 text-sm">
                            Use this form to submit academic or non-academic grievances.
                        </p>
                    </div>

                    {/* FORM */}
                    <form
                        onSubmit={handleSubmit}
                        className="bg-white p-8 rounded-xl shadow border space-y-6"
                    >
                        {/* STUDENT DETAILS */}
                        <h2 className="text-lg font-semibold text-blue-700">
                            Student Personal Details
                        </h2>

                        <div className="grid md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="Name of the Student"
                                className="input"
                            />

                            <input
                                type="text"
                                name="regNo"
                                value={formData.regNo}
                                onChange={handleChange}
                                required
                                placeholder="Registration No."
                                className="input"
                            />

                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="Email Address"
                                className="input"
                            />

                            <input
                                type="tel"
                                name="mobile"
                                value={formData.mobile}
                                onChange={handleChange}
                                required
                                placeholder="Mobile No."
                                className="input"
                            />
                        </div>

                        {/* GENDER */}
                        <div>
                            <label className="block font-medium mb-2">Gender</label>
                            <div className="flex gap-6">
                                {["Male", "Female", "Transgender"].map((g) => (
                                    <label key={g} className="flex items-center gap-2">
                                        <input
                                            type="radio"
                                            name="gender"
                                            value={g}
                                            checked={formData.gender === g}
                                            onChange={handleChange}
                                            required
                                        />
                                        {g}
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* DEPARTMENT & YEAR */}
                        <div className="grid md:grid-cols-2 gap-4">
                            <select
                                name="department"
                                value={formData.department}
                                onChange={handleChange}
                                className="input"
                            >
                                <option>MCA</option>
                            </select>

                            <select
                                name="year"
                                value={formData.year}
                                onChange={handleChange}
                                required
                                className="input"
                            >
                                <option value="">Select Year</option>
                                <option>First Year</option>
                                <option>Second Year</option>
                            </select>
                        </div>

                        {/* GRIEVANCE */}
                        <div>
                            <label className="block font-medium mb-1">Grievance Column</label>
                            <textarea
                                name="grievance"
                                value={formData.grievance}
                                onChange={handleChange}
                                required
                                rows="4"
                                className="input"
                                placeholder="State your grievance in detail"
                            />
                        </div>

                        {/* RESPONDENT */}
                        <input
                            type="text"
                            name="respondent"
                            value={formData.respondent}
                            onChange={handleChange}
                            required
                            placeholder="Respondent (Name & Department)"
                            className="input"
                        />

                        {/* TYPE OF GRIEVANCE */}
                        <div>
                            <label className="block font-medium mb-2">
                                Please indicate the type of grievance
                            </label>
                            <div className="flex gap-6">
                                {["Academic", "Non-Academic", "Discrimination"].map((type) => (
                                    <label key={type} className="flex items-center gap-2">
                                        <input
                                            type="radio"
                                            name="grievanceType"
                                            value={type}
                                            checked={formData.grievanceType === type}
                                            onChange={handleChange}
                                            required
                                        />
                                        {type}
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* CAPTCHA (BASIC) */}
                        <input
                            type="text"
                            name="captcha"
                            value={formData.captcha}
                            onChange={handleChange}
                            required
                            placeholder="Type the characters"
                            className="input"
                        />

                        {/* SUBMIT */}
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </section>

            {/* Tailwind input utility */}
            <style>
                {`
          .input {
            width: 100%;
            padding: 10px 12px;
            border: 1px solid #d1d5db;
            border-radius: 8px;
            outline: none;
          }
          .input:focus {
            border-color: #2563eb;
            box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.2);
          }
        `}
            </style>
        </>
    );
}
