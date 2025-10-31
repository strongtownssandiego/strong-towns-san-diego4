import { NextPage } from "next";
import Image from "next/image";

const AboutPage: NextPage = () => {
  // console.log("about page");
  return (
    <div>
      <div className="flex items-center justify-center pt-3">
        <div>
          <h1 className="w-full text-2xl font-bold">About Us</h1>
        </div>
      </div>

    <div className="flex flex-wrap md:flex-nowrap p-5 items-center">
      <div className="w-full md:w-1/2 m-3">
      <p>
        Welcome to our website! We are the local chapter of Strong Towns.
        We work to make San Diego stronger economically, build community, and increase resilience.
      </p>
      <br />
      <p>
        We seek to replace San Diego’s post-war pattern of development, the Suburban Experiment, with a pattern of development that is financially strong and resilient. We advocate for our city to be safe, livable, and inviting. We work to elevate local government to be the highest level of collaboration for people working together in a place, not merely the lowest level in a hierarchy of governments. We are not partisan. We are inclusive. We are positive.
      </p>
      <br />
      <p>
        Check out our 
        Events 
        page to learn more about us and our mission - and how you can get involved!
      </p>
    </div>
    <div className="w-full md:w-1/2">
      <Image
        className="w-full"
        src="/images/IMG_0786.jpg"
        alt="Strong Towns San Diego logo"
        width={360}
        height={480}
      />
    </div>
    </div>
    </div>
  );
};

export default AboutPage;

/*

*/