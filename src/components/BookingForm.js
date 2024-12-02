import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";

const BookingForm = () => {
  
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      persons: "",
      date: "",
      time: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "Name must be at least 3 characters")
        .matches(/^[a-zA-Z\s]+$/, "Name can only contain letters")
        .required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      phone: Yup.string()
        .matches(/^\d{10}$/, "Phone number must be 10 digits only")
        .required("Phone number is required"),
      persons: Yup.number()
        .min(1, "At least 1 person is required")
        .required("Number of persons is required"),
      date: Yup.date().required("Date is required"),
      time: Yup.string().required("Time is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      emailjs
        .send(
          "your_service_id", // Replace with your EmailJS service ID
          "your_template_id", // Replace with your EmailJS template ID
          values,
          "your_user_id" // Replace with your EmailJS user ID
        )
        .then(
          () => {
            alert("Booking request sent successfully!");
            resetForm();
          },
          (error) => {
            console.error("Failed to send email:", error.text);
          }
        );
    },
  });

  return (
    <div className="bg-black text-white py-16 px-4">
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl font-bold">BOOK YOUR SEATS</h2>
        <p className="mt-2 text-gray-400">
          Plan your perfect night out with us.
        </p>
      </div>

      {/* Checklist Section */}
      <div className="mt-6 max-w-3xl mx-auto bg-gray-900 text-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-orange-500 mb-4">
          Book Your Seats Below - Check Points
        </h3>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>Drinkers are not allowed</li>
          <li>Without shoes not allowed</li>
          <li>Children below 18 years not allowed</li>
        </ul>
      </div>

      <form
  onSubmit={formik.handleSubmit}
  className="mt-8 max-w-3xl mx-auto bg-gray-900 text-white p-8 rounded-lg shadow-lg"
>
 {/* Name */}
 <div className="mb-6">
          <label htmlFor="name" className="block text-sm text-gray-300 mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`p-4 border rounded-md w-full bg-gray-800 text-white focus:ring-2 focus:ring-orange-500 ${
              formik.errors.name && formik.touched.name
                ? "border-red-500"
                : "border-gray-700"
            }`}
            placeholder="Enter your full name"
          />
          {formik.touched.name && formik.errors.name && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div className="mb-6">
          <label htmlFor="email" className="block text-sm text-gray-300 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`p-4 border rounded-md w-full bg-gray-800 text-white focus:ring-2 focus:ring-orange-500 ${
              formik.errors.email && formik.touched.email
                ? "border-red-500"
                : "border-gray-700"
            }`}
            placeholder="Enter your email address"
          />
          {formik.touched.email && formik.errors.email && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
          )}
        </div>

        {/* Phone Number */}
        <div className="mb-6">
          <label htmlFor="phone" className="block text-sm text-gray-300 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`p-4 border rounded-md w-full bg-gray-800 text-white focus:ring-2 focus:ring-orange-500 ${
              formik.errors.phone && formik.touched.phone
                ? "border-red-500"
                : "border-gray-700"
            }`}
            placeholder="Enter your phone number"
          />
          {formik.touched.phone && formik.errors.phone && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.phone}</p>
          )}
        </div>

  {/* Number of Persons */}
  <div className="mb-6">
    <label htmlFor="persons" className="block text-sm text-gray-300 mb-2">
      Number of Persons
    </label>
    <input
      type="number"
      id="persons"
      name="persons"
      value={formik.values.persons}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      className={`p-4 border rounded-md w-full bg-gray-800 text-white focus:ring-2 focus:ring-orange-500 ${
        formik.errors.persons && formik.touched.persons
          ? "border-red-500"
          : "border-gray-700"
      }`}
      placeholder="Enter number of persons"
    />
    {formik.touched.persons && formik.errors.persons && (
      <p className="text-red-500 text-sm mt-1">{formik.errors.persons}</p>
    )}
  </div>

  {/* Date and Time Fields */}
  <div className="grid grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-6">
    {/* Date Field */}
    <div>
      <label htmlFor="date" className="block text-sm text-gray-300 mb-2">
        Date
      </label>
      <input
        type="date"
        id="date"
        name="date"
        value={formik.values.date}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className={`p-4 border rounded-md w-full bg-gray-800 text-white appearance-none focus:ring-2 focus:ring-orange-500 ${
          formik.errors.date && formik.touched.date
            ? "border-red-500"
            : "border-gray-700"
        }`}
      />
      {formik.touched.date && formik.errors.date && (
        <p className="text-red-500 text-sm mt-1">{formik.errors.date}</p>
      )}
    </div>

    {/* Time Field */}
    <div>
      <label htmlFor="time" className="block text-sm text-gray-300 mb-2">
        Time
      </label>
      <input
        type="time"
        id="time"
        name="time"
        value={formik.values.time}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className={`p-4 border rounded-md w-full bg-gray-800 text-white appearance-none focus:ring-2 focus:ring-orange-500 ${
          formik.errors.time && formik.touched.time
            ? "border-red-500"
            : "border-gray-700"
        }`}
      />
      {formik.touched.time && formik.errors.time && (
        <p className="text-red-500 text-sm mt-1">{formik.errors.time}</p>
      )}
    </div>
  </div>

  {/* Submit Button */}
  <div className="mt-6 flex justify-center">
    <button
      type="submit"
      className="py-3 px-8 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-md transition duration-300 shadow-md w-full sm:w-auto"
    >
      Book Now
    </button>
  </div>
      </form>
  </div>
  );
};

export default BookingForm;
