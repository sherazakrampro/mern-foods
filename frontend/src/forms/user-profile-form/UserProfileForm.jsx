import { z } from "zod";

export const formSchema = z.object({
  email: z.string().email().optional(),
  name: z.string().min(2, "Name must be at least 2 characters long"),
  addressLine1: z.string().min(1, "Address is required"),
  city: z.string().min(1, "City is required"),
  country: z.string().min(1, "Country is required"),
});
