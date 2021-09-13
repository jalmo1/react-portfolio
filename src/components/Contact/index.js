import React, { useState } from "react";

import { validateEmail } from "../../utils/helpers";

function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log("Submit Form", formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log("Handle Form", formState);
    }
  };

  return (
    <section class="bg-gray-800 sm:bg-gray-800">
      <h1
        data-testid="h1tag"
        className="text-6xl text-center py-8 text-indigo-500"
      >
        Contact me
      </h1>
      <form id="contact-form" class="text-center pb-8" onSubmit={handleSubmit}>
        <div class="mx-3 mb-6">
          <div class="pb-4">
            <label
              htmlFor="name"
              className="text-2xl text-center pb-8 text-indigo-500"
            >
              Name:
            </label>
            <input
              type="text"
              name="name"
              class="appearance-none block w-full bg-gray-200 text-center text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              defaultValue={name}
              onBlur={handleChange}
            />
          </div>
        </div>
        <div class="mx-3 mb-6">
          <div class="pb-8">
            <label
              htmlFor="email"
              class="text-2xl text-center pb-8 text-indigo-500"
            >
              Email address:
            </label>
            <input
              type="email"
              name="email"
              class="appearance-none block w-full bg-gray-200 text-center text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              defaultValue={email}
              onBlur={handleChange}
            />
          </div>
        </div>
        <div class="mx-3 mb-6">
          <div>
            <label
              htmlFor="message"
              class="text-2xl text-center pb-8 text-indigo-500"
            >
              Message:
            </label>
            <textarea
              name="message"
              rows="5"
              class="appearance-none block w-full bg-gray-200 text-center text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              defaultValue={message}
              onBlur={handleChange}
            />
          </div>
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button data-testid="button" type="submit">
          Submit
        </button>
      </form>
    </section>
  );
}

export default ContactForm;
