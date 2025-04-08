"use client";

import { Textarea } from "@/components/ui/textarea";
import { ToastAction } from "@/components/ui/toast";
import axios from "@/lib/axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "../../components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../components/ui/form";
import { Input } from "../../components/ui/input";
import { useToast } from "../hooks/use-toast";

export function ContactBlock() {
  const { toast } = useToast();

  const formSchema = z.object({
    email: z.string().email({
      message: "Please enter a valid email address",
    }),
    phone: z.string().min(1, { message: "Phone number is required" }),
    address: z.string().min(1, { message: "Address is required" }),
    message: z.string().min(1, { message: "Message is required" }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      phone: "",
      address: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationKey: ["contact"],
    mutationFn: async (values: z.infer<typeof formSchema>) =>
      await axios.post("/contact/send", values),
    onSuccess: () => {
      toast({
        title: "Message Sent Successfully",
        description: new Date().toLocaleDateString(),
        action: <ToastAction altText="Close">Close</ToastAction>,
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Failed to Send Message",
        description: new Date().toLocaleDateString(),
        variant: "destructive",
        action: <ToastAction altText="Close">Close</ToastAction>,
      });
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    mutation.mutate(values);
  };

  return (
    <div className="h-[550px] max-w-[630px] flex-1 rounded-4xl border p-7 flex flex-col gap-6 max-md:border-none">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-6 h-full"
        >
          <div className="flex flex-wrap gap-3 w-full not-lg:flex-col">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="flex-1 min-w-[200px]">
                  <FormLabel className="text-sm font-medium text-muted-foreground mb-2">
                    Email
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Send className="absolute right-3 top-1/2 -translate-y-1/2 h-6 w-6 text-muted-foreground" />
                      <Input
                        placeholder="example@test.com"
                        className="pr-10 py-6 rounded-2xl"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem className="flex-1 min-w-[200px]">
                  <FormLabel className="text-sm font-medium text-muted-foreground mb-2">
                    Phone
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Phone className="absolute right-3 top-1/2 -translate-y-1/2 h-6 w-6 text-muted-foreground" />
                      <Input
                        placeholder="+261-0-0-0-000"
                        className="pr-10 py-6 rounded-2xl"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-muted-foreground mb-2">
                  Address
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <MapPin className="absolute right-3 top-1/2 -translate-y-1/2 h-6 w-6 text-muted-foreground" />
                    <Input
                      placeholder="Antananarivo, Madagascar"
                      className="pr-10 py-6 rounded-2xl"
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel className="text-sm font-medium text-muted-foreground mb-2">
                  Message
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <MessageCircle className="absolute right-3 top-6 -translate-y-1/2 h-6 w-6 text-muted-foreground" />
                    <Textarea
                      placeholder="Write your message here..."
                      className="h-full min-h-[120px] rounded-3xl pr-10 p-4 resize-none"
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="h-14 w-full rounded-3xl"
            disabled={mutation.isPending}
          >
            {mutation.isPending ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
