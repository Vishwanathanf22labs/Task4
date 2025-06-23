import type { UseFormRegister, FieldErrors } from 'react-hook-form'
import type { FormData } from '../types'

interface StepOneProps {
  register: UseFormRegister<FormData>
  errors: FieldErrors<FormData>
}

export default function StepOne({ register, errors }: StepOneProps) {
  return (
    <div className="space-y-4">
      <div>
        <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
          Name
        </label>
        <input 
          {...register('name')} 
          className="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500" 
          placeholder="Enter your full name"
        />
        {errors?.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
          Email
        </label>
        <input
          {...register('email')}
          type="email"
          className="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your email address"
        />
        {errors?.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>
    </div>
  )
}