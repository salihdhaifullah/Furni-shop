import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Testimonials = () => {

  const testimonials = [
    {
      text: "This product has completely transformed my daily routine. I can't imagine going back to how things were before! It's easy to use and has made my life so much easier. The benefits are incredible and it fits perfectly into my busy schedule.",
      name: "Sarah Thompson",
      title: "Marketing Manager",
      img: "./images/client1.jpg",
    },
    {
      text: "I was impressed by the professionalism and quality. It's been a game-changer for our business. The efficiency and reliability are top-notch. It has improved our workflow significantly, making our operations smoother.",
      name: "David Lopez",
      title: "Small Business Owner",
      img: "./images/client2.jpg",
    },
    {
      text: "The service was exceptional and exceeded all my expectations. Highly recommended! The attention to detail and customer support were outstanding. I'm very satisfied with the overall experience.",
      name: "James Robinson",
      title: "Software Engineer",
      img: "./images/client3.jpg",
    },
    {
      text: "An outstanding product that delivers on its promises. I am thoroughly satisfied. The quality and performance are exceptional. It's a reliable addition to my daily tasks and meets all my needs.",
      name: "Olivia Mitchell",
      title: "Project Coordinator",
      img: "./images/client4.jpg"
    },
    {
      text: "A fantastic experience from start to finish. The attention to detail was superb. The process was seamless and the results exceeded my expectations. I would highly recommend it to others.",
      name: "Emily Nguyen",
      title: "Graphic Designer",
      img: "./images/client5.jpg",
    }
  ]


  return (
    <div className="bg-white rounded-md">

      <div className="flex justify-center items-center flex-col gap-6 mt-24">
        <div className="flex justify-center items-center flex-col md:mt-0 mt-40 pt-6">
          <h1 className="text-center title-font text-3xl sm:text-4xl lg:text-5xl font-bold text-primary">What our happy client say</h1>
        </div>

        <div className="relative">
          {/* 36*36 */}
          <div id="testimonial-go-back" className="absolute sm:-left-16 -left-0 top-[20%] bottom-[20%] sm:top-1/2 sm:bottom-1/2 z-20 hover:bg-primary shadow-md bg-white rounded-full cursor-pointer w-9 h-9 text-2xl hover:text-white text-primary flex items-center justify-center">
            <IoIosArrowBack />
          </div>

          <div id="scroll-container" className="relative xl:w-[932px] md:w-[624px] w-[316px] overflow-x-auto px-2 hide-scroll-bar">
            <div id="total-container" className="flex flex-row py-10 relative w-[1548px] gap-2">
              {testimonials.map((testimonial, index) => (
                <div key={index} id={`testimonial-${index}`} className="flex gap-4 flex-col w-[300px] bg-white rounded-md shadow-lg p-4 justify-center items-center">
                  <img src={testimonial.img} alt={testimonial.name} className="rounded-full shadow-md w-32 h-32 object-cover" />

                  <div className="flex flex-col justify-center gap-4">
                    <div className="flex flex-col justify-center items-center">
                      <h4 className="sm:text-xl text-lg text-primary">{testimonial.name}</h4>
                      <h6 className="sm:text-base text-sm text-gray-600">{testimonial.title}</h6>
                    </div>

                    <p className="text-gray-600 mb-8 italic text-center">"{testimonial.text}"</p>

                  </div>

                </div>
              ))}
            </div>

          </div>

          <div id="testimonial-go-forward" className="absolute sm:-right-16 -right-0 top-[20%] bottom-[20%] sm:top-1/2 sm:bottom-1/2 z-20 hover:bg-primary shadow-md bg-white rounded-full cursor-pointer w-9 h-9 text-2xl hover:text-white text-primary flex items-center justify-center">
            <IoIosArrowForward />
          </div>

        </div>

      </div>
    </div>
  )
}

export default Testimonials;