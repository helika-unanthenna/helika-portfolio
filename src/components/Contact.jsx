import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import CustomAlert from "./CustomAlert";

const Contact = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const [showAlert, setShowAlert] = useState(false); // Alert visibility state
  const [alertMessage, setAlertMessage] = useState(""); // Alert message

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, // Access Service ID from .env
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // Access Template ID from .env
        form.current,
        import.meta.env.VITE_EMAILJS_USER_ID // Access User ID from .env
      )
      .then(
        (result) => {
          console.log(result.text);
          setAlertMessage("Message sent successfully!"); // Set success message
          setShowAlert(true); // Show the alert

          if (form.current) {
            form.current.reset(); // Reset the form
          }
        },
        (error) => {
          console.log(error.text);
          setAlertMessage("Failed to send the message. Please try again."); // Set error message
          setShowAlert(true); // Show the alert
        }
      
      )
      .finally(() => {
        setIsLoading(false); // Reset loading state
      });
  };

  return (
    <section id="contact" className="py-16 items-center text-gray-600">
      <h2 className="text-4xl font-bold mb-8 text-center">Contact Me</h2>
      <div className="container w-full flex flex-col lg:flex-row px-6 lg:px-80">
        <div className="container lg:w-1/2 justify-start items-center flex flex-col">
          <div className="bg-white text-gray-600 px-6 py-4 rounded-lg border-2 border-gray-200 w-64 flex flex-col items-center justify-center mb-6">
            <i className="bx bx-mail-send text-4xl mb-2 text-gray-400"></i>
            <p className="text-md">Email</p>
            <p className="text-md font-semibold">h.unanthenna@gmail.com</p>
          </div>
          <div className="bg-white text-gray-600 px-6 py-4 rounded-lg border-2 border-gray-200 w-64 flex flex-col items-center justify-center mb-6">
            <i className="bx bxs-phone-call text-4xl mb-2 text-gray-400"></i>
            <p className="text-md">Phone</p>
            <p className="text-md font-semibold">+94760408873</p>
          </div>
        </div>
        <div className="container mx-auto text-left lg:w-1/2 flex flex-col justify-center items-center">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="max-w-lg mx-auto"
          >
            <input
              type="text"
              name="name" // Required for EmailJS
              placeholder="Your Name"
              className="w-80 p-3 mb-4 bg-white rounded-lg block border-2 border-gray-200 focus:border-gray-300 focus:outline-none"
              required
              disabled={isLoading}
            />
            <input
              type="email"
              name="email" // Required for EmailJS
              placeholder="Your Email"
              className="w-80 p-3 mb-4 bg-white rounded-lg block border-2 border-gray-200 focus:border-gray-300 focus:outline-none"
              required
              disabled={isLoading}
            />
            <textarea
              name="message" // Required for EmailJS
              placeholder="Your Message"
              rows="5"
              className="w-80 p-3 mb-4 bg-white rounded-lg resize-none block border-2 border-gray-200 focus:border-gray-300 focus:outline-none"
              required
              disabled={isLoading}
            ></textarea>
            <button
              type="submit"
              className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:text-white hover:text-lg"
              disabled={isLoading}
            >
             {isLoading ? "Sending... " : "Send Message "}<i className="bx bxs-send"></i>
            </button>
          </form>
        </div>
      </div>
      {/* Custom Alert */}
      {showAlert && (
        <CustomAlert
          message={alertMessage}
          onClose={() => setShowAlert(false)} // Close the alert
        />
      )}
    </section>
  );
};

export default Contact;
