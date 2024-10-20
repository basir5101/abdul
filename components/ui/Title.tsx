import React from "react";

export default function Title({ title = "" }) {
  return (
    <div className="mx-auto pb-12 md:pb-20">
      <div className="text-center">
        <div
          data-aos="fade-left"
          data-aos-delay={400}
          className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-200/50"
        >
          <span className="inline-flex text-6xl font-bold bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
            {title}
          </span>
        </div>
      </div>
    </div>
  );
}
