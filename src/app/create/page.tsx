"use client";

import { useState } from "react";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
const formSchema = z.object({
  prompt: z.string().min(7, "Prompt must be 7 character").max(50),
});
export default function Create() {
  const [outputImage, setOutputImage] = useState<null | string>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <div className="w-full h-dvh flex justify-start items-center pt-20 flex-col gap-5">
      <div className="w-full border border-red-500 p-3">
        <h1 className="text-center text-3xl text-white font-bold md:text-5xl p-5">
          CREATE
        </h1>
        <p className="text-center text-xl text-white font-normal capitalize md:text-2xl leading-relaxed">
          Generated Beautiful and stunning image for free
        </p>
      </div>
      <div className="w-full flex flex-col md:flex-row gap-5 h-full">
        <div className="__form flex-1 flex gap-5  bg-blue-500/10  border-none outline-none p-5  items-center w-full justify-center  text-white font-normal ">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex gap-5 items-center flex-col "
            >
              <FormField
                control={form.control}
                name="prompt"
                render={({ field }) => (
                  <FormItem className=" min-w-[500px]">
                    <FormControl className="min-w-[80%]">
                      <Input
                        placeholder="Type anything you want"
                        className="w-full"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" variant={"secondary"} size={"lg"}>
                Generate
              </Button>
            </form>
          </Form>
        </div>
        <div className="__output flex-1 border bg-white/5 border-none outline-none p-5 text-white font-normal ">
          dsadas
        </div>
      </div>
    </div>
  );
}
