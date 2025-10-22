"use client";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogDescription,
  DialogTitle,
} from "../ui/dialog";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Tabs, TabsContent } from "../ui/tabs";
import { useState } from "react";

const ContactDialog = () => {
  const [tab, setTab] = useState("form");
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function submit(values: z.infer<typeof contactFormSchema>) {
    setTab("done");
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant={"outline"}
          className="border-[#898F67] px-8 py-4 h-14 text-[#898F67] hover:bg-[#898F67] cursor-pointer hover:text-white"
        >
          Order
        </Button>
      </DialogTrigger>
      <DialogContent
        className="w-11/12 !max-w-[768px] p-6 md:p-16  gap-6 md:gap-12"
        onInteractOutside={(e) => e.preventDefault()}
      >
        <DialogHeader className="sr-only">
          <DialogTitle>Contact Form</DialogTitle>
          <DialogDescription>
            If you need to contact us, fill out the form
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-2 md:space-y-4 text-center">
          <h1 className="font-bold text-4xl md:text-5xl">Contact Us</h1>
          {tab === "form" && (
            <p className="text-sm md:text-lg">
              We&apos;re happy to guide you in pairing cakes, frostings, and
              fillings to make your celebration as sweet as you imagine it!
            </p>
          )}
        </div>

        <div>
          <Tabs value={tab}>
            <TabsContent value="form">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(submit)}
                  className="space-y-6"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Enter your name"
                            className="h-12 rounded-none border-black  focus-visible:ring-0 active:outline-none"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Enter your name"
                            className="h-12 rounded-none border-black  focus-visible:ring-0 active:outline-none"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            {...field}
                            placeholder="Enter your name"
                            className="h-12 rounded-none border-black  focus-visible:ring-0 active:outline-none"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="text-center">
                    <Button
                      type="submit"
                      className="rounded-none bg-[#898F67] px-8 py-4 h-14 border-[#898F67] border cursor-pointer hover:border-[#898F67] hover:bg-transparent hover:text-[#898F67] hover:border "
                    >
                      {" "}
                      Submit
                    </Button>
                  </div>
                </form>
              </Form>
            </TabsContent>
            <TabsContent value="done">
              <p className="text-center">
                Thank you for reaching out, we will respond to your message as
                soon as we can.
              </p>
            </TabsContent>
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const contactFormSchema = z.object({
  email: z.email(),
  name: z.string().min(3, "Name is required"),
  message: z.string().max(255, "Only 255 characters allow"),
});

export default ContactDialog;
