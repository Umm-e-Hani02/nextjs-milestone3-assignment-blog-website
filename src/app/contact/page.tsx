import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faXTwitter,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default function Contact() {
  return (
    <section className="my-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-800">
          Get in Touch
        </h1>
        <p className="text-center text-gray-600">
          Have questions or feedback or just want to connect? We would love to
          hear from you.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 justify-center mt-6">
          <div>
            <form action="">
              <Input
                placeholder="Your Name"
                className="focus:ring-2 focus:ring-blue-400 rounded-md bg-gray-50"
                required
              />
              <Input
                placeholder="Your Email"
                className="focus:ring-2 focus:ring-blue-400 rounded-md mt-5 bg-gray-50"
                required
              />
              <textarea
                rows={4}
                placeholder="Your Message"
                className="w-full p-3 border shadow-sm rounded-md focus:outline-none focus:ring focus:ring-blue-400 mt-5 bg-gray-50"
              ></textarea>
              <Button className="bg-blue-800 rounded-md hover:bg-blue-700 mt-5 h-12 w-36">
                Send Message
              </Button>
            </form>
          </div>
          <div className="mt-6 md:mt-0">
            <div className="text-lg">
              <p className="text-gray-700">
                <strong>Email:</strong> contact@webwonders.com
              </p>
              <p className="text-gray-700">
                <strong>Phone:</strong> +123 456 7890
              </p>
              <div className="flex space-x-4 items-center">
                <h5 className="text-blue-800 font-bold text-lg">Follow us:</h5>
                <Link href="">
                  <FontAwesomeIcon icon={faInstagram} className="h-6 hover:scale-125 duration-150 text-pink-600" />
                </Link>
                <Link href="">
                  <FontAwesomeIcon icon={faXTwitter} className="h-6 hover:scale-125 duration-150 text-black" />
                </Link>
                <Link href="">
                  <FontAwesomeIcon icon={faFacebookF} className="h-6 hover:scale-125 duration-150 text-blue-600" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    // <section className="bg-[#f2f2f2] py-10">
    //   <div className="max-w-6xl mx-auto px-4">
    //     <h2 className="text-3xl font-bold text-center text-[#172080]">
    //       Get in Touch
    //     </h2>
    //     <p className="text-center text-gray-600 mt-2">
    //       Have questions, feedback, or just want to connect? We’d love to hear
    //       from you.
    //     </p>

    //     <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
    //       {/* Contact Form */}
    //       <form className="space-y-4">
    //         <input
    //           type="text"
    //           placeholder="Your Name"
    //           className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
    //         />
    //         <input
    //           type="email"
    //           placeholder="Your Email"
    //           className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
    //         />
    //         <input
    //           type="text"
    //           placeholder="Subject"
    //           className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
    //         />
    //         <textarea
    //           rows="4"
    //           placeholder="Your Message"
    //           className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
    //         ></textarea>
    //         <button
    //           type="submit"
    //           className="w-full bg-[#172080] text-white py-3 rounded-md hover:bg-blue-700 transition"
    //         >
    //           Send Message
    //         </button>
    //       </form>

    //       {/* Contact Info and Social Media */}
    //       <div className="space-y-4">
    //         <p className="text-gray-700">
    //           <strong>Email:</strong> contact@usesoftheinternet.com
    //         </p>
    //         <p className="text-gray-700">
    //           <strong>Phone:</strong> +123 456 7890
    //         </p>
    //         <div className="flex space-x-4">
    //           <a href="#" className="text-blue-500 hover:text-blue-700">
    //             <FontAwesomeIcon icon={faInstagram} className="h-6" />
    //           </a>
    //           <a href="#" className="text-blue-500 hover:text-blue-700">
    //             <FontAwesomeIcon icon={faXTwitter} className="h-6" />
    //           </a>
    //           <a href="#" className="text-blue-500 hover:text-blue-700">
    //             <FontAwesomeIcon icon={faFacebookF} className="h-5" />
    //           </a>
    //           <a href="#" className="text-blue-500 hover:text-blue-700">
    //             <FontAwesomeIcon icon={faYoutube} className="h-6" />
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
}
