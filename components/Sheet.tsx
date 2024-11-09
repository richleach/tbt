"use client";
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import emailjs from "@emailjs/browser";

const SHEET_SIDES = ["right"] as const;

type SheetSide = (typeof SHEET_SIDES)[number];

export default function SheetSide() {
  const [userMessage, setUserMessage] = useState("How Can I Help?");
  const nameInputRef = useRef<any>();
  const emailInputRef = useRef<any>();
  const messageInputRef = useRef<any>();

  function sendEmail(e: any) {
    e.preventDefault();

    if (e.target.name == "") {
      setUserMessage("Better add a value in the name field! ");
      console.log(e.target.value);
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
          console.log("FAILED...", error);
        }
      );
  }

  return (
    <div className="grid grid-cols-2 gap-2">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            {/* <Button variant="outline">Contact</Button> */}
            <span style={{ color: "#ea580c", marginRight: "-20px" }}>
              Contact
            </span>
          </SheetTrigger>
          <SheetContent side={side} className="text-white bg-black">
            <form>
              <SheetHeader style={{ backgroundColor: "black", color: "white" }}>
                <SheetTitle className="text-white">Contact Us</SheetTitle>
                <SheetDescription className="text-white">
                  <span>
                    We&apos;d love to hear from you - fill in the form below!
                  </span>
                  {userMessage && (
                    <span>
                      <br />
                      <br />
                      <span className="text-orange-600 font-bold">
                        {userMessage}
                      </span>
                    </span>
                  )}
                </SheetDescription>
              </SheetHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4 pb-3">
                  <Label htmlFor="name" className="text-right">
                    <span className="text-white">*</span>Name
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="* Name"
                    required
                    ref={nameInputRef}
                    className="col-span-3 border-orange-600 text-black"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4 pb-3">
                  <Label htmlFor="email" className="text-right">
                    <span className="text-white">*</span>Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="* Email"
                    required
                    ref={emailInputRef}
                    className="col-span-3 border-orange-600 text-black"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4 pb-3">
                  <Label htmlFor="message" className="text-right">
                    <span className="text-white">*</span>Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    placeholder="* Enter your message here."
                    ref={messageInputRef}
                    className="col-span-3 border-orange-600 text-black"
                  />
                </div>
              </div>
              <SheetFooter>
                <SheetClose asChild>
                  <Button
                    onClick={sendEmail}
                    type="submit"
                    className="bg-orange-600 text-black hover:bg-orange-600 hover:text-white"
                  >
                    Send It!
                  </Button>
                </SheetClose>
              </SheetFooter>
            </form>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  );
}
