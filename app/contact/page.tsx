"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [userMessage, setUserMessage] = useState("How can we help?");
  const nameInputRef = useRef<any>();
  const emailInputRef = useRef<any>();
  const messageInputRef = useRef<any>();

  function sendEmail(e: any) {
    e.preventDefault();

    if (e.target.name == "") {
      setUserMessage("Better add a value in the name field!");
      return false;
    }
    if (e.target.email == "") {
      setUserMessage("Better add a value in the email field!");
      return false;
    }

    if (e.target.message == "") {
      setUserMessage("Better add a value in the message field!");
      return false;
    }

    let enteredName = nameInputRef.current.value;
    let enteredEmail = emailInputRef.current.value;
    let enteredMessage = messageInputRef.current.value;

    const reqBody = {
      name: enteredName,
      email: enteredEmail,
      message: enteredMessage,
    };

    emailjs
      .sendForm(
        "service_vjn2eqp",
        "template_w3efn1e",
        e.target,
        "R463x9oi-mDgVA3Z8"
      )
      .then(
        function (response) {
          //console.log('SUCCESS!', response.status, response.text);
          setUserMessage("Thank you, your message has been sent!");
          nameInputRef.current.value = "";
          emailInputRef.current.value = "";
          messageInputRef.current.value = "";
        },
        function (error) {
          //console.log('FAILED...', error);
        }
      );
  }
  return (
    <div className="container px-10 mx-auto mb-8">
      <main className="flex flex-col items-center justify-between text-black bg-white border-2 rounded-lg p-6">
        <div
          className="pl-3 w-full"
          style={{ borderLeft: "thin solid #9333EA" }}
        >
          <h2 style={{ borderBottom: "thin solid #9333EA" }}>Contact Us</h2>
          <div className="p-4 pb-12 mb-8 bg-white rounded-lg shadow-lg">
            <div className="container">
              <div className="showcase-form card">
                {userMessage && (
                  <h4 style={{ paddingBottom: "20px" }}>
                    <br />
                    <br />
                    {userMessage}
                  </h4>
                )}
                <form onSubmit={sendEmail}>
                  <div className="grid grid-cols-1 gap-4 mb-4 lg:grid-cols-2">
                    <input type="hidden" name="form-name" value="contact" />
                    <div className="form-control">
                      <input
                        type="text"
                        name="name"
                        placeholder="* Name"
                        required
                        ref={nameInputRef}
                        className="w-full px-4 py-2 text-gray-700 bg-gray-100 rounded-lg outline-none focus:ring-2 focus:ring-gray-200"
                      />
                    </div>
                    <div className="form-control">
                      <input
                        type="email"
                        name="email"
                        placeholder="* Email"
                        required
                        ref={emailInputRef}
                        className="w-full px-4 py-2 text-gray-700 bg-gray-100 rounded-lg outline-none focus:ring-2 focus:ring-gray-200"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-4 mb-4">
                    <div className="form-control">
                      <textarea
                        name="message"
                        required
                        placeholder="* Enter your message here."
                        className="w-full h-40 p-4 text-gray-700 bg-gray-100 rounded-lg outline-none focus:ring-2 focus:ring-gray-200"
                        ref={messageInputRef}
                      ></textarea>
                    </div>
                  </div>
                  <div className="mt-8">
                    <input
                      type="submit"
                      value="Send"
                      className="inline-block px-8 py-3 text-lg font-medium text-white transition duration-500 bg-purple-600 rounded-full cursor-pointer ease hover:bg-indigo-900"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
