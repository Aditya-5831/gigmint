import { countryOptions } from "@/lib/countries";
import { Control } from "react-hook-form";
import { FormControl, FormField, FormItem, FormMessage } from "../ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface CountrySelectProps {
  control: Control<
    {
      firstName: string;
      lastName: string;
      email: string;
      country: string;
      password: string;
    },
    any,
    {
      firstName: string;
      lastName: string;
      email: string;
      country: string;
      password: string;
    }
  >;
}

const CountrySelect = ({ control }: CountrySelectProps) => {
  return (
    <FormField
      name="country"
      control={control}
      render={({ field }) => (
        <FormItem>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger className="w-full focus-visible:ring-0">
                <SelectValue placeholder="Select a country" />
              </SelectTrigger>
            </FormControl>
            <SelectContent position="item-aligned">
              {countryOptions.map((country) => (
                <SelectItem key={country.value} value={country.label}>
                  {country.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default CountrySelect;
