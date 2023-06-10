import Header from "../componets/Header";
import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");
  const [submitted, setSubmitted] = useState(false); // Track submission status

  const handleSubmit = (event) => {
    event.preventDefault();

    // Reset previous error messages
    setNameError("");
    setEmailError("");
    setMessageError("");

    // Validate fields
    if (name === "") {
      setNameError("Name cannot be empty");
    }
    if (email === "") {
      setEmailError("Email cannot be empty");
    }
    if (message === "") {
      setMessageError("Message cannot be empty");
    }

    // If all fields are valid, perform email sending logic here
    if (name !== "" && email !== "" && message !== "") {
      console.log(`Name: ${name}`);
      console.log(`Email: ${email}`);
      console.log(`Message: ${message}`);

      // Reset the form
      setName("");
      setEmail("");
      setMessage("");
      setSubmitted(true); // Set submission status to true
    }
  };

  return (
    <div className="font-Poppins h-screen overflow-hidden">
      <div className="border-8 rounded-3xl border-black mx-5 mt-4 h-[95%] bg-[#D9D6D6]">
        <div className="mt-[13vh]">
          <Header />
          <div className="bg-[#04FC44] h-[68vh]">
            <form
              className="flex flex-col items-center justify-center h-full"
              onSubmit={handleSubmit}
            >
              <h2 className="text-3xl font-bold text-black mb-6">Contact Me</h2>
              {submitted ? (
                <p className="text-red-950 mb-4">Thank you for your message!</p>
              ) : null}
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="text-lg font-semibold text-white"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full py-2 px-4 rounded-lg border-2 border-black focus:outline-none"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {nameError && <p className="text-red-500">{nameError}</p>}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="text-lg font-semibold text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full py-2 px-4 rounded-lg border-2 border-black focus:outline-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {emailError && <p className="text-red-500">{emailError}</p>}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="text-lg font-semibold text-white"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full py-2 px-4 rounded-lg border-2 border-black focus:outline-none"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                {messageError && <p className="text-red-500">{messageError}</p>}
              </div>
              <button
                type="submit"
                className="bg-black text-white px-6 py-3 rounded-lg transition duration-300 ease-in-out transform hover:scale-110"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
