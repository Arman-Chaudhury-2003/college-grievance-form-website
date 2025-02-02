import React from 'react'

export default function About() {
  return (
      <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                      <img
                          src="https://jpinfotech.org/wp-content/uploads/2020/11/jplogo.png"
                          alt="image"
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                      Medimatch             
                     </h2>
                      <p className="mt-6 text-gray-600">

                      MediMatch is an AI-powered drug recommendation app that provides personalized medication suggestions based on your health profile. It helps you find the most effective and safe medications tailored to your specific needs, making healthcare decisions easier and smarter.

                      </p>
                      <p className="mt-4 text-gray-600">
                      An AI-driven app that recommends personalized medications, ensuring smarter and safer healthcare decisions.
                      </p>
                  </div>
              </div>
          </div>
      </div>
  );
}