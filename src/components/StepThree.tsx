import type { UseFormRegister, FieldErrors } from "react-hook-form";
import type { FormData } from "../types";

interface StepThreeProps {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
}

const educationLevels = [
  "High School",
  "Bachelor's Degree",
  "Master's Degree",
  "PhD",
  "Diploma",
  "Certificate",
];
const skillsList = [
  "JavaScript",
  "React",
  "Node.js",
  "Python",
  "Java",
  "C++",
  "SQL",
  "MongoDB",
  "AWS",
  "Docker",
  "Git",
  "Figma",
];

export default function StepThree({ register, errors }: StepThreeProps) {
  return (
    <div className="space-y-6">
      <div>
        <label
          htmlFor="address"
          className="block text-sm font-semibold text-gray-700 dark:text-gray-200"
        >
          Address
        </label>
        <textarea
          id="address"
          {...register("address")}
          rows={3}
          className="mt-2 w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-2.5 text-sm text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-colors duration-200 resize-none"
          placeholder="Enter your full address"
        />
        {errors.address && (
          <p className="mt-1 text-xs text-red-500">{errors.address.message}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="city"
          className="block text-sm font-semibold text-gray-700 dark:text-gray-200"
        >
          City
        </label>
        <input
          id="city"
          {...register("city")}
          className="mt-2 w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-2.5 text-sm text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-colors duration-200"
          placeholder="Enter your city"
        />
        {errors.city && (
          <p className="mt-1 text-xs text-red-500">{errors.city.message}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="zipCode"
          className="block text-sm font-semibold text-gray-700 dark:text-gray-200"
        >
          ZIP Code
        </label>
        <input
          id="zipCode"
          {...register("zipCode")}
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          maxLength={6}
          placeholder="Enter 6-digit ZIP code"
          className="mt-2 w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-2.5 text-sm text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-colors duration-200"
        />
        {errors.zipCode && (
          <p className="mt-1 text-xs text-red-500">{errors.zipCode.message}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="education"
          className="block text-sm font-semibold text-gray-700 dark:text-gray-200"
        >
          Education Level
        </label>
        <select
          id="education"
          {...register("education")}
          className="mt-2 w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-2.5 text-sm text-gray-900 dark:text-gray-100 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-colors duration-200"
        >
          <option value="">-- Select Education Level --</option>
          {educationLevels.map((level) => (
            <option key={level} value={level}>
              {level}
            </option>
          ))}
        </select>
        {errors.education && (
          <p className="mt-1 text-xs text-red-500">
            {errors.education.message}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="experience"
          className="block text-sm font-semibold text-gray-700 dark:text-gray-200"
        >
          Years of Experience
        </label>
        <input
          id="experience"
          {...register("experience", { valueAsNumber: true })}
          type="number"
          min="0"
          max="50"
          className="mt-2 w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-2.5 text-sm text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-colors duration-200"
          placeholder="Enter years of experience"
        />
        {errors.experience && (
          <p className="mt-1 text-xs text-red-500">
            {errors.experience.message}
          </p>
        )}
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200">
          Technical Skills
        </label>
        <div className="mt-2 grid grid-cols-2 gap-3">
          {skillsList.map((skill) => (
            <label key={skill} className="flex items-center gap-2">
              <input
                type="checkbox"
                value={skill}
                {...register("skills")}
                className="h-4 w-4 text-blue-600 border-gray-300 dark:border-gray-600 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700 dark:text-gray-300">
                {skill}
              </span>
            </label>
          ))}
        </div>
        {errors.skills && (
          <p className="mt-1 text-xs text-red-500">{errors.skills.message}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="aboutYou"
          className="block text-sm font-semibold text-gray-700 dark:text-gray-200"
        >
          About You
        </label>
        <textarea
          id="aboutYou"
          {...register("aboutYou")}
          rows={4}
          className="mt-2 w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-2.5 text-sm text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-colors duration-200 resize-none"
          placeholder="Tell us about yourself, your goals, and what makes you unique..."
        />
        {errors.aboutYou && (
          <p className="mt-1 text-xs text-red-500">{errors.aboutYou.message}</p>
        )}
      </div>
    </div>
  );
}
