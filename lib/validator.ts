import { z } from "zod";

export const eventFormSchema = z.object({
  title: z
    .string()
    .min(3, "Title must be at least 3 characters")
    .max(100, "Description must be at most 100 characters"),
  locations: z
    .string()
    .min(3, "Location must be at least 3 characters")
    .max(100, "Location must be at most 100 characters"),
  imageUrl: z.string().url("Invalid URL"),
  description: z
    .string()
    .min(3, "Description must be at least 3 characters")
    .max(500, "Description must be at most 500 characters"),
  startDateTime: z.date(),
  endDateTime: z.date(),
  categoryId: z.string(),
  price: z.string(),
  isFree: z.boolean(),
  url: z.string().url("Invalid URL"),
});
