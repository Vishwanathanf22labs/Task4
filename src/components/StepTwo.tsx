import type { UseFormRegister, FieldErrors } from 'react-hook-form'
import type { FormData } from '../types'

interface StepTwoProps {
  register: UseFormRegister<FormData>
  errors: FieldErrors<FormData>
}

const countries = ['India', 'USA', 'Germany', 'Canada', 'Australia', 'UK']
const hobbiesList = ['Reading', 'Coding', 'Gaming', 'Sports', 'Music', 'Travel']
const professions = ['Software Engineer', 'Designer', 'Teacher', 'Doctor', 'Student', 'Other']

export default function StepTwo({ register, errors }: StepTwoProps) {
  return (
    <div className="space-y-4">
      <div>
        <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
          Gender
        </label>
        <div className="flex gap-6">
          <label className="flex items-center">
            <input 
              {...register('gender')} 
              type="radio" 
              value="male" 
              className="mr-2 text-blue-600 focus:ring-blue-500" 
            />
            <span className="text-gray-700 dark:text-gray-300">Male</span>
          </label>
          <label className="flex items-center">
            <input 
              {...register('gender')} 
              type="radio" 
              value="female" 
              className="mr-2 text-blue-600 focus:ring-blue-500" 
            />
            <span className="text-gray-700 dark:text-gray-300">Female</span>
          </label>
        </div>
        {errors.gender && (
          <p className="text-red-500 text-sm mt-1">{errors.gender.message}</p>
        )}
      </div>

      <div>
        <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
          Age
        </label>
        <input
          {...register('age', { valueAsNumber: true })}
          type="number"
          min="18"
          max="100"
          className="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your age"
        />
        {errors.age && (
          <p className="text-red-500 text-sm mt-1">{errors.age.message}</p>
        )}
      </div>

      <div>
        <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
          Phone Number
        </label>
        <input
          {...register('phone')}
          type="tel"
          className="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your phone number"
        />
        {errors.phone && (
          <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
        )}
      </div>

      <div>
        <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
          Profession
        </label>
        <select 
          {...register('profession')} 
          className="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">-- Select Profession --</option>
          {professions.map((profession) => (
            <option key={profession} value={profession}>
              {profession}
            </option>
          ))}
        </select>
        {errors.profession && (
          <p className="text-red-500 text-sm mt-1">{errors.profession.message}</p>
        )}
      </div>

      <div>
        <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
          Hobbies
        </label>
        <div className="grid grid-cols-2 gap-3">
          {hobbiesList.map((hobby) => (
            <label key={hobby} className="flex items-center gap-2">
              <input 
                type="checkbox" 
                value={hobby} 
                {...register('hobbies')} 
                className="text-blue-600 focus:ring-blue-500"
              />
              <span className="text-gray-700 dark:text-gray-300">{hobby}</span>
            </label>
          ))}
        </div>
        {errors.hobbies && (
          <p className="text-red-500 text-sm mt-1">{errors.hobbies.message}</p>
        )}
      </div>

      <div>
        <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
          Country
        </label>
        <select 
          {...register('country')} 
          className="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">-- Select Country --</option>
          {countries.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
        {errors.country && (
          <p className="text-red-500 text-sm mt-1">{errors.country.message}</p>
        )}
      </div>
    </div>
  )
}