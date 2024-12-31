import Image from "next/image";
export default function About() {
  return (
    <section className="my-10">
      <h1 className="text-center font-extrabold text-4xl pb-6">About Us</h1>

      <div className="mx-auto lg:w-1/2 text-lg">
        <div className=" text-center lg:text-start mb-5">
          <p>
            Welcome to our blog your ultimate destination for insights
            inspiration and valuable resources across diverse topics that matter
            to you. Whether you are seeking guidance exploring your passions or
            simply looking for a place to learn and grow we are here to provide
            you with the information you need in an engaging and meaningful way.
          </p>
          <p className="my-4">
            We believe the internet is a treasure trove of opportunities and our
            goal is to curate the best it has to offer. From education and
            health to technology and arts our content spans a variety of topics
            making it a one-stop platform for readers from all walks of life.
            Our mission is to empower you with knowledge inspire you with ideas
            and help you make informed decisions in your everyday life.
          </p>
        </div>
        <div>
          <Image
            src="/assets/aboutimg.jpg"
            alt=""
            width={500}
            height={400}
            className="h-[400px] w-[700px] object-cover mx-auto"
          />
        </div>
        <div className="my-5">
        
          <p className="mt-3">
            This is just the beginning. We are constantly working on
            bringing you more exciting topics and categories to explore. More
            coming soon—stay tuned as we expand our horizons to cover even more
            areas of interest and relevance to you.
          </p>
        </div>

        <div className="my-5">
          <h2 className="font-bold text-xl">Our Vision</h2>
          <p>
            Our vision is to build a community where knowledge is shared ideas
            flourish and everyone has the opportunity to grow. We strive to
            create a platform that not only informs but also inspires
            individuals to take charge of their lives and pursue their dreams.
          </p>
        </div>

        <div className="my-5">
          <h2 className="font-bold text-xl">Why Choose Us</h2>
          <p>
            We understand the importance of trustworthy and relatable content in
            today;s fast-paced digital world. Our team is dedicated to bringing
            you well-researched and carefully crafted articles to ensure you get
            accurate and actionable information. Whether you are a student a
            professional or just a curious reader you will find something
            valuable here.
          </p>
          <p>
            Thank you for being a part of our community. Together let us explore
            learn and make the most of the incredible resources the internet has
            to offer.
            <br />
            <b>Stay with us because the best is yet to come.</b>
          </p>
        </div>
      </div>
    </section>
  );
}
