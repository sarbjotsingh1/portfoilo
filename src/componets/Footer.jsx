import { useState } from "react";
import instagram from "../assets/instagram.png";
import mail from "../assets/mail.png";
import twitter from "../assets/twitter.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";

const socialMediaLinks = [
  { icon: github, alt: "Github", url: "https://github.com/example" },
  { icon: twitter, alt: "Twitter", url: "https://twitter.com/example" },
  { icon: linkedin, alt: "LinkedIn", url: "https://linkedin.com/example" },
  { icon: instagram, alt: "Instagram", url: "https://instagram.com/example" },
  { icon: mail, alt: "Mail", url: "mailto:example@example.com" },
];

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
          className="py-2 px-4 bg-black text-white rounded-r-lg border-2 border-black focus:outline-none transition duration-300 ease-in-out transform hover:scale-110"
        >
          Subscribe
        </button>
      </form>
      <div className="flex">
        {socialMediaLinks.map((link, index) => (
          <a
            href={link.url}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={link.icon}
              alt={link.alt}
              className="mx-2 w-8 h-8 transition duration-300 ease-in-out transform hover:scale-110"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Footer;
