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
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200">
          Gender
        </label>
        <div className="mt-2 flex gap-6">
          <label className="flex items-center gap-2">
            <input
              {...register('gender')}
              type="radio"
              value="male"
              className="h-4 w-4 text-blue-600 border-gray-300 dark:border-gray-600 focus:ring-blue-500"
            />
            <span className="text-sm text-gray-700 dark:text-gray-300">Male</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              {...register('gender')}
              type="radio"
              value="female"
              className="h-4 w-4 text-blue-600 border-gray-300 dark:border-gray-600 focus:ring-blue-500"
            />
            <span className="text-sm text-gray-700 dark:text-gray-300">Female</span>
          </label>
        </div>
        {errors.gender && (
          <p className="mt-1 text-xs text-red-500">{errors.gender.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="age" className="block text-sm font-semibold text-gray-700 dark:text-gray-200">
          Age
        </label>
        <input
          id="age"
          {...register('age', { valueAsNumber: true })}
          type="number"
          min="18"
          max="100"
          className="mt-2 w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-2.5 text-sm text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-colors duration-200"
          placeholder="Enter your age"
        />
        {errors.age && (
          <p className="mt-1 text-xs text-red-500">{errors.age.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 dark:text-gray-200">
          Phone Number
        </label>
        <input
          id="phone"
          {...register('phone')}
          type="tel"
          className="mt-2 w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-2.5 text-sm text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-colors duration-200"
          placeholder="Enter your phone number"
        />
        {errors.phone && (
          <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="profession" className="block text-sm font-semibold text-gray-700 dark:text-gray-200">
          Profession
        </label>
        <select
          id="profession"
          {...register('profession')}
          className="mt-2 w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-2.5 text-sm text-gray-900 dark:text-gray-100 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-colors duration-200"
        >
          <option value="">-- Select Profession --</option>
          {professions.map((profession) => (
            <option key={profession} value={profession}>
              {profession}
            </option>
          ))}
        </select>
        {errors.profession && (
          <p className="mt-1 text-xs text-red-500">{errors.profession.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200">
          Hobbies
        </label>
        <div className="mt-2 grid grid-cols-2 gap-3">
          {hobbiesList.map((hobby) => (
            <label key={hobby} className="flex items-center gap-2">
              <input
                type="checkbox"
                value={hobby}
                {...register('hobbies')}
                className="h-4 w-4 text-blue-600 border-gray-300 dark:border-gray-600 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700 dark:text-gray-300">{hobby}</span>
            </label>
          ))}
        </div>
        {errors.hobbies && (
          <p className="mt-1 text-xs text-red-500">{errors.hobbies.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="country" className="block text-sm font-semibold text-gray-700 dark:text-gray-200">
          Country
        </label>
        <select
          id="country"
          {...register('country')}
          className="mt-2 w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-2.5 text-sm text-gray-900 dark:text-gray-100 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-colors duration-200"
        >
          <option value="">-- Select Country --</option>
          {countries.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
        {errors.country && (
          <p className="mt-1 text-xs text-red-500">{errors.country.message}</p>
        )}
      </div>
    </div>
  )
}