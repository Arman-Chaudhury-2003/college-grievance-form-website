import React from "react";

export default function About() {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/f/fe/Srmseal.png"
              alt="image"
            />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              COLLEGE GRIEVANCE FORM
            </h2>
            <p className="mt-6 text-gray-600">
              The College Grievance Form website is a streamlined platform
              designed to help students and faculty easily submit their concerns
              and complaints. It ensures transparency, efficiency, and quick
              resolution by allowing users to report issues online. The system
              categorizes grievances, tracks their status, and facilitates
              communication between students and the administration for a
              smoother resolution process.
            </p>
            <p className="mt-4 text-gray-600"></p>
          </div>
        </div>
      </div>
    </div>
  );
}
