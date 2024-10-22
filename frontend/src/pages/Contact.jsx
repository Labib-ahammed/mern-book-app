import React from "react";
import { Button, Label, Textarea, TextInput } from "flowbite-react";
import { useForm } from "@formspree/react";
const Contact = () => {
  const [state, handleSubmit] = useForm('xkgngbkg')
  return (
    <div className="min-h-screen">
      <div className="container mx-auto text-white">
        <h1 className="text-3xl text-center my-5">Contact us</h1>
        <form className="flex max-w-md flex-col gap-4 mx-auto" onSubmit={handleSubmit}>
          <div>
            <div>
              <Label htmlFor="email" value="Email" className="text-white" />
            </div>
            <TextInput type="email" placeholder="Enter your email" name="email" required />
          </div>
          <div>
            <div>
              <Label htmlFor="text" value="Message" className="text-white" />
            </div>
            <Textarea
              type="text"
              placeholder="Enter your message"
              required
              rows={5}
              name="message"
            />
          </div>
          <Button gradientDuoTone="purpleToBlue" disabled={state.submitting} type="submit">
            {state.submitting ? "Submitting..." : "Submit"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
