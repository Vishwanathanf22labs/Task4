import { z } from "zod";

const phoneRegex = /^\+91\s[0-9]{10}$/;

const zipCodeRegex = /^[0-9]{6}$/;

const addressRegex = /^[a-zA-Z0-9\s,.-]{5,}$/;

export const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().min(1, "Enter your email").email("Invalid email address"),

  gender: z.enum(["male", "female"], {
    required_error: "Please select a gender",
  }),

  age: z
    .number({ invalid_type_error: "Age is required" })
    .min(18, "Age must be at least 18")
    .max(100, "Age must be at most 100"),

  phone: z
    .string()
    .regex(phoneRegex, "Phone number must be in format: +91 1234567890"),

  profession: z.string().min(1, "Profession is required"),
  hobbies: z.array(z.string()).min(1, "Select at least one hobby"),
  country: z.string().min(1, "Country is required"),

  address: z
    .string()
    .min(5, "Address is too short")
    .regex(
      addressRegex,
      "Address must contain only letters, numbers, spaces, commas, or dots"
    ),

  city: z.string().min(1, "City is required"),

  zipCode: z.string().regex(zipCodeRegex, "ZIP code must be exactly 6 digits"),

  education: z.string().min(1, "Education level is required"),

  experience: z
    .number({ invalid_type_error: "Experience is required" })
    .min(0, "Experience cannot be negative")
    .max(50, "Experience cannot exceed 50 years"),

  skills: z.array(z.string()).min(1, "Select at least one skill"),

  aboutYou: z
    .string()
    .trim()
    .min(10, "Please write at least 10 characters about yourself")
    .refine((val) => val.trim().length > 0, {
      message: "This field cannot be just spaces",
    }),
});

export type FormData = z.infer<typeof formSchema>;
