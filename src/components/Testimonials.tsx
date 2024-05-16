import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2"

const Testimonials = () => {

  const testimonials = [
    {
      img: "/images/client1.png",
      text: "File storage made easy - including powerful features you won't find anywhere else. Whether you're.",
      name: "Larry Diamond",
      title: "Chief Executive Officer",
    }
  ]

  return (
    <div className="flex justify-center items-center py-20">
      <div className="bg-neutral-100 relative overflow-hidden rounded-md w-[80vw] p-4">

        <div className="w-44 h-44 border-[20px] -left-16 -top-16 border-primary rounded-full absolute"></div>
        <div className="w-60 h-60 border-[20px] -left-24 -top-24 border-primary rounded-full absolute"></div>

        <div className="flex justify-center items-center flex-col gap-6 py-10 mt-10">

          <h1 className="text-4xl text-center">What our happy client say</h1>
          <p className="text-center">File storage made easy - including powerful features you won't find anywhere else. Whether you're.</p>


          <div className="flex flex-row py-10">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="grid grid-cols-2 justify-center items-center">

                <div className="flex flex-col justify-center items-center">
                  <img src={testimonial.img} alt={testimonial.name} />
                </div>

                <div className="gap-8 flex flex-col">
                  <h3 className="text-xl text-primary">furni.shop</h3>
                  <p>{testimonial.text}</p>
                  <h4 className="text-xl">{testimonial.name}</h4>
                  <h6 className="text-base text-gray-600">{testimonial.title}</h6>


                  <div className="flex flex-row gap-2 mt-auto">
                    <div className="text-xl p-2 rounded-full bg-white text-gray-900 border border-gray-600 text-center">
                      <HiArrowLongLeft />
                    </div>
                    <div className="text-xl p-2 rounded-full bg-white text-gray-900 border border-gray-600 text-center">
                      <HiArrowLongRight />
                    </div>
                  </div>
                </div>

              </div>
            ))}


          </div>

        </div>
      </div>
    </div>
  )
}

export default Testimonials