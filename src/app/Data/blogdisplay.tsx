import Image from "next/image";
import Link from "next/link";

const Display = ({
  imageSrc,
  imageAlt,
  heading,
  title,
  detail,
}: {
  imageSrc: string;
  imageAlt: string;
  heading: string;
  title: string;
  detail: string;
}) => {
  return (
    <div className="flex flex-col lg:flex-row justify-between bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-5 lg:w-[65%]">
        <h2 className="font-bold text-2xl text-blue-800 text-center lg:text-start">
          {heading}
        </h2>
        <h4 className="text-xl text-center font-bold lg:text-start mt-2">{title}</h4>
        <p className="text-base font-sans text-center lg:text-start">{detail}</p>
      </div>
      <div className="flex justify-center items-center w-full lg:w-96">
        <Link href="">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={150}
            height={150}
            className="lg:h-96 xl:h-72 w-[280px] md:w-96 object-cover rounded-lg cursor-pointer"
          />
        </Link>
      </div>
    </div>
  );
};

export default function BlogDisplay() {
  const DisplayData = [
    {
      imageSrc: "/display/study.jpg",
      imageAlt: "Study",
      heading: "STUDIES",
      title: "Learn and grow with the vast resources of the internet.",
      detail:"Students can use online platforms to make their learning experience more effective and convenient. They can access a variety of resources like e-books video lectures and online courses to understand difficult topics and improve their skills. Online study platforms also offer practice tests and quizzes which help students prepare for exams in a better way. Research materials including articles and journals are easily available for deeper understanding of subjects. Group forums and discussion boards allow students to interact with peers share knowledge and solve problems together. Students who struggle with certain subjects can find tutors or enroll in classes for extra help. Tools like YouTube and other educational apps offer detailed step-by-step tutorials which make learning practical and easy for everyone."
    },
    {
      imageSrc: "/display/health.jpg",
      imageAlt: "Health and Fitness",
      heading: "HEALTH",
      title: "Stay fit and informed with online health tips.",
      detail:"Maintaining good health is easier with the help of online resources. People can search for information about diseases symptoms and treatments without visiting a clinic immediately. Online consultations with doctors make it convenient to get advice prescriptions or follow-ups without leaving home. Fitness enthusiasts can use apps that provide exercise routines diet plans and progress tracking to stay in shape. Platforms like Healthline and WebMD offer useful tips on how to prevent illnesses and maintain a healthy lifestyle. Many people rely on online yoga and meditation videos to manage stress and improve mental health. There are also support groups and forums where people with similar health challenges can share experiences and motivate each other. Those who prefer natural remedies can easily find DIY recipes for common health problems."
    },
    {
      imageSrc: "/display/technology.jpg",
      imageAlt: "Technology",
      heading: "TECHNOLOGY",
      title: "Explore the latest innovations and trends.",
      detail:"Technology has reshaped modern life by offering groundbreaking solutions. Blockchain enables secure transactions and powers cryptocurrencies smart contracts and supply chains. Artificial intelligence (AI) including agentic AI improves tools like chatbots and virtual assistants streamlining automation. Cloud computing services like AWS and Google Cloud provide easy data storage and processing. The Internet of Things (IoT) connects devices like smart appliances for a more efficient lifestyle. Virtual reality (VR) and augmented reality (AR) create immersive experiences in education gaming and healthcare. Innovations like 5G networks and quantum computing further accelerate global progress."
    },
    {
      imageSrc: "/display/business.jpg",
      imageAlt: "Business",
      heading: "BUSINESS",
      title: "Boost your career and start your ventures.",
      detail:"The business world has transformed significantly with the availability of online tools and services. Companies can reach a global audience and sell products or services more efficiently using e-commerce platforms. Entrepreneurs with minimal investment can start their businesses by creating websites or selling on platforms like Amazon and Etsy. Digital marketing through social media has become a cost-effective way to promote brands and engage with customers. Online payment systems and banking services make transactions quick safe and convenient. Freelancers and remote workers find jobs and build careers on websites like Upwork and LinkedIn. Businesses also use cloud-based software to manage their operations finances and customer relationships effectively. Analytics tools available online help businesses understand customer behavior and make data-driven decisions."
    },
    {
      imageSrc: "/display/entertainment.jpg",
      imageAlt: "Entertainment",
      heading: "ENTERTAINMENT",
      title: "Unwind with endless online fun and creativity.",
      detail:"Entertainment options have expanded massively with the internet offering something for everyone. Streaming services like Netflix YouTube and Spotify let people enjoy movies music and shows anytime anywhere. Online gaming has become a popular way for friends to compete and have fun even if they are miles apart. Social media platforms are full of creative videos stories and posts that keep users engaged for hours. Hobbies like cooking painting or photography can be explored and mastered using free online tutorials and classes. Virtual concerts and live streams allow fans to connect with their favorite artists from the comfort of their homes. The rise of virtual and augmented reality is taking entertainment to a new level by offering immersive experiences like interactive games and 3D movies."
    },
    {
      imageSrc: "/display/travel.jpg",
      imageAlt: "Travel",
      heading: "TRAVEL",
      title: "Discover new places and plan your journeys.",
      detail:"Traveling has become more accessible and enjoyable thanks to online tools and services. People can plan entire trips by booking flights hotels and car rentals through travel websites without needing a travel agent. Online reviews and travel blogs provide insights into destinations helping travelers make informed choices. Navigation apps like Google Maps guide travelers with step-by-step directions and even suggest popular attractions nearby. Virtual tours give a glimpse of places before visiting making it easier to decide where to go. Social media platforms inspire people to explore new locations by showcasing beautiful travel stories and pictures. Travelers can also find discounts on tickets and accommodations online saving money on their trips. Sharing experiences through blogs and vlogs helps others plan their journeys better."
    },
    {
      imageSrc: "/display/haircare.jpg",
      imageAlt: "Hair Care",
      heading: "HAIR CARE",
      title: "Discover tips and tricks for healthy, shiny, and beautiful hair.",
      detail:"Haircare has become simpler with online tutorials tips and product reviews. People can find solutions to common hair problems like hair fall dandruff and dryness by watching videos or reading expert blogs. DIY remedies using natural ingredients are easily available and provide affordable alternatives to expensive treatments. Online platforms sell a wide range of haircare products with reviews that help users choose the best ones for their hair type. Experts also share advice on how to maintain healthy hair and create different hairstyles. Social media platforms are filled with ideas for trendy and easy hairstyles that can be done at home. Tutorials guide users step-by-step on how to care for their hair or style it for special occasions."
    },
    {
      imageSrc: "/display/art.jpg",
      imageAlt: "Art",
      heading: "ART",
      title: "Get inspired by creativity and artistic expressions.",
      detail:"The internet has opened new doors for artists to showcase their creativity and learn new techniques. Painters digital designers and sculptors can share their work with a global audience through social media and art platforms. Tutorials on various art forms like sketching digital painting and animation help beginners improve their skills. Online galleries and virtual exhibitions allow artists to display their work without the need for physical spaces. Musicians and performers upload their creations on platforms like YouTube and SoundCloud to reach more listeners. Artists can also collaborate on projects with others from different parts of the world. Online communities provide a space for feedback discussions and support among creative individuals."
    },
    {
      imageSrc: "/display/sports.jpg",
      imageAlt: "Sports",
      heading: "SPORTS",
      title: "Stay updated with scores and sports news.",
      detail:"Sports enthusiasts use online platforms to keep up with live matches scores and the latest updates about their favorite players and teams. Streaming services allow fans to watch games from anywhere even if they cannot attend in person. Athletes and fitness lovers can find training programs and exercise routines to improve their skills or stay in shape. Sports equipment is available on e-commerce websites making it easy to purchase gear. Fans can join online forums to share opinions and celebrate victories together. Tutorials and videos help players learn new techniques and strategies for their favorite sports. Sports organizations also use online tools to analyze performance and improve team strategies."
    },
    {
      imageSrc: "/display/skincare.jpg",
      imageAlt: "Skin Care",
      heading: "SKIN CARE",
      title: "Nourish your skin with expert advice for a radiant and glowing look.",
      detail:"Taking care of skin has become easier with the help of online resources and products. People can learn about their skin type and find routines to keep their skin healthy and glowing. Platforms provide step-by-step guides on how to use different skincare products effectively. DIY remedies using natural ingredients are popular for addressing concerns like acne dryness and dark spots. Dermatologists share tips and advice on maintaining skin health through blogs and videos. Online stores offer a variety of skincare products with detailed descriptions and reviews to help customers choose the best ones. Community forums allow users to share their skincare journeys and get suggestions from others who have experienced similar issues."
    }
  ];

  return (
    <div className="flex flex-col my-10 gap-10">
      {DisplayData.map((display, index) => (
        <Display
          key={index}
          imageSrc={display.imageSrc}
          imageAlt={display.imageAlt}
          heading={display.heading}
          title={display.title}
          detail={display.detail}
        />
      ))}
    </div>
  );
}
