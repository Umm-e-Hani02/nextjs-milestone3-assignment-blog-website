import Image from "next/image";
export default function HomePage() {
  return (
    <section>
      <div className="md:w-[80%] mx-auto my-10 text-lg px-3">
        <div>
          <h2 className="font-bold text-2xl">Welcome to Our Blog</h2>
          <p className="mt-3">
            Dive into a world of endless possibilities where knowledge
            inspiration and growth come together. Whether you are here to
            explore learn or simply be inspired you have found the right place.
          </p>

          <p className="my-3">
            From insightful articles on studies health haircare skincare
            technology and more we bring you the best of the internet curated
            just for you. Our goal is to empower and enrich your life with
            meaningful content that makes a difference.
          </p>

          <p className="mb-5">
            Stay updated on the latest trends discover practical tips and
            explore diverse topics that cater to your interests and passions.
            This is more than just a blog—its a community where ideas flourish
            and dreams take shape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 mx-auto gap-x-6 gap-y-6">
            <Image 
            src="/assets/homeimg1.jpg"
            alt=""
            width={150}
            height={30}
            className="cursor-pointer mx-auto h-[400px] md:h-[300px] lg:h-[450px] w-72 object-cover rounded-lg shadow-gray-300 shadow-md hover:shadow-gray-400 hover:shadow-lg hover:scale-105 duration-300"/>
            <Image 
            src="/assets/homeimg2.jpg"
            alt=""
            width={150}
            height={30}
            className="cursor-pointer mx-auto h-[400px] md:h-[300px] lg:h-[450px] w-72 object-cover rounded-lg shadow-gray-300 shadow-md hover:shadow-gray-400 hover:shadow-lg hover:scale-105 duration-300"/>
            <Image 
            src="/assets/homeimg3.jpg"
            alt=""
            width={150}
            height={30}
            className="cursor-pointer mx-auto h-[400px] md:h-[300px] lg:h-[450px] w-72 object-cover rounded-lg shadow-gray-300 shadow-md hover:shadow-gray-400 hover:shadow-lg hover:scale-105 duration-300"/>
        </div>

        <div>
          <h2 className="font-bold text-2xl mt-5">Your Journey Begins Here</h2>
          <p className="my-3">
            Explore our categories find what resonates with you and let us guide
            you toward a brighter and more informed tomorrow. Together we can
            unlock the potential of the internet and make every day a new
            opportunity to learn and grow.
          </p>

          <h2 className="font-bold text-2xl">Stay With Us</h2>
          <p className="mt-3">
            This is just the beginning. New and exciting content awaits you as
            we continue to expand and explore. Your journey to knowledge and
            inspiration starts here. <b>More to come soon!</b>
          </p>
        </div>
      </div>
    </section>
  );
}
