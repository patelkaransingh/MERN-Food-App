import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem } from "./ui/form";
import { Delete, Search } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useEffect } from "react";

const formSchema = z.object({
  searchQuery: z.string({
    required_error: "Restaurant name is required!",
  }),
});

export type SearchForm = z.infer<typeof formSchema>;

type Props = {
  searchQuery: string;
  onSubmit: (formData: SearchForm) => void;
  placeHolder: string;
  onReset?: () => void;
};

export default function SearchBar({
  searchQuery,
  onSubmit,
  onReset,
  placeHolder,
}: Props) {
  const form = useForm<SearchForm>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      searchQuery,
    },
  });

  useEffect(() => {
    form.reset({ searchQuery });
  }, [form, searchQuery]);

  const handleReset = () => {
    form.reset({
      searchQuery: "",
    });

    if (onReset) {
      onReset();
    }
  };

  return (
    <Form {...form}>
      <form
        className={`flex items-center flex-1 gap-3 justify-between flex-row border-2 p-3 mx-5 rounded-full ${
          form.formState.errors.searchQuery && "bg-red-500"
        }`}
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <Search
          strokeWidth={2.5}
          size={30}
          className="ml-1 text-orange-500 hidden md:block"
        />
        <FormField
          control={form.control}
          name="searchQuery"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormControl>
                <Input
                  {...field}
                  className="border-none shadow-none text-xl focus-visible:ring-0"
                  placeholder={placeHolder}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <div>
          <Button
            className="rounded-full hidden md:block"
            type="button"
            variant="outline"
            onClick={handleReset}
          >
            clear
          </Button>
          <Delete onClick={handleReset} className="md:hidden text-gray-700" />
        </div>
        <Button
          className="rounded-full hidden md:block bg-orange-500"
          type="submit"
        >
          Search
        </Button>
      </form>
    </Form>
  );
}
