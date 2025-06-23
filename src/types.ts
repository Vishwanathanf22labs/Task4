import { z } from 'zod'

export const formSchema = z.object({
  // Step 1 fields
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email'),
  
  // Step 2 fields
  gender: z.enum(['male', 'female'], { required_error: 'Please select a gender' }),
  age: z.number().min(18, 'Must be at least 18 years old').max(100, 'Must be less than 100'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  profession: z.string().min(1, 'Profession is required'),
  hobbies: z.array(z.string()).min(1, 'Select at least one hobby'),
  country: z.string().min(1, 'Country is required'),
  
  // Step 3 fields
  address: z.string().min(1, 'Address is required'),
  city: z.string().min(1, 'City is required'),
  zipCode: z.string().min(1, 'ZIP code is required'),
  education: z.string().min(1, 'Education level is required'),
  experience: z.number().min(0, 'Experience cannot be negative').max(50, 'Experience cannot exceed 50 years'),
  skills: z.array(z.string()).min(1, 'Select at least one skill'),
  aboutYou: z.string().min(10, 'Please write at least 10 characters about yourself'),
})

export type FormData = z.infer<typeof formSchema>