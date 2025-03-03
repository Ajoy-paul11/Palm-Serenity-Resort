import React, {useState} from "react";
import { useForm } from "react-hook-form";
import { Fieldset } from "@mantine/core";
import { Input } from "@mantine/core";
import { toast } from "react-toastify";

function LeadForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data) => {
    try {
      setIsSubmitting(true);
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        // Push the form submission event to dataLayer
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: "form_submission",
          formId: "admission_form",
        });

        toast.success("Message sent Successfully");

        reset();
      } else {
        toast.error(result.message || "Failed to send message");
        reset();
      }
    } catch (error) {
      toast.error(error.message || "Internal Server Error, Please try again!");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <>
      {/* Contact Form */}
      <div className="bg-white rounded-lg shadow-xl p-8 ">
        <h4 className="text-2xl font-semibold mb-6">Send Us a Message</h4>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 bg-white">
          <input
            type="hidden"
            value={import.meta.env.VITE_FORM_API_KEY}
            {...register("access_key")}
          />
          <input type="hidden" {...register("subject")} />
          <input
            type="hidden"
            value="Palm Serenity Resort Plot"
            {...register("from_name")}
          />
          <Fieldset
            legend="Personal Information"
            variant="filled"
            className="bg-color"
          >
            <div className=" my-4">
              <label htmlFor="name" className="block text-sm font-medium ">
                Name
              </label>
              <Input
                variant="filled"
                placeholder="Enter your name"
                type="text"
                id="name"
                {...register("name", { required: "Name is required" })}
                className="mt-1 block w-full rounded-md text-[#505050] shadow-sm focus:border-color focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div className=" my-4">
              <label htmlFor="email" className="block text-sm font-medium ">
                Email
              </label>
              <Input
                variant="filled"
                placeholder="Enter your email"
                type="email"
                id="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                className="mt-1 block w-full rounded-md text-[#505050] shadow-sm focus:border-color focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className=" my-4">
              <label htmlFor="phone" className="block text-sm font-medium ">
                Phone Number
              </label>
              <Input
                variant="filled"
                placeholder="Enter your mobile number"
                type="tel"
                id="phone"
                {...register("phone", {
                  required: "Phone number is required",
                })}
                className="mt-1 block w-full rounded-md text-[#505050] shadow-sm focus:border-color focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.phone.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              className={`w-full cta-bg-color text-white py-2 px-4 rounded-md hover:cta-bg-color/70 focus:outline-none focus:ring-2  focus:ring-opacity-50 transition duration-150 ease-in-out 
                          ${
                            isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                          }`}
            >
              {isSubmitting ? "Sending..." : "Submit"}
            </button>
          </Fieldset>
        </form>
      </div>
    </>
  );
}

export default LeadForm;
