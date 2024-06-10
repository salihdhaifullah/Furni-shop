import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa"

const Footer = () => {
  return (
    <div id="contact" className="bg-primary px-8 sm:px-12 md:px-20 lg:px-28 py-14 mt-12">
      <div className="grid md:grid-cols-2 grid-cols-1 justify-between gap-4">
        <div className="flex items-center justify-start">
          <h1 className="text-white text-3xl">Start your business today for $0+ state fees.</h1>
        </div>

        <div className="flex sm:flex-nowrap flex-wrap items-center justify-end gap-2">
          <button className="rounded-3xl bg-white px-4 py-2 text-primary">Get Started</button>
          <button className="rounded-3xl bg-[rgba(255,255,255,0.1)] px-4 py-2 text-white">Contact Sales</button>
        </div>
      </div>

      <span className="my-10 w-full h-px bg-[rgba(255,255,255,0.2)] flex"></span>

      <div className="grid sm:grid-cols-2 grid-cols-1 justify-between text-white">
        <div className="gap-4 flex flex-col">
          <h3 className="text-2xl title-font font-bold">Furni.shop</h3>
          <p className="text-sm max-w-xs">Optix seamlessly connects your members with the community, resources.</p>
          <div className="flex flex-row gap-4 text-xl lg:py-8 py-4">
            <div className="hover:text-primary p-1 hover:p-2 h-fit w-fit shadow-md rounded-full hover:bg-white transition-all cursor-pointer text-center">
              <FaFacebookF />
            </div>

            <div className="hover:text-primary p-1 hover:p-2 h-fit w-fit shadow-md rounded-full hover:bg-white transition-all cursor-pointer text-center">
              <FaTwitter />
            </div>

            <div className="hover:text-primary p-1 hover:p-2 h-fit w-fit shadow-md rounded-full hover:bg-white transition-all cursor-pointer text-center">
              <FaLinkedinIn />
            </div>
            <div className="hover:text-primary p-1 hover:p-2 h-fit w-fit shadow-md rounded-full hover:bg-white transition-all cursor-pointer text-center">
              <FaInstagram />
            </div>
          </div>
        </div>

        <div className="flex flex-row gap-8 sm:justify-center justify-end">
          <div className="flex flex-col gap-2">
            <h4 className="text-xl">Entity types</h4>
            <p className="text-sm hover:text-blue-500 hover:underline">Security</p>
            <p className="text-sm hover:text-blue-500 hover:underline cursor-pointer">Privacy Policy</p>
            <p className="text-sm hover:text-blue-500 hover:underline cursor-pointer">Partners</p>
            <p className="text-sm hover:text-blue-500 hover:underline cursor-pointer">About us</p>
            <p className="text-sm hover:text-blue-500 hover:underline cursor-pointer">FAQs</p>
          </div>

          <div className="flex flex-col gap-2">
            <h4 className="text-xl">Services</h4>
            <p className="text-sm hover:text-blue-500 hover:underline cursor-pointer">Contact Us</p>
            <p className="text-sm hover:text-blue-500 hover:underline cursor-pointer">Press</p>
            <p className="text-sm hover:text-blue-500 hover:underline cursor-pointer">Blog</p>
            <p className="text-sm hover:text-blue-500 hover:underline cursor-pointer">Help Center</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Footer
