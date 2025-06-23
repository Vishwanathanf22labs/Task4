import type { UseFormRegister, FieldErrors } from 'react-hook-form'
import type { FormData } from '../types'

interface StepThreeProps {
  register: UseFormRegister<FormData>
  errors: FieldErrors<FormData>
}

const educationLevels = ['High School', 'Bachelor\'s Degree', 'Master\'s Degree', 'PhD', 'Diploma', 'Certificate']
const skillsList = ['JavaScript', 'React', 'Node.js', 'Python', 'Java', 'C++', 'SQL', 'MongoDB', 'AWS', 'Docker', 'Git', 'Figma']

export default function StepThree({ register, errors }: StepThreeProps) {
  return (
    <div className="space-y-4">
      <div>
        <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
          Address
        </label>
        <textarea
          {...register('address')}
          rows={3}
          className="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          placeholder="Enter your full address"
        />
        {errors.address && (
          <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
            City
          </label>
          <input
            {...register('city')}
            className="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your city"
          />
          {errors.city && (
            <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>
          )}
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
            ZIP Code
          </label>
          <input
            {...register('zipCode')}
            className="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter ZIP code"
          />
          {errors.zipCode && (
            <p className="text-red-500 text-sm mt-1">{errors.zipCode.message}</p>
          )}
        </div>
      </div>

      <div>
        <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
          Education Level
        </label>
        <select 
          {...register('education')} 
          className="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">-- Select Education Level --</option>
          {educationLevels.map((level) => (
            <option key={level} value={level}>
              {level}
            </option>
          ))}
        </select>
        {errors.education && (
          <p className="text-red-500 text-sm mt-1">{errors.education.message}</p>
        )}
      </div>

      <div>
        <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
          Years of Experience
        </label>
        <input
          {...register('experience', { valueAsNumber: true })}
          type="number"
          min="0"
          max="50"
          className="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter years of experience"
        />
        {errors.experience && (
          <p className="text-red-500 text-sm mt-1">{errors.experience.message}</p>
        )}
      </div>

      <div>
        <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
          Technical Skills
        </label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {skillsList.map((skill) => (
            <label key={skill} className="flex items-center gap-2">
              <input 
                type="checkbox" 
                value={skill} 
                {...register('skills')} 
                className="text-blue-600 focus:ring-blue-500"
              />
              <span className="text-gray-700 dark:text-gray-300 text-sm">{skill}</span>
            </label>
          ))}
        </div>
        {errors.skills && (
          <p className="text-red-500 text-sm mt-1">{errors.skills.message}</p>
        )}
      </div>

      <div>
        <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
          About You
        </label>
        <textarea
          {...register('aboutYou')}
          rows={4}
          className="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          placeholder="Tell us about yourself, your goals, and what makes you unique..."
        />
        {errors.aboutYou && (
          <p className="text-red-500 text-sm mt-1">{errors.aboutYou.message}</p>
        )}
      </div>
    </div>
  )
}