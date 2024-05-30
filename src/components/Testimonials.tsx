import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Testimonials = () => {

  const testimonials = [
    {
      text: "This product has completely transformed my daily routine. I can't imagine going back to how things were before!",
      name: "Sarah Thompson",
      title: "Marketing Manager",
      img: "./images/client1.jpg",
    },
    {
      text: "I was impressed by the professionalism and quality. It's been a game-changer for our business.",
      name: "David Lopez",
      title: "Small Business Owner",
      img: "./images/client2.jpg",
    },
    {
      text: "The service was exceptional and exceeded all my expectations. Highly recommended!",
      name: "James Robinson",
      title: "Software Engineer",
      img: "./images/client3.jpg",
    },
    {
      text: "An outstanding product that delivers on its promises. I am thoroughly satisfied.",
      name: "Olivia Mitchell",
      title: "Project Coordinator",
      img: "./images/client4.jpg"
    },
    {
      text: "A fantastic experience from start to finish. The attention to detail was superb.",
      name: "Emily Nguyen",
      title: "Graphic Designer",
      img: "./images/client5.jpg",
    }
  ]

  return (
    <div className="bg-white relative overflow-hidden rounded-md">
      <div className="w-44 h-44 border-[20px] -left-16 -top-16 border-primary rounded-full absolute"></div>
      <div className="w-60 h-60 border-[20px] -left-24 -top-24 border-primary rounded-full absolute"></div>

      <div className="flex justify-center items-center flex-col gap-6 mt-24">
        <div className="flex justify-center items-center flex-col gap-8 md:mt-0 mt-40 pt-6">
          <h1 className="text-center title-font text-3xl sm:text-4xl lg:text-5xl font-bold text-primary">What our happy client say</h1>
          <p className="text-center md:px-20 px-4 text-gray-600">File storage made easy - including powerful features you won't find anywhere else. Whether you're.</p>
        </div>

        <div className="relative">

          <IoIosArrowBack id="testimonial-go-back" className="absolute sm:-left-16 -left-8 top-1/2 bottom-1/2 z-20 text-4xl hover:text-white hover:bg-primary shadow-md bg-white text-primary rounded-full cursor-pointer" />

          <div id="scroll-container" className="relative w-[70vw] overflow-x-auto hide-scroll-bar">

            <div className="flex flex-row py-10 relative w-[350vw]">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="flex md:gap-8 sm:flex-row flex-col gap-2 w-[70vw] border bg-neutral-100 border-gray-400 rounded-lg shadow-lg p-4 justify-center">

                  <div className="flex flex-col justify-center items-center rounded-full">
                    <img src={testimonial.img} alt={testimonial.name} className="w-[500px]"/>
                  </div>

                  <div className="flex flex-col sm:w-80 w-60 justify-between">
                    <h3 className="text-xl text-primary font-bold mb-8">furni.shop</h3>
                    <p className="text-gray-600 mb-8 italic">"{testimonial.text}"</p>
                    <div className="flex flex-col">
                    <h4 className="text-xl font-bold">{testimonial.name}</h4>
                    <h6 className="text-xs text-gray-600">{testimonial.title}</h6>
                    </div>
                  </div>

                </div>
              ))}
            </div>

          </div>
          <IoIosArrowForward id="testimonial-go-forward" className="absolute sm:-right-16 -right-8 top-1/2 bottom-1/2 z-20 text-4xl hover:text-white hover:bg-primary shadow-md bg-white text-primary rounded-full cursor-pointer" />

        </div>

      </div>
    </div>
  )
}

export default Testimonials