import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "./ui/input";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";

const formSchema = z.object({
  github: z.string().optional(),
  linkdin: z.string().optional(),
  leetcode: z.string().optional(),
  codeforce: z.string().optional(),
  others: z.string().optional(),
});

const SocialsLink = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      github: "",
      linkdin: "",
    },
  });

  const socialsProfiles = [
    "Github",
    "Linkdin",
    "Leetcode",
    "Codeforces",
    "Other",
  ];

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Going to submit all ", values);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full max-w-md bg-gray-900 text-white rounded-lg shadow-lg p-8 space-y-6"
        >
          <h2 className="text-2xl font-bold text-blue-500 text-center">
            Socials Links
          </h2>

          {socialsProfiles.map((profile, index) => (
            <FormField
              key={index}
              control={form.control}
              name={profile.toLowerCase() as keyof z.infer<typeof formSchema>}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-300">{profile}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={profile}
                      {...field}
                      className="bg-black text-white border border-gray-700 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 rounded-lg"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}

          <button
            type="submit"
            className="w-full bg-blue text-white py-2 rounded-lg font-medium hover:bg-blue-600 transition-all duration-200"
          >
            Submit
          </button>
        </form>
      </Form>
    </div>
  );
};

export default SocialsLink;
