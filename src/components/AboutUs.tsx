const AboutUs = () => {
  return (
    <div id="about" className="gap-20 flex flex-col pt-14">
      <div className="flex justify-evenly lg:items-start items-center flex-col gap-10">
        <h2 className="title-font text-3xl sm:text-4xl lg:text-5xl font-bold text-primary">About Us</h2>
        <p className="text-gray-600 sm:max-w-sm max-w-xs lg:text-start text-center">At Besnik Consultancy, we take pride in our values - service, integrity, and excellence.</p>
      </div>

      <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-2 gap-20 justify-center">

        <div className="flex flex-col gap-10 items-center lg:items-start justify-evenly">

          <div className="flex flex-row lg:justify-between justify-center w-full flex-wrap sm:flex-nowrap gap-10">
            <div className="flex justify-center flex-col text-center sm:text-start max-w-60 sm:gap-4 gap-2">
              <span className="sm:text-4xl text-2xl text-primary font-extrabold title-font">1.</span>
              <h4 className="sm:text-2xl text-lg text-primary font-bold title-font">Who We Are</h4>
              <p className="text-sm text-gray-600">You get a 2-week free trial to kick the Smarty tries. We want you to.</p>
            </div>

            <div className="flex justify-center flex-col text-center sm:text-start max-w-60 sm:gap-4 gap-2">
              <span className="sm:text-4xl text-2xl text-primary font-extrabold title-font">2.</span>
              <h4 className="sm:text-2xl text-lg text-primary font-bold title-font">What Do We Do</h4>
              <p className="text-sm text-gray-600">We give you a free course that guides you through the process.</p>
            </div>
          </div>

          <div className="flex flex-row lg:justify-between justify-center w-full flex-wrap sm:flex-nowrap gap-10">
            <div className="flex justify-center flex-col text-center sm:text-start max-w-60 sm:gap-4 gap-2">
              <span className="sm:text-4xl text-2xl text-primary font-extrabold title-font">3.</span>
              <h4 className="sm:text-2xl text-lg text-primary font-bold title-font">How Do We Help</h4>
              <p className="text-sm text-gray-600">Use our multimedia lecturers, videos, and coaching sessions.</p>
            </div>


            <div className="flex justify-center flex-col text-center sm:text-start max-w-60 sm:gap-4 gap-2">
              <span className="sm:text-4xl text-2xl text-primary font-extrabold title-font">4.</span>
              <h4 className="sm:text-2xl text-lg text-primary font-bold title-font">Create success story</h4>
              <p className="text-sm text-gray-600">With access to online learning resources anyone can transform.</p>
            </div>
          </div>

        </div>


        <div className="flex items-center lg:justify-end justify-center">
          <div className="flex flex-row sm:gap-4 gap-1">
            <div className="flex flex-col sm:gap-4 gap-1">
              <img src="./images/img4.png" />
              <img src="./images/img2.png" />

            </div>
            <div className="flex flex-col sm:gap-4 gap-1">
              <img src="./images/img1.png" />
              <img src="./images/img3.png" />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default AboutUs
