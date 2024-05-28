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
    <div className="bg-neutral-100 relative overflow-hidden rounded-md">

      <div className="w-44 h-44 border-[20px] -left-16 -top-16 border-primary rounded-full absolute"></div>
      <div className="w-60 h-60 border-[20px] -left-24 -top-24 border-primary rounded-full absolute"></div>

      <div className="flex justify-center items-center flex-col gap-6">

        <div className="flex justify-center items-center flex-col gap-8 md:pl-36 md:mt-0 mt-40 pt-6">
          <h1 className="md:text-5xl text-3xl text-center font-bold text-primary ">What our happy client say</h1>
          <p className="text-center md:px-20 px-4 text-gray-600">File storage made easy - including powerful features you won't find anywhere else. Whether you're.</p>
        </div>



        <div className="relative">

        
        <IoIosArrowBack id="testimonial-go-back" className="absolute -left-16 top-1/2 bottom-1/2 z-20 text-6xl hover:bg-white text-primary rounded-full cursor-pointer" />

        <div id="scroll-container" className="relative w-[70vw] overflow-x-auto hide-scroll-bar">

          <div className="flex flex-row py-10 relative w-[350vw] gap-1">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="grid sm:grid-cols-2 grid-cols-1 md:gap-8 gap-2 w-[70vw]">

                <div className="flex flex-col justify-center items-center">
                  <img src={testimonial.img} alt={testimonial.name} />
                </div>

                <div className="flex flex-col mt-8">
                  <h3 className="text-xl text-primary font-bold mb-8">furni.shop</h3>
                  <p className="text-gray-600 mb-8">{testimonial.text}</p>
                  <h4 className="text-xl font-bold">{testimonial.name}</h4>
                  <h6 className="text-xs text-gray-600">{testimonial.title}</h6>
                </div>

              </div>
            ))}
          </div>

        </div>
        <IoIosArrowForward id="testimonial-go-forward" className="absolute -right-16 top-1/2 bottom-1/2 z-20 text-6xl hover:bg-white text-primary rounded-full cursor-pointer" />

        </div>

      </div>
    </div>
  )
}

export default Testimonials