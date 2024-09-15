import React from "react";

const Join = () => {
  return (
    <div className="container space-y-8">
      {/* page title */}
      <h1 className="animate__animated animate__fadeInDown text-4xl text-center font-medium">
        Join us
      </h1>

      {/* form */}
      <form className="animate__animated animate__fadeInLeft grid grid-cols-1 gap-y-5 gap-x-6 sm:grid-cols-2 bg-white/10 backdrop-blur p-20 rounded-2xl">
        {/* first name */}
        <label className="space-y-3.5">
          <span>First name*</span>

          {/* input */}
          <input
            required
            type="text"
            name="first name"
            autoComplete="off"
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
            autoComplete="off"
            placeholder="Youremail@example.com"
          />
        </label>

        {/* address */}
        <label className="space-y-3.5">
          <span>Address*</span>

          {/* input */}
          <input
            required
            type="text"
            name="address"
            autoComplete="off"
            placeholder="USA, Arizona"
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
              placeholder="Tell us more about yourself..."
            />
          </label>

          {/* submit btn */}
          <button className="flex items-center justify-center w-64 bg-primary py-3 rounded-xl text-secondary font-medium transition-colors duration-300 hover:bg-primary/70">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Join;
