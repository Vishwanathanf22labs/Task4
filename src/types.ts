import { z } from 'zod'

export const formSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email'),
  gender: z.enum(['male', 'female'], { required_error: 'Please select a gender' }),
  hobbies: z.array(z.string()).min(1, 'Select at least one hobby'),
  country: z.string().min(1, 'Country is required'),
  age: z.number().min(18, 'Must be at least 18 years old').max(100, 'Must be less than 100'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  profession: z.string().min(1, 'Profession is required'),
})

export type FormData = z.infer<typeof formSchema>