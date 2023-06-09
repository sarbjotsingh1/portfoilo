import { useState } from "react";
import instagram from "../assets/instagram.png";
import mail from "../assets/mail.png";
import twitter from "../assets/twitter.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (event) => {
    event.preventDefault();

    // Perform subscription logic here
    console.log(`Subscribing with email: ${email}`);

    // Reset the form
    setEmail("");
  };

  return (
    <div className="flex justify-between items-center px-6 py-8">
      <form onSubmit={handleSubscribe} className="flex">
        <input
          type="email"
          placeholder="Enter your email"
          className="py-2 px-4 rounded-l-lg border-2 border-black focus:outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type="submit"
          className="py-2 px-4 bg-black text-white rounded-r-lg border-2 border-black focus:outline-none"
        >
          Subscribe
        </button>
      </form>
      <div className="flex">
        <img src={github} alt="Github" className="mx-2 w-8 h-8" />
        <img src={twitter} alt="Twitter" className="mx-2" />
        <img src={linkedin} alt="LinkedIn" className="mx-2" />
        <img src={instagram} alt="Instagram" className="mx-2" />
        <img src={mail} alt="Mail" className="mx-2" />
      </div>
    </div>
  );
};

export default Footer;
