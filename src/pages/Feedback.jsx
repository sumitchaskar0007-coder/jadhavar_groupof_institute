import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

export default function Feedback() {
    const [formData, setFormData] = useState({
        email: "",
        classYear: "",
        enrollment: "",
        type: "",
        subject: "",
        paperTitle: "",
        q1: "",
        q2: "",
        q3: "",
        q4: "",
        q5: "",
        q6: "",
        q7: "",
        q8: "",
        q9: "",
        comments: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you! Your feedback has been submitted successfully.");
        setFormData({
            email: "",
            classYear: "",
            enrollment: "",
            type: "",
            subject: "",
            paperTitle: "",
            q1: "",
            q2: "",
            q3: "",
            q4: "",
            q5: "",
            q6: "",
            q7: "",
            q8: "",
            q9: "",
            comments: "",
        });
    };

    const ratingOptions = [
        "Excellent",
        "Very Good",
        "Good",
        "Average",
        "Poor",
    ];

    return (
        <>
            {/* SEO */}
            <Helmet>
                <title>Student Feedback | Institute Feedback System</title>
                <meta
                    name="description"
                    content="Student feedback form for teacher evaluation and course improvement."
                />
            </Helmet>

            <section className="min-h-screen bg-gray-50 py-16">
                <div className="max-w-4xl mx-auto px-6">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-10"
                    >
                        <h1 className="text-3xl font-bold text-gray-900">
                            Send Us Your Feedback
                        </h1>
                        <p className="text-gray-600 mt-2">
                            Your feedback helps us improve teaching and learning quality.
                        </p>
                    </motion.div>

                    <motion.form
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="bg-white p-8 rounded-2xl shadow border space-y-6"
                    >
                        {/* BASIC DETAILS */}
                        <Input label="Email" name="email" type="email" value={formData.email} onChange={handleChange} />
                        <Input label="Class and Year / Semester" name="classYear" value={formData.classYear} onChange={handleChange} />
                        <Input label="Enrollment Number" name="enrollment" value={formData.enrollment} onChange={handleChange} />

                        <Select
                            label="Type"
                            name="type"
                            value={formData.type}
                            onChange={handleChange}
                            options={["Student", "Alumni"]}
                        />

                        <Input label="Subject" name="subject" value={formData.subject} onChange={handleChange} />
                        <Input label="Paper Title" name="paperTitle" value={formData.paperTitle} onChange={handleChange} />

                        {/* QUESTIONS */}
                        <Rating label="Does the teacher have mastery over the course content?" name="q1" value={formData.q1} onChange={handleChange} options={ratingOptions} />
                        <Rating label="How well prepared was the teacher for each class?" name="q2" value={formData.q2} onChange={handleChange} options={ratingOptions} />
                        <Rating label="Was the teacher enthusiastic about the course?" name="q3" value={formData.q3} onChange={handleChange} options={ratingOptions} />
                        <Rating label="Was the teacher competent in communicating concepts?" name="q4" value={formData.q4} onChange={handleChange} options={ratingOptions} />
                        <Rating label="Was the teacher aware of recent research trends?" name="q5" value={formData.q5} onChange={handleChange} options={ratingOptions} />
                        <Rating label="Did the teacher use innovative and interactive methods?" name="q6" value={formData.q6} onChange={handleChange} options={ratingOptions} />
                        <Rating label="Did the course enhance your interest and knowledge?" name="q7" value={formData.q7} onChange={handleChange} options={ratingOptions} />
                        <Rating label="Was the teacher helpful regarding student progress?" name="q8" value={formData.q8} onChange={handleChange} options={ratingOptions} />
                        <Rating label="Overall quality of instruction received?" name="q9" value={formData.q9} onChange={handleChange} options={ratingOptions} />

                        {/* COMMENTS */}
                        <div>
                            <label className="block text-sm font-semibold mb-1">
                                Any other comments
                            </label>
                            <textarea
                                name="comments"
                                value={formData.comments}
                                onChange={handleChange}
                                rows="4"
                                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
                                placeholder="Write your feedback here..."
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                        >
                            Submit Feedback
                        </button>
                    </motion.form>
                </div>
            </section>
        </>
    );
}

/* ---------- REUSABLE COMPONENTS ---------- */

function Input({ label, ...props }) {
    return (
        <div>
            <label className="block text-sm font-semibold mb-1">{label}</label>
            <input
                {...props}
                required
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
            />
        </div>
    );
}

function Select({ label, options, ...props }) {
    return (
        <div>
            <label className="block text-sm font-semibold mb-1">{label}</label>
            <select
                {...props}
                required
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
            >
                <option value="">Select</option>
                {options.map((o) => (
                    <option key={o} value={o}>{o}</option>
                ))}
            </select>
        </div>
    );
}

function Rating({ label, options, ...props }) {
    return (
        <div>
            <label className="block text-sm font-semibold mb-1">{label}</label>
            <select
                {...props}
                required
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
            >
                <option value="">Select rating</option>
                {options.map((o) => (
                    <option key={o} value={o}>{o}</option>
                ))}
            </select>
        </div>
    );
}
