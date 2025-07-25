import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const updateSearchParams = (
  current: string,
  params: Record<string, string | null>,
) => {
  const searchParams = new URLSearchParams(current);

  Object.entries(params).forEach(([key, value]) => {
    if (value === null) {
      searchParams.delete(key);
    } else {
      searchParams.set(key, value);
    }
  });

  return `?${searchParams.toString()}`;
};
