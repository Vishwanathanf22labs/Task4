import type { UseFormRegister, FieldErrors } from "react-hook-form";
import type { FormData } from "../types";

interface StepTwoProps {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
}

const countries = ["India", "USA", "Germany", "Canada", "Australia", "UK"];
const hobbiesList = [
  "Reading",
  "Coding",
  "Gaming",
  "Sports",
  "Music",
  "Travel",
];
const professions = [
  "Software Engineer",
  "Designer",
  "Teacher",
  "Doctor",
  "Student",
  "Other",
];

const inputClass =
  "mt-2 w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-2.5 text-sm text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-colors duration-200";

export default function StepTwo({ register, errors }: StepTwoProps) {
  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200">
          Gender
        </label>
        <div className="mt-2 flex gap-6">
          {["male", "female"].map((value) => (
            <label key={value} className="flex items-center gap-2">
              <input
                {...register("gender")}
                type="radio"
                value={value}
                className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700 dark:text-gray-300 capitalize">
                {value}
              </span>
            </label>
          ))}
        </div>
        {errors.gender && (
          <p className="mt-1 text-xs text-red-500">{errors.gender.message}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="age"
          className="block text-sm font-semibold text-gray-700 dark:text-gray-200"
        >
          Age
        </label>
        <input
          id="age"
          type="number"
          {...register("age", { valueAsNumber: true })}
          min="18"
          max="100"
          className={inputClass}
          placeholder="Enter your age"
        />
        {errors.age && (
          <p className="mt-1 text-xs text-red-500">{errors.age.message}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-semibold text-gray-700 dark:text-gray-200"
        >
          Phone Number
        </label>
        <input
          id="phone"
          type="tel"
          {...register("phone")}
          placeholder="+91 1234567890"
          pattern="\+91\s[0-9]{10}"
          inputMode="tel"
          maxLength={14}
          className={inputClass}
        />
        {errors.phone && (
          <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="profession"
          className="block text-sm font-semibold text-gray-700 dark:text-gray-200"
        >
          Profession
        </label>
        <select
          id="profession"
          {...register("profession")}
          className={inputClass}
        >
          <option value="">-- Select Profession --</option>
          {professions.map((profession) => (
            <option key={profession} value={profession}>
              {profession}
            </option>
          ))}
        </select>
        {errors.profession && (
          <p className="mt-1 text-xs text-red-500">
            {errors.profession.message}
          </p>
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
                {...register("hobbies")}
                className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700 dark:text-gray-300">
                {hobby}
              </span>
            </label>
          ))}
        </div>
        {errors.hobbies && (
          <p className="mt-1 text-xs text-red-500">{errors.hobbies.message}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="country"
          className="block text-sm font-semibold text-gray-700 dark:text-gray-200"
        >
          Country
        </label>
        <select id="country" {...register("country")} className={inputClass}>
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
  );
}
