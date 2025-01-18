"use client";
import Image from "next/image";
import BlurredShape from "@/public/images/blurred-shape.svg";
import { contactContent } from "@/database/home";
import Title from "./ui/Title";
import Link from "next/link";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [userData, setUserData] = useState<any>({
    name: "",
    email: "",
    message: "",
  });
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    const newData = { ...userData };
    newData[name] = value;
    setUserData(newData);
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    if (!formRef.current) {
      setError("Please fill up the form");
      return;
    }
    console.log(process.env.SERVICE_ID, userData);
    await emailjs
      .sendForm(
        process.env.SERVICE_ID || "",
        process.env.TEMPLATE_ID || "",
        formRef.current,
        {
          publicKey: process.env.PUBLIC_ID,
        }
      )
      .then(
        () => {
          setSuccess(true);
          setUserData({});
          console.log("SUCCESS!");
          setLoading(false);
        },
        (error) => {
          setError("Failed to send email");
          setLoading(false);
          console.log("ERROR!", error);
        }
      );
  };
  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-24 ml-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShape}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div className="max-w6xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-r from-transparent via-gray-800/50 py-12 md:py-20">
          <div className="mx-auto max-w-3xl">
            <Title title={contactContent.heading} />
            <div
              className="text-xl mb-8"
              data-aos="fade-up"
              data-aos-delay={400}
            >
              {contactContent.description}{" "}
            </div>
            <form ref={formRef} className="mx-auto max-w-[500px]">
              <div className="space-y-5">
                <div>
                  <label
                    className="mb-1 block text-sm font-medium text-indigo-200/65"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    name="name"
                    onChange={handleChange}
                    type="text"
                    className="form-input w-full"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    className="mb-1 block text-sm font-medium text-indigo-200/65"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    name="email"
                    onChange={handleChange}
                    type="email"
                    className="form-input w-full"
                    placeholder="Your email"
                  />
                </div>
                <div>
                  <label
                    className="mb-1 block text-sm font-medium text-indigo-200/65"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    rows={5}
                    name="message"
                    onChange={handleChange}
                    className="form-input w-full"
                    placeholder="Your query"
                  ></textarea>
                </div>
              </div>
              <div className="mt-6 space-y-5">
                <button
                  onClick={handleSubmit}
                  disabled={loading || success}
                  className="btn w-full bg-gradient-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%]"
                >
                  {success
                    ? "Thank you for your query"
                    : loading
                    ? "Sending Message.."
                    : "Send Message"}
                </button>
              </div>
              <div className="text-red-400 font-semibold mt-3"> {error} </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
