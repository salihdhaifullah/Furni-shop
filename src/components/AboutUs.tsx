const AboutUs = () => {
  return (
    <div id="about" className="gap-10 mt-20 flex flex-col px-4">
      <div className="flex justify-evenly items-center flex-col gap-10">
        <h2 className="md:text-4xl text-3xl font-bold text-primary">About Us</h2>
        <p className="text-gray-600 text-center">At Besnik Consultancy, we take pride in our values - service, integrity, and excellence.</p>
      </div>

      <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-2 gap-20">
        <div className="grid grid-cols-2 grid-rows-2 sm:gap-x-6 gap-x-2">

          <div className="flex justify-center flex-col sm:w-60 w-40 sm:gap-4 gap-2">
            <span className="sm:text-4xl text-2xl text-primary font-extrabold">1.</span>
            <h4 className="sm:text-2xl text-lg text-primary font-bold">Who We Are</h4>
            <p className="sm:text-sm text-xs text-gray-600">You get a 2-week free trial to kick the Smarty tries. We want you to.</p>
          </div>

          <div className="flex justify-center flex-col sm:w-60 w-40 sm:gap-4 gap-2">
            <span className="sm:text-4xl text-2xl text-primary font-extrabold">2.</span>
            <h4 className="sm:text-2xl text-lg text-primary font-bold">What Do We Do</h4>
            <p className="sm:text-sm text-xs text-gray-600">We give you a free course that guides you through the process.</p>
          </div>


          <div className="flex justify-center flex-col sm:w-60 w-40 sm:gap-4 gap-2">
            <span className="sm:text-4xl text-2xl text-primary font-extrabold">3.</span>
            <h4 className="sm:text-2xl text-lg text-primary font-bold">How Do We Help</h4>
            <p className="sm:text-sm text-xs text-gray-600">Use our multimedia lecturers, videos, and coaching sessions.</p>
          </div>


          <div className="flex justify-center flex-col sm:w-60 w-40 sm:gap-4 gap-2">
            <span className="sm:text-4xl text-2xl text-primary font-extrabold">4.</span>
            <h4 className="sm:text-2xl text-lg text-primary font-bold">Create success story</h4>
            <p className="sm:text-sm text-xs text-gray-600">With access to online learning resources anyone can transform.</p>
          </div>
        </div>


        <div className="flex items-center justify-center">
          <div className="grid grid-cols-2 gap-y-8 gap-x-4">
            <img src="./images/img4.png" className="mt-auto" />
            <img src="./images/img1.png" />
            <img src="./images/img2.png" />
            <img src="./images/img3.png" />
          </div>
        </div>

      </div>
    </div>
  )
}

export default AboutUs