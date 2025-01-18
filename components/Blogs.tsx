"use client";
import Image from "next/image";
import BlurredShape from "@/public/images/blurred-shape.svg";
import { blogDetails, contactContent } from "@/database/home";
import Title from "./ui/Title";
import Link from "next/link";
import { useState } from "react";

export default function Blogs() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [userData, setUserData] = useState<any>({
    name: "",
    email: "",
    query: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    const newData = { ...userData };
    newData[name] = value;
    setUserData(newData);
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    const response = await fetch("/api/email", {
      method: "POST",
      body: JSON.stringify(userData),
    });
    const result = await response.json();
    if (result.success) {
      setSuccess(true);
      setUserData({});
    } else {
      setError("Failed to send email");
    }
    setLoading(false);
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
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-r from-transparent via-gray-800/50 py-12 md:py-20">
          <div>
            <Title title={"Blogs"} />
            <div className="lg:grid lg:grid-cols-2 gap-5">
              {blogDetails.map((blog, index) => (
                <div
                  data-aos="fade-up"
                  data-aos-delay={300}
                  className=" border rounded border-indigo-800 p-3 hover:bg-indigo-800 transition-all"
                  key={index}
                >
                  <Link href={blog.link} target="_blank" className="">
                    <div className="text-xl font-semibold font-mono">
                      {blog.title}{" "}
                    </div>
                    <div className="mt-5"> {blog.des} </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
