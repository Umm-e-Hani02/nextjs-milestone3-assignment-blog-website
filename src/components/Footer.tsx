import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faXTwitter,
  faFacebookF,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
export default function Footer() {
  return (
    <footer className="max-w-[1440px] mx-auto bg-blue-950 text-gray-400 px-5 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 px-2 md:px-10 gap-x-12">

        <div>
          <h2 className="text-white text-2xl pb-5 pt-5">About Our Blog</h2>
          <p>
            Discover how the internet shapes the modern world, from its impact
            on education, communication, and business to its endless
            possibilities for entertainment and creativity. Our blog dives into
            the fascinating ways the internet empowers individuals and
            transforms society.
          </p>
        </div>

        <div>
          <h2 className="text-white text-2xl pb-5 pt-5">
            Subscribe to updates
          </h2>
          <p>
            Stay ahead with the latest insights on how the internet influences
            daily life. Subscribe to our newsletter for regular updates,
            thought-provoking articles, and practical tips on leveraging the
            power of the web.
          </p>
          <div className="flex lg:w-96 mt-10 mb-12">
            <Input
              placeholder="Your Email"
              className="bg-blue-900 border-blue-900"
            />
            <Button>Send</Button>
          </div>
        </div>

        <div className="flex text-white items-center gap-x-7 justify-center md:justify-start mb-6 md:mb-0">
          <FontAwesomeIcon
            className="h-6 md:h-8 hover:scale-125 hover:duration-200 cursor-pointer hover:text-pink-500"
            icon={faInstagram}
          />
          <FontAwesomeIcon
            className="h-6 md:h-8 hover:scale-125 hover:duration-200 cursor-pointer hover:text-black"
            icon={faXTwitter}
          />
          <FontAwesomeIcon
            className="h-5 md:h-7 hover:scale-125 hover:duration-200 cursor-pointer hover:text-blue-600"
            icon={faFacebookF}
          />
          <FontAwesomeIcon
            className="h-6 md:h-8 hover:scale-125 hover:duration-200 cursor-pointer hover:text-red-600"
            icon={faYoutube}
          />
        </div>

        <div>
          <p className="md:text-lg">Copyright ©2024 All rights reserved</p>
        </div>
        
      </div>
    </footer>
  );
}
