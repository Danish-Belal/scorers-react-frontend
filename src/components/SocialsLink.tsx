import SocialsInputLinks from './SocialsInputLinks';
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from './ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";

const formSchema = z.object({
  github: z.string().optional(), // Optional if you don't want to enforce validation
  linkedin: z.string().optional(),
  leetcode: z.string().optional(),
  codeforces: z.string().optional(),
  others: z.string().optional(),
});

const SocialsLink = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      github: "",
      linkedin: "",
      leetcode: "",
      codeforces: "",
      others: "",
    },
  });

  const socialsProfiles = [
    { label: "Github", name: "github" },
    { label: "LinkedIn", name: "linkedin" },
    { label: "Leetcode", name: "leetcode" },
    { label: "Codeforces", name: "codeforces" },
    { label: "Others", name: "others" },
  ];

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Going to submit all: ", values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {socialsProfiles.map((profile, index) => (
          <FormField
            key={index}
            control={form.control}
            name={profile.name} // Ensure this matches schema keys
            render={({ field }) => (
              <FormItem>
                <FormLabel>{profile.label}</FormLabel>
                <FormControl>
                  <Input placeholder={profile.label} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
        <button type="submit" className="btn-primary">
          Submit
        </button>
      </form>
    </Form>
  );
};

export default SocialsLink;
