export default function Home() {
  return (
    <main className="mt-12">
      <section className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 
      lg:flex lg:items-center">
        <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
          <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
            <span className="font-semibold">free repository</span> 
            for community <br className="hidden lg:block" /> components using 
          </h1>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
            Open source Tailwind UI components and templates to <br className="hidden lg:block" /> bootstrap your new apps, projects, or landing sites!
          </p>
         </div>
        <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
          <img src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg" alt="tailwind css components" className="w-full h-full max-w-md mx-auto" />
        </div>
      </section>

      {/* Pricing Plans Section */}
      <section className="py-12 bg-gray-100 dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">Pricing Plans</h2>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">Choose the plan that suits you best</p>
          </div>
          <div className="flex flex-wrap justify-center">
            {/* Basic Plan */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800
               transform transition duration-500 hover:scale-105 text-center">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Basic</h3>
                <p className="mt-4 text-gray-500 dark:text-gray-300">$10/month</p>
                <ul className="mt-6 mb-6 space-y-4">
                  <li className="text-gray-600 dark:text-gray-400"><s>10GB Storage</s></li>
                  <li className="text-gray-600 dark:text-gray-400"><s>Basic Support</s></li>
                  <li className="text-gray-600 dark:text-gray-400"><s>Single User</s></li>
                  <li className="text-gray-600 dark:text-gray-400">Community Access</li>
                  <li className="text-gray-600 dark:text-gray-400">Weekly Updates</li>
                </ul>
                <button className="mx-1" >Choose Plan</button>
              </div>
            </div>

            {/* Standard Plan */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center border-2 border-purple-500">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Standard</h3>
                <p className="mt-4 text-gray-500 dark:text-gray-300">$20/month</p>
                <span className="inline-block px-3 py-1 text-sm font-semibold text-white bg-purple-500 rounded-full">Bestseller</span>
                <ul className="mt-6 mb-6 space-y-4">
                  <li className="text-gray-600 dark:text-gray-400">50GB Storage</li>
                  <li className="text-gray-600 dark:text-gray-400">Priority Support</li>
                  <li className="text-gray-600 dark:text-gray-400">Up to 5 Users</li>
                  <li className="text-gray-600 dark:text-gray-400">Community Access</li>
                  <li className="text-gray-600 dark:text-gray-400">Daily Updates</li>
                </ul>
                <button className="mx-1" >Choose Plan</button>
              </div>
            </div>

            {/* Premium Plan */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Premium</h3>
                <p className="mt-4 text-gray-500 dark:text-gray-300">$30/month</p>
                <ul className="mt-6 mb-6 space-y-4">
                  <li className="text-gray-600 dark:text-gray-400">200GB Storage</li>
                  <li className="text-gray-600 dark:text-gray-400">24/7 Support</li>
                  <li className="text-gray-600 dark:text-gray-400">Unlimited Users</li>
                  <li className="text-gray-600 dark:text-gray-400">Community Access</li>
                  <li className="text-gray-600 dark:text-gray-400">Real-time Updates</li>
                </ul>
                <button className="mx-1" >Choose Plan</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">What Our Clients Say</h2>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">Hear from our satisfied customers</p>
          </div>
          <div className="flex flex-wrap justify-center">
            {/* Testimonial 1 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800
               transform transition duration-500 hover:scale-105 text-center">
                <p className="text-gray-600 dark:text-gray-400">"This service has been a game-changer for our business. Highly recommend!"</p>
                <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">John Doe</h3>
                <p className="text-gray-500 dark:text-gray-300">CEO, Company A</p>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
                <p className="text-gray-600 dark:text-gray-400">"Amazing experience! The team was professional and the results were outstanding."</p>
                <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">Jane Smith</h3>
                <p className="text-gray-500 dark:text-gray-300">Marketing Director, Company B</p>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
                <p className="text-gray-600 dark:text-gray-400">"They exceeded our expectations in every way. Will definitely work with them again."</p>
                <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">Emily Brown</h3>
                <p className="text-gray-500 dark:text-gray-300">COO, Company C</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Blogs Section */}
      <section className="py-12 bg-gray-100 dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">Top Blogs</h2>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">Read our latest articles on UI/UX, web development, and design trends.</p>
          </div>
          <div className="flex flex-wrap justify-center">
            {/* Blog Post 1 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
                <img src="https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Blog Post 1" className="mb-4 w-full h-48 object-cover" />
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">How to Build Scalable Web Apps</h3>
                <p className="mt-4 text-gray-600 dark:text-gray-400">Learn the best practices for creating scalable and maintainable web applications using modern technologies.</p>
              </div>
            </div>

            {/* Blog Post 2 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
                <img src="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Blog Post 2" className="mb-4 w-full h-48 object-cover" />
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">10 UI/UX Design Tips</h3>
                <p className="mt-4 text-gray-600 dark:text-gray-400">Discover essential tips for creating user-friendly and visually appealing designs for your web projects.</p>
              </div>
            </div>

            {/* Blog Post 3 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
                <img src="https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Blog Post 3" className="mb-4 w-full h-48 object-cover" />
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Tailwind CSS: A Complete Guide</h3>
                <p className="mt-4 text-gray-600 dark:text-gray-400">Explore everything you need to know about using Tailwind CSS to build responsive and modern web designs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
