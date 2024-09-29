'use client';

import { useState } from "react";

import Button from "@/components/core/Button";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    text: "",
    email: ""
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    text: ""
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
    setErrors({
      ...errors,
      [e.target.name]: ""
    });
  };

  const validateForm = () => {
    let valid = true;
    let newErrors = { name: "", email: "", text: "" };

    if (!form.name) {
      newErrors.name = "Please enter your name.";
      valid = false;
    }

    if (!form.email) {
      newErrors.email = "Please enter your email.";
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email address.";
      valid = false;
    }

    if (!form.text) {
      newErrors.text = "Please enter your message.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (success) {
      return;
    }
    if (!validateForm()) {
      return;
    }

    try {
      const response = await fetch('/api/sendEmails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setSuccess(true);
        setForm({
          name: "",
          email: "",
          text: ""
        });
      } else {
        console.error('Failed to send email:', response);
      }
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <div className="container w-full max-w-[98%] md:max-w-[92%] px-6 md:px-12 mx-auto mt-52">
      <p className="flex justify-center lg:justify-start w-full text-5xl md:text-8xl text-white">
        <span className='font-display bg-accent-primary rounded-full px-12'>CONTACT</span>
      </p>

      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-6 mt-12 md:mt-24">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="w-full">
              <input type="text" name="name" placeholder="Your Name" value={form.name} autoComplete="name" onChange={handleChange} className="w-full p-8 text-white bg-black-tertiary outline-none rounded-lg focus:bg-opacity-40 transition-all duration-150 ease-in-out-def" />
              {errors.name && <p className="text-[#ffa4aa]">{errors.name}</p>}
            </div>
            <div className="w-full">
              <input type="text" name="email" placeholder="Your Email" value={form.email} autoComplete="email" onChange={handleChange} className="w-full p-8 text-white bg-black-tertiary outline-none rounded-lg focus:bg-opacity-40 transition-all duration-150 ease-in-out-def" />
              {errors.email && <p className="text-[#ffa4aa]">{errors.email}</p>}
            </div>
          </div>
          <div className="w-full">
            <textarea name="text" placeholder="Hello, I would like to..." value={form.text} autoComplete="off" onChange={handleChange} className="w-full p-8 text-white bg-black-tertiary outline-none rounded-lg focus:bg-opacity-40 transition-all duration-150 ease-in-out-def" />
            {errors.text && <p className="text-[#ffa4aa]">{errors.text}</p>}
          </div>
          <Button
            type="submit"
            classname="py-6"
            disabled={success}
            text={
              success ? (
                <p className="flex justify-center items-center gap-2 w-full">
                  Submitted <span className="material-symbols-outlined">check</span>
                </p>
              ) : (
                "Submit"
              )
            }
          />
        </div>
      </form>
    </div>
  );
};

export default Contact;
