"use client";

import { useForm, ValidationError } from "@formspree/react";
import React from "react";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xrbzqeaq");
  if (state.succeeded) {
    return (
      <div className="flex-1">
        <h1 className="font-semibold text-xl">Thanks for contacting us!</h1>
        <p className="text-muted-foreground">We will get back to you soon</p>
      </div>
    );
  }

  return (
    <div className="flex-1">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
        <Label htmlFor="email">Email Address</Label>
        <Input id="email" type="email" name="email" className="text-black" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" name="message" className="text-black" />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <div className="flex justify-center items-center">
          <Button
            variant={"secondary"}
            type="submit"
            disabled={state.submitting}
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
