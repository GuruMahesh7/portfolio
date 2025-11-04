import React, { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

const Toast = ({ show, type = "success", message, onClose }) => {
  // slide in from right
  return (
    <div
      aria-live="polite"
      className={`fixed top-6 right-6 z-50 transform transition-transform duration-300 ${
        show ? "translate-x-0" : "translate-x-40 opacity-0"
      }`}
      style={{ minWidth: 280 }}
    >
      <div
        className={`rounded-md px-4 py-3 shadow-lg ${
          type === "success" ? "bg-green-600" : "bg-red-600"
        } text-white`}
      >
        <div className="flex items-start justify-between space-x-4">
          <div className="flex-1 text-sm">{message}</div>
          <button onClick={onClose} className="ml-2 font-bold">
            ✕
          </button>
        </div>
      </div>
    </div>
  );
};

const GetInTouch = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({
    show: false,
    type: "success",
    message: "",
  });

  const YOUR_PHONE_NUMBER = "6300603869"; // <-- put your phone in E.164 format here (example)

  const showToast = (type, message) => {
    setToast({ show: true, type, message });
    setTimeout(() => setToast((t) => ({ ...t, show: false })), 4500);
  };

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      showToast("error", "Please fill all fields.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("http://localhost:4000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        showToast("success", data?.message || "Message sent — thank you!");
        setForm({ name: "", email: "", message: "" });
      } else {
        showToast("error", data?.error || "Failed to send message.");
      }
    } catch (err) {
      console.error(err);
      showToast("error", "Network error — try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="contact" className="bg-[black] py-16 px-4 font-sans text-white">
      <Toast
        show={toast.show}
        type={toast.type}
        message={toast.message}
        onClose={() => setToast({ ...toast, show: false })}
      />
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl pt-10 font-bold text-center mb-16 text-blue-400">
          Get in Touch
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="flex flex-col space-y-8">
            <div className="bg-[#181818] rounded-lg shadow-xl p-6">
              <h3 className="text-xl font-semibold mb-4">Let's Connect</h3>
              <p className="text-gray-400 mb-6">
                I'm always excited to discuss new opportunities, collaborate on
                interesting projects, or simply chat about technology...
              </p>

              <div className="space-y-4">
                <div className="bg-[black] rounded-md p-4 flex items-center space-x-4">
                  <FaGithub className="text-2xl text-white" />
                  <div>
                    <p className="font-semibold text-white">GitHub</p>
                    <a
                      href="https://github.com/narendranaragani"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline"
                    >
                      github.com/narendra-naragani
                    </a>
                  </div>
                </div>
                <div className="bg-[black] rounded-md p-4 flex items-center space-x-4">
                  <FaLinkedin className="text-2xl text-white" />
                  <div>
                    <p className="font-semibold text-white">LinkedIn</p>
                    <a
                      href="https://www.linkedin.com/in/narendra-naragani/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline"
                    >
                      linkedin.com/in/narendra-naragani
                    </a>
                  </div>
                </div>
                <div className="bg-[black] rounded-md p-4 flex items-center space-x-4">
                  <FaMapMarkerAlt className="text-2xl text-white" />
                  <div>
                    <p className="font-semibold text-white">Location</p>
                    <p className="text-gray-400">Available for Remote Work</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#181818] rounded-lg shadow-xl p-6">
              <h3 className="text-xl font-semibold text-blue-400 mb-2">
                Ready to Work Together?
              </h3>
              <p className="text-gray-400 mb-4">
                I'm currently available for full-time opportunities and
                freelance projects. Let's build something amazing together!
              </p>

              {/* Simple tel: link — clicking on phone will call your number */}
              <a
                href={`tel:${YOUR_PHONE_NUMBER}`}
                className="w-full inline-flex items-center justify-center px-4 py-3 bg-blue-600 rounded-md hover:bg-blue-700 transition-colors duration-300"
              >
                <FaPaperPlane className="mr-2" /> Schedule a Call
              </a>
              <p className="text-xs text-gray-400 mt-2">
                (Tap the button on your phone to call me. Desktop users will
                open the dialer app if available.)
              </p>
            </div>
          </div>

          <div className="bg-[#181818] rounded-lg shadow-xl p-8">
            <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block  text-sm mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full bg-[black] text-white rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-400 text-sm mb-1"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="w-full bg-[black] text-white rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-400 text-sm mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or just say hello..."
                  className="w-full bg-[black] text-white rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center px-4 py-3 bg-blue-600 rounded-md hover:bg-blue-700 transition-colors duration-300"
              >
                <FaPaperPlane className="mr-2" />{" "}
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>

            <p className="text-center text-gray-400 text-sm mt-6">
              Prefer to reach out directly?
            </p>
            <div className="flex justify-center space-x-6 mt-2">
              <a
                href="mailto:narendranaragani7@gmail.com"
                className="text-white text-3xl hover:text-blue-400 transition-colors duration-300"
              >
                <FaPaperPlane />
              </a>
              <a
                href="https://linkedin.com/in/narendra-naragani"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-3xl hover:text-blue-400 transition-colors duration-300"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
