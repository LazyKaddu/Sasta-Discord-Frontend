import React from "react";
import MainBody from "./components/MainBody";

const ContactSection = () => {
  return (
    <>
      <div className='size-full bg-[#5865F2] bg-[url("https://imgs.search.brave.com/zqC78uQ44KD1yV4FGJNlXrVIwe8ddJ-2_L5FYHZo4sQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/d2FsbHBhcGVyc2Fm/YXJpLmNvbS8yNi82/OC9DSzdKUVouanBn")] bg-cover grid place-items-center'>
        <div className="flex flex-col gap-3 items-center w-full h-full backdrop-blur-[1px] rounded-lg text-white py-3">
          <div className="text-7xl font-semibold text-white font-mono">
            Contact Us
          </div>
          <div className="w-[80%] text-center text-lg font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            doloribus odit consectetur at deleniti ducimus assumenda tempora
            deserunt excepturi consequatur.
          </div>
          <div className="flex size-full w-[80%]">
            {/* right side */}
            <div className="flex h-full w-[50%] flex-col gap-[5%] p-7">
              {/* ROW 1 */}
              <div className="flex">
                <div className="size-16 text-3xl flex justify-center items-center text-center bg-white text-black rounded-[50%]">
                  <i class="fas fa-home"></i>
                </div>
                <div className="px-3">
                  <h3 className="text-2xl tracking-wide font-bold">
                    Address
                  </h3>
                  <p className="w-[65%] text-lg tracking-wide opacity-90 leading-7">
                    Premnagar, dehradun, Uttarakhand, 248007
                  </p>
                </div>
              </div>
              {/* ROW 2 */}
              <div className="flex ">
                <div className="size-16 text-3xl flex justify-center items-center text-center bg-white text-black rounded-[50%]">
                  <i class="fas fa-phone"></i>
                </div>
                <div className="px-3">
                  <h3 className="text-2xl tracking-wide font-bold">
                    Phone
                  </h3>
                  <p className="text-lg tracking-wide opacity-90">
                    745-485-3275
                  </p>
                </div>
              </div>
              {/* ROW 3 */}
              <div className="flex ">
                <div className="size-16 text-3xl flex justify-center items-center text-center bg-white text-black rounded-[50%]">
                  <i class="fas fa-envelope"></i>
                </div>
                <div className="px-3">
                  <h3 className="text-2xl tracking-wide font-bold">
                    Email
                  </h3>
                  <p className="text-lg tracking-wide opacity-90">
                    nikhil220705@gmail.com
                  </p>
                </div>
              </div>
            </div>
            {/* left side */}
            <div className="flex flex-col h-fit py-2 w-[45%] bg-white rounded">
              <form
                className="flex flex-col gap-2 h-full w-[90%] text-zinc-700 px-5 py-2 mb-3"
                method="post"
              >
                <h3 className="text-4xl font-bold my-1">Send Message</h3>
                <div id="contact-input" className="w-full relative mt-2">
                  <input
                    className="w-full py-1 text-lg my-2 border-b-2 border-zinc-700 outline-none"
                    type="text"
                  />
                  <span
                    id="contact-span"
                    className="absolute left-0 py-1 text-lg my-2 text-zinc-600 pointer-events-none"
                  >
                    Full Name
                  </span>
                </div>
                <div id="contact-input" className="w-full relative mt-2">
                  <input
                    className="w-full py-1 text-lg my-2 border-b-2 border-zinc-700 outline-none"
                    type="email"
                  />
                  <span
                    id="contact-span"
                    className="absolute left-0 py-1 text-lg my-2 text-zinc-600 pointer-events-none"
                  >
                    Email
                  </span>
                </div>
                <div id="contact-input" className="w-full relative mt-2">
                  <textarea className="resize-none w-full py-1 text-lg my-2 border-b-2 border-zinc-700 outline-none"></textarea>
                  <span
                    id="contact-span"
                    className="absolute left-0 py-1 text-lg my-2 text-zinc-600 pointer-events-none"
                  >
                    Type your Message...
                  </span>
                </div>
                <div>
                  <button
                    id="contact-send-button"
                    className="w-full h-11 overflow-hidden bg-blue-500 hoer:bg-blue-400 rounded-sm px-4 
                    text-white text-lg font-semibold tracking-wide mb-1"
                    type="submit"
                  >
                    <div id="send-icon" className="h-full py-2"><i className="fas fa-paper-plane"></i></div>
                    <div id="send-text" className="h-full py-2">Send</div>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

function Contact() {
  return <MainBody data={<ContactSection />} open={true} />;
}

export default Contact;
