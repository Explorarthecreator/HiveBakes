"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogDescription,
  DialogTitle,
} from "../ui/dialog";
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
import { Button } from "../ui/button";

const OrderDialog = () => {
  const [tab, setTab] = useState("form");

  const form = useForm<z.infer<typeof orderFormSchema>>({
    resolver: zodResolver(orderFormSchema),
    defaultValues: {
      allergy: "",
      dream: "",
      email: "",
      flavor: "",
      name: "",
      phoneNumber: "",
      size: "",
      shape: "",
      delivery: "",
      frostingFlavour: "",
    },
  });

  async function submit() {
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
        className="w-11/12 !max-w-[768px] p-6 md:p-16  gap-6 md:gap-12 max-h-[80vh] overflow-y-auto"
        onInteractOutside={(e) => e.preventDefault()}
      >
        <DialogHeader className="sr-only">
          <DialogTitle>Order Form</DialogTitle>
          <DialogDescription>
            If you need to order from us, fill out the form
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-2 md:space-y-4 text-center">
          <h1 className="font-bold text-4xl md:text-5xl"> Order Form</h1>
          {tab === "form" && (
            <p className="text-sm md:text-lg">
              Specializing in custom cakes and cupcakes, macarons,and
              allergen-free baking.
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
                        <FormLabel>Full Name *</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder=""
                            className="h-12 rounded-none border-black  focus-visible:ring-0 active:outline-none"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phoneNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number *</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder=""
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
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder=""
                            className="h-12 rounded-none border-black  focus-visible:ring-0 active:outline-none"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="dream"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Tell us what your dream for this cake looks like! *
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            {...field}
                            placeholder=""
                            className="h-12 rounded-none border-black  focus-visible:ring-0 active:outline-none"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="size"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Size...how many people is this cake going to feed? *
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder=""
                            className="h-12 rounded-none border-black  focus-visible:ring-0 active:outline-none"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="shape"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Shape *</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder=""
                            className="h-12 rounded-none border-black  focus-visible:ring-0 active:outline-none"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="flavor"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Cake Flavor *</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder=""
                            className="h-12 rounded-none border-black  focus-visible:ring-0 active:outline-none"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="frostingFlavour"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Frosting and Filling Flavors *</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder=""
                            className="h-12 rounded-none border-black  focus-visible:ring-0 active:outline-none"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="delivery"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>When do you need this cake?! *</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder=""
                            className="h-12 rounded-none border-black  focus-visible:ring-0 active:outline-none"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="allergy"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Special allergy considerations</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder=""
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
                      Place an Order
                    </Button>
                  </div>
                </form>
              </Form>
            </TabsContent>
            <TabsContent value="done">
              <p className="text-center">
                Thank you for ordering from us, we will be sending a
                confirmation mail shortly.
              </p>
            </TabsContent>
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const orderFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  phoneNumber: z
    .string()
    .min(1, "Phone number is required")
    .min(9, "Phone number cannot be less than 9 digits"),
  email: z.email("Invalid email address"),
  dream: z.string().min(1, "This field is required"),
  size: z.string().min(1, "Size is required"),
  flavor: z.string().min(1, "Flavour is required"),
  shape: z.string().min(1, "Shape is required"),
  frostingFlavour: z.string().min(1, "Frosting flavour is required"),
  delivery: z.string().min(1, "Delivery option is required"),
  allergy: z.string().optional(),
});
export default OrderDialog;
