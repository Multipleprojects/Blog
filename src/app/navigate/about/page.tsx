import React from 'react';

const About = () => {
  return (
    <div className=" mt-20 text-gray-800 min-h-screen">
      {/* Main Content */}
      <div className="container mx-auto px-6 py-12 lg:px-16">

        {/* Our Mission */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 text-center">Our Mission</h2>
          <p className="text-lg text-gray-600 leading-relaxed text-center max-w-4xl mx-auto">
            We are dedicated to providing exceptional travel experiences by crafting personalized journeys 
            that cater to your needs. Whether you seek adventure, relaxation, or cultural immersion, 
            we aim to make every trip memorable.
          </p>
        </section>

        {/* Meet Our Team */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 text-center">Meet Our Team</h2>
          <p className="text-lg text-gray-600 leading-relaxed text-center max-w-4xl mx-auto mb-12">
            Our team consists of passionate professionals who bring years of experience in the travel industry. 
            We work hard to ensure every aspect of your journey is flawless.
          </p>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src="https://images.pexels.com/photos/6963098/pexels-photo-6963098.jpeg?auto=compress&cs=tinysrgb&w=600" alt="John Doe" className="w-full h-48 object-cover" />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold">John Doe</h3>
                <p className="text-sm text-gray-500 mb-2">Founder & CEO</p>
                <p className="text-gray-600">John is a visionary leader who founded the company with a passion for creating unforgettable travel experiences.</p>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src="https://images.pexels.com/photos/5882683/pexels-photo-5882683.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Jane Smith" className="w-full h-48 object-cover" />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold">Jane Smith</h3>
                <p className="text-sm text-gray-500 mb-2">Operations Manager</p>
                <p className="text-gray-600">Jane ensures smooth operations and makes sure all your travel needs are met with precision.</p>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src="https://images.pexels.com/photos/5198239/pexels-photo-5198239.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Michael Lee" className="w-full h-48 object-cover" />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold">Michael Lee</h3>
                <p className="text-sm text-gray-500 mb-2">Lead Developer</p>
                <p className="text-gray-600">Michael leads our tech team, ensuring that our digital platforms are smooth and secure for all users.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Vision */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 text-center">Our Vision</h2>
          <p className="text-lg text-gray-600 leading-relaxed text-center max-w-4xl mx-auto">
            Our vision is to be the go-to travel partner for adventurers worldwide, offering unique and personalized experiences that connect people to the beauty and culture of new places.
          </p>
        </section>

       
      </div>
    </div>
  );
};

export default About;
