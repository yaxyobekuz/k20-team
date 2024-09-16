import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// axios
import axios from "axios";

const Join = () => {
  // states
  const chatId = -1002354124576;
  const navigate = useNavigate();
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
  const [isLoading, setIsLoading] = useState(false);

  // send request
  const sendRequest = (e) => {
    e.preventDefault();

    // add loader
    setIsLoading(true);

    // helpers
    const url = `${apiBaseUrl}sendMessage`;
    const getInputValue = (input) => e.target.querySelector(input)?.value.trim();

    // message
    const message = `👤 First name: ${getInputValue(".first-name")}\n👥 Last name: ${getInputValue(".last-name")}\n✉️ Email: ${getInputValue(".email")}\n⏳ Experience: ${getInputValue(".experience")}\nℹ️ Description:\n${getInputValue(".description")}`;

    // form data
    const formData = {
      chat_id: chatId,
      text: message,
    };

    // send a request
    axios
      .post(url, formData)
      .then(() => navigate("/success"))
      .catch(() => alert("Something went wrong!"))
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="container space-y-8 !p-0 sm:!p-5">
      {/* page title */}
      <h1 className="animate__animated animate__fadeInDown text-center">
        Join us
      </h1>

      {/* form */}
      <form onSubmit={sendRequest} className="animate__animated animate__fadeInLeft grid grid-cols-1 gap-y-5 gap-x-6 bg-white/10 backdrop-blur p-5 py-10 rounded-xl sm:grid-cols-2 sm:rounded-2xl md:p-12 lg:p-20">
        {/* first name */}
        <label className="space-y-3.5">
          <span>First name*</span>

          {/* input */}
          <input
            required
            type="text"
            name="first name"
            autoComplete="off"
            disabled={isLoading}
            className="first-name"
            placeholder="First name"
          />
        </label>

        {/* last name */}
        <label className="space-y-3.5">
          <span>Last name*</span>

          {/* input */}
          <input
            required
            type="text"
            name="last name"
            autoComplete="off"
            disabled={isLoading}
            className="last-name"
            placeholder="Last name"
          />
        </label>

        {/* email */}
        <label className="space-y-3.5">
          <span>Email*</span>

          {/* input */}
          <input
            required
            type="email"
            name="email"
            className="email"
            autoComplete="off"
            disabled={isLoading}
            placeholder="Youremail@example.com"
          />
        </label>

        {/* experience */}
        <label className="space-y-3.5">
          <span>Experience*</span>

          {/* input */}
          <input
            required
            type="text"
            name="experience"
            autoComplete="off"
            disabled={isLoading}
            className="experience"
            placeholder="Senior, junior..."
          />
        </label>

        <div className="space-y-5 sm:col-span-2">
          {/* description */}
          <label className="space-y-3.5">
            <span>Description*</span>

            {/* input */}
            <textarea
              required
              name="description"
              disabled={isLoading}
              className="description"
              placeholder="Tell us more about yourself..."
            />
          </label>

          {/* submit btn */}
          <button disabled={isLoading} className="flex items-center justify-center w-full h-[46px] bg-primary rounded-lg text-secondary font-medium transition-colors duration-300 hover:bg-primary/70 disabled:bg-primary/70 sm:w-64">
            {!isLoading ? "Submit" : "Loading..."}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Join;
