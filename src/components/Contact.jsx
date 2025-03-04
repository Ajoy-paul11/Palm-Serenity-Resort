import React,{ useState } from 'react'
import { useForm } from "react-hook-form";
import { Fieldset } from "@mantine/core";
import { Input } from "@mantine/core";
import { Checkbox } from '@mantine/core';
import { toast } from "react-toastify";
import { IoIosSend } from "react-icons/io";

function Contact() {
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
            reset()
          }
        } catch (error) {
          toast.error(error.message || "Internal Server Error, Please try again!");
          
        } finally {
          setIsSubmitting(false);
        }
      };
  return (
    <section id="contact" className="py-12 bg-[#2C3E50]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          
          {/* Google Map */}
          <div className="rounded-lg overflow-hidden shadow-xl h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3897.263031219887!2d76.7571385!3d12.3653053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf73e4f7298a45%3A0xa1e113868f41f146!2sPALM%20SERENITY%20Premium%20Farm%20Plots%20In%20the%20Heart%20of%20Mysore!5e0!3m2!1sen!2sin!4v1732894548773!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Office Location"
            ></iframe>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-xl p-8">
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
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium "
                    >
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
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium "
                    >
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
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium "
                    >
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
                  <div className=' my-4'>
                    <Checkbox 
                      label="I agree to the terms and conditions"
                      {...register("terms", {
                        required: "You must agree to the terms and conditions",
                      })}
                      className=' cursor-pointer text-[#505050]'
                    />
                    {errors.terms && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.terms.message}
                      </p>
                    )}
                  </div>
                  {/* <div className=" my-4">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium "
                    >
                      Message
                    </label>
                    <Textarea
                      placeholder="Enter your query"
                      autosize
                      variant="filled"
                      minRows={2}
                      id="message"
                      rows="4"
                      {...register("message", {
                        required: "Message is required",
                      })}
                      className="mt-1 block w-full rounded-md text-[#505050] shadow-sm focus:border-color focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.message.message}
                      </p>
                    )}
                  </div> */}
                  <button
                    type="submit"
                    className={`w-full cta-bg-color text-white py-2 px-4 rounded-md hover:cta-bg-color/70 focus:outline-none focus:ring-2  focus:ring-opacity-50 transition duration-150 ease-in-out 
                      ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
                  >
                    {isSubmitting ? "Sending..." : "Submit"}
                  </button>
                </Fieldset>
              </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact