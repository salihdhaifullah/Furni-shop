import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa"

const Footer = () => {
  return (
    <div id="contact" className="bg-primary sm:px-20 px-10 py-14">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
        <div className="flex items-center justify-center">
          <h1 className="text-white text-3xl">Start your business today for $0+ state fees.</h1>
        </div>

        <div className="flex sm:flex-nowrap flex-wrap items-center justify-center gap-2">
          <button className="rounded-3xl bg-white px-4 py-2 text-primary">Get Started</button>
          <button className="rounded-3xl bg-[rgba(255,255,255,0.1)] px-4 py-2 text-white">Contact Sales</button>
        </div>
      </div>

      <span className="my-10 w-full h-px bg-[rgba(255,255,255,0.2)] flex"></span>


      <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-2 gap-16 text-white">
        <div className="gap-4 flex flex-col">
          <h3 className="text-2xl">furni.shop</h3>
          <p className="text-sm">Optix seamlessly connects your members with the community, resources.</p>
          <div className="flex flex-row gap-2 text-lg mt-8">
            <FaFacebookF />
            <FaTwitter />
            <FaLinkedinIn />
            <FaInstagram />
          </div>
        </div>

        <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 sm:gap-2 gap-8">
        <div className="flex flex-col gap-2">
          <h4 className="text-xl">Entity types</h4>
          <p className="text-sm">Security</p>
          <p className="text-sm">Privacy Policy</p>
          <p className="text-sm">Partners</p>
          <p className="text-sm">About us</p>
          <p className="text-sm">FAQs</p>
        </div>

        <div className="flex flex-col gap-2">
          <h4 className="text-xl">Services</h4>
          <p className="text-sm">Contact Us</p>
          <p className="text-sm">Press</p>
          <p className="text-sm">Blog</p>
          <p className="text-sm">Help Center</p>
        </div>

        <div className="flex flex-col gap-2">
          <h4 className="text-xl">Resources</h4>
          <p className="text-sm">Pricing</p>
          <p className="text-sm">Terms</p>
        </div>

        <div className="flex flex-col gap-2">
        <h4 className="text-xl">Support</h4>
          <p className="text-sm">Affiliates</p>
          <p className="text-sm">Sitemap</p>
          <p className="text-sm">Cancelation Policy</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Footer