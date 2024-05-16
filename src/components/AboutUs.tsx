const AboutUs = () => {
  return (
    <div className="py-40 gap-10 flex flex-col justify-evenly items-center">
      <h2 className="text-4xl">About Us</h2>
      <p>At Besnik Consultancy, we take pride in our values - service, integrity, and excellence.</p>

      <div className="grid grid-cols-2 gap-2">
        <div className="grid grid-cols-2 grid-rows-2 gap-x-8">
          <div className="flex justify-center flex-col w-[20vw]">
            <span className="text-4xl">1.</span>
            <h4 className="text-2xl">Who We Are</h4>
            <p className="text-sm text-gray-600">You get a 2-week free trial to kick the Smarty tries. We want you to.</p>
          </div>

          <div className="flex justify-center flex-col w-[20vw]">
            <span className="text-4xl">2.</span>
            <h4 className="text-2xl">What Do We Do</h4>
            <p className="text-sm text-gray-600">We give you a free course that guides you through the process.</p>
          </div>


          <div className="flex justify-center flex-col w-[20vw]">
            <span className="text-4xl">3.</span>
            <h4 className="text-2xl">How Do We Help</h4>
            <p className="text-sm text-gray-600">Use our multimedia lecturers, videos, and coaching sessions.</p>
          </div>


          <div className="flex justify-center flex-col w-[20vw]">
            <span className="text-4xl">4.</span>
            <h4 className="text-2xl">Create success story</h4>
            <p className="text-sm text-gray-600">With access to online learning resources anyone can transform.</p>
          </div>
        </div>


        <div className="flex items-center justify-center">
          <div className="grid grid-cols-2 gap-8">
            <img src="/public/images/img4.png" className="mt-auto" />
            <img src="/public/images/img1.png" />
            <img src="/public/images/img2.png" />
            <img src="/public/images/img3.png" />
          </div>
        </div>

      </div>
    </div>
  )
}

export default AboutUs