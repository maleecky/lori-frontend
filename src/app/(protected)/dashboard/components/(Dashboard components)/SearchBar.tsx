"use client";

import FormFieldUi from "@/components/FormField";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const SearchSchema = z.object({
  searchTerm: z.string(),
});
const SearchBar = () => {
  const form = useForm({
    resolver: zodResolver(SearchSchema),
    defaultValues: {
      searchTerm: "",
    },
  });

  const onSubmitHandler = (data: any) => {
    console.log(data.searchTerm);
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmitHandler)}>
        <FormFieldUi type="text" form={form} name="searchTerm" label="Search" />
      </form>
    </Form>
  );
};

export default SearchBar;
