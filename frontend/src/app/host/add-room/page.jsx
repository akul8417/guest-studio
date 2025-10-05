"use client";
import React from "react";
import axios from "axios";
import { useFormik } from "formik";
import { Toaster, toast } from "react-hot-toast";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// // and render <ToastContainer />

export default function AddRoom() {
  const formik = useFormik({
    initialValues: {
      roomName: "",
      roomType: "",
      priceperNight: "",
      name: "",
      address: "",
      city: "",
      description: "",
      rooms: "",
      image: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.name) errors.name = "Hotel name is required";
      if (!values.address) errors.address = "Address is required";
      if (!values.city) errors.city = "City is required";
      if (!values.description) errors.description = "Description is required";
      if (values.rooms === "" || Number(values.rooms) <= 0)
        errors.rooms = "Enter a valid number of rooms";
      if (!values.image) errors.image = "Image URL is required";
      if (!values.roomName) errors.roomName = "Room name is required";
      if (!values.roomType) errors.roomType = "Room type is required";
      if (values.priceperNight === "" || Number(values.priceperNight) <= 0)
        errors.priceperNight = "Enter a valid price";
      return errors;
    },
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      try {
        // Update this URL to your actual endpoint
        await axios.post("http://localhost:5000/room/add", {
          ...values,
          priceperNight: Number(values.priceperNight),
          rooms: Number(values.rooms),
        });
        toast.success("Room added successfully!");
        resetForm();
      } catch (err) {
        toast.error("Failed to add room. Please try again.");
        console.error(err);
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 flex flex-col items-center justify-center p-4">
      <Toaster position="top-right" />
      <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-2xl">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-extrabold text-gray-800">
            Add a Room
          </h2>
          <p className="text-gray-500 mt-2">
            Fill in the details to list your property on Elite Haven
          </p>
        </div>

        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          onSubmit={formik.handleSubmit}
        >
          {/* Hotel Details Section */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold text-gray-700 border-b pb-2 mb-4">
              Hotel Information
            </h3>
          </div>

          <div className="md:col-span-2">
            <label
              className="block text-sm font-medium text-gray-600 mb-1"
              htmlFor="name"
            >
              Hotel Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              placeholder="e.g., The Grand Budapest Hotel"
            />
            {formik.touched.name && formik.errors.name && (
              <p className="text-sm text-red-600 mt-1">{formik.errors.name}</p>
            )}
          </div>

          <div>
            <label
              className="block text-sm font-medium text-gray-600 mb-1"
              htmlFor="address"
            >
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formik.values.address}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              placeholder="123 Main Street"
            />
            {formik.touched.address && formik.errors.address && (
              <p className="text-sm text-red-600 mt-1">
                {formik.errors.address}
              </p>
            )}
          </div>

          <div>
            <label
              className="block text-sm font-medium text-gray-600 mb-1"
              htmlFor="city"
            >
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formik.values.city}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              placeholder="Zubrowka"
            />
            {formik.touched.city && formik.errors.city && (
              <p className="text-sm text-red-600 mt-1">{formik.errors.city}</p>
            )}
          </div>

          <div className="md:col-span-2">
            <label
              className="block text-sm font-medium text-gray-600 mb-1"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              placeholder="A brief description of the hotel..."
              rows="4"
            ></textarea>
            {formik.touched.description && formik.errors.description && (
              <p className="text-sm text-red-600 mt-1">
                {formik.errors.description}
              </p>
            )}
          </div>

          <div className="md:col-span-2">
            <label
              className="block text-sm font-medium text-gray-600 mb-1"
              htmlFor="image"
            >
              Image URL
            </label>
            <input
              type="text"
              id="image"
              name="image"
              value={formik.values.image}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              placeholder="https://example.com/hotel.jpg"
            />
            {formik.touched.image && formik.errors.image && (
              <p className="text-sm text-red-600 mt-1">
                {formik.errors.image}
              </p>
            )}
          </div>

          {/* Room Details Section */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold text-gray-700 border-b pb-2 mb-4 mt-4">
              Room Details
            </h3>
          </div>

          <div>
            <label
              className="block text-sm font-medium text-gray-600 mb-1"
              htmlFor="roomName"
            >
              Room Name
            </label>
            <input
              type="text"
              id="roomName"
              name="roomName"
              value={formik.values.roomName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              placeholder="e.g., Deluxe Suite"
            />
            {formik.touched.roomName && formik.errors.roomName && (
              <p className="text-sm text-red-600 mt-1">
                {formik.errors.roomName}
              </p>
            )}
          </div>

          <div>
            <label
              className="block text-sm font-medium text-gray-600 mb-1"
              htmlFor="roomType"
            >
              Room Type
            </label>
            <select
              id="roomType"
              name="roomType"
              value={formik.values.roomType}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            >
              <option value="">Select type</option>
              <option value="single">Single</option>
              <option value="double">Double</option>
              <option value="suite">Suite</option>
              <option value="AC">AC</option>
              <option value="Non-AC">Non-AC</option>
            </select>
            {formik.touched.roomType && formik.errors.roomType && (
              <p className="text-sm text-red-600 mt-1">
                {formik.errors.roomType}
              </p>
            )}
          </div>

          <div>
            <label
              className="block text-sm font-medium text-gray-600 mb-1"
              htmlFor="price"
            >
              Price per Night
            </label>
            <input
              type="number"
              id="priceperNight"
              name="priceperNight"
              value={formik.values.priceperNight}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              placeholder="Enter price"
              min="1500"
              step="500"
            />
            {formik.touched.price && formik.errors.price && (
              <p className="text-sm text-red-600 mt-1">
                {formik.errors.price}
              </p>
            )}
          </div>

          <div>
            <label
              className="block text-sm font-medium text-gray-600 mb-1"
              htmlFor="rooms"
            >
              Number of Rooms
            </label>
            <input
              type="number"
              id="rooms"
              name="rooms"
              value={formik.values.rooms}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              placeholder="Enter number of rooms"
              min="0"
              step="1"
            />
            {formik.touched.rooms && formik.errors.rooms && (
              <p className="text-sm text-red-600 mt-1">
                {formik.errors.rooms}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={formik.isSubmitting}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition disabled:opacity-60"
          >
            {formik.isSubmitting ? "Adding..." : "Add Room"}
          </button>
        </form>
      </div>
    </div>
  );
}