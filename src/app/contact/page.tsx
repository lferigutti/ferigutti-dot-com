import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function ContactPage() {
  return (
    <main className="w-full max-w-6xl mx-auto px-8 py-16 space-y-16">
      {/* Page Header */}
      <section className="text-center space-y-6">
        <h1 className="text-5xl font-bold">Get in Touch</h1>
        <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
          I&apos;m always open to discussing new opportunities, collaborations,
          or just having a conversation about technology and product
          development.
        </p>
      </section>

      {/* Contact Methods */}
      <section className="grid md:grid-cols-2 gap-16">
        {/* Contact Form */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold">Send me a message</h2>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="Your first name"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="lastName" className="block text-sm font-medium">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="Your last name"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="your.email@example.com"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="block text-sm font-medium">
                Subject
              </label>
              <select
                id="subject"
                name="subject"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
              >
                <option value="">Select a topic</option>
                <option value="project">Project Collaboration</option>
                <option value="job">Job Opportunity</option>
                <option value="consultation">Consultation</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 transition-colors resize-none"
                placeholder="Tell me about your project or opportunity..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium text-lg transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold">Let&apos;s connect</h2>

          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              Whether you have a project in mind, want to discuss opportunities,
              or just want to say hello, I&apos;d love to hear from you.
            </p>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Response Time</h3>
              <p className="text-gray-300">
                I typically respond within 24-48 hours. For urgent matters, feel
                free to reach out on LinkedIn.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">
                What I&apos;m looking for
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Interesting frontend and full-stack projects</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Early-stage startup opportunities</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Collaboration on open source projects</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Speaking opportunities and mentoring</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Find me online</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <Link
            href="https://github.com/lferigutti"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 rounded-xl p-6 text-center hover:bg-gray-700 transition-colors group"
          >
            <div className="space-y-3">
              <FaGithub className="w-8 h-8 mx-auto group-hover:text-blue-400 transition-colors" />
              <div className="space-y-1">
                <h3 className="font-semibold">GitHub</h3>
                <p className="text-sm text-gray-400">View my code</p>
              </div>
            </div>
          </Link>

          <Link
            href="https://linkedin.com/in/leonardo-ferigutti"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 rounded-xl p-6 text-center hover:bg-gray-700 transition-colors group"
          >
            <div className="space-y-3">
              <FaLinkedin className="w-8 h-8 mx-auto group-hover:text-blue-400 transition-colors" />
              <div className="space-y-1">
                <h3 className="font-semibold">LinkedIn</h3>
                <p className="text-sm text-gray-400">Professional network</p>
              </div>
            </div>
          </Link>

          <Link
            href="https://x.com/LeoFerigutti"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 rounded-xl p-6 text-center hover:bg-gray-700 transition-colors group"
          >
            <div className="space-y-3">
              <FaXTwitter className="w-8 h-8 mx-auto group-hover:text-blue-400 transition-colors" />
              <div className="space-y-1">
                <h3 className="font-semibold">Twitter</h3>
                <p className="text-sm text-gray-400">Follow my thoughts</p>
              </div>
            </div>
          </Link>

          <Link
            href="mailto:leonardo@ferigutti.com"
            className="bg-gray-800 rounded-xl p-6 text-center hover:bg-gray-700 transition-colors group"
          >
            <div className="space-y-3">
              <FaEnvelope className="w-8 h-8 mx-auto group-hover:text-blue-400 transition-colors" />
              <div className="space-y-1">
                <h3 className="font-semibold">Email</h3>
                <p className="text-sm text-gray-400">Direct contact</p>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center">
          Frequently Asked Questions
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">
              What&apos;s your typical project timeline?
            </h3>
            <p className="text-gray-300">
              Project timelines vary depending on scope and complexity. I
              typically work on projects ranging from 2-12 weeks, with clear
              milestones and regular check-ins throughout the process.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">
              Do you work with remote teams?
            </h3>
            <p className="text-gray-300">
              Absolutely! I have extensive experience working with distributed
              teams and am comfortable with various collaboration tools and time
              zones.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">
              What technologies do you specialize in?
            </h3>
            <p className="text-gray-300">
              I primarily work with React, Next.js, TypeScript for frontend, and
              Python, Node.js for backend development. I&apos;m always open to
              learning new technologies that fit the project needs.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">
              Are you available for full-time roles?
            </h3>
            <p className="text-gray-300">
              I&apos;m currently focused on my startup role, but I&apos;m always
              open to discussing interesting opportunities that align with my
              career goals.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
