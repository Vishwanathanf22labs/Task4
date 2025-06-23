import type { UseFormRegister, FieldErrors } from "react-hook-form";
import type { FormData } from "../types";

interface StepOneProps {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
}

export default function StepOne({ register, errors }: StepOneProps) {
  return (
    <div className="space-y-6">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-semibold text-gray-700 dark:text-gray-200"
        >
          Full Name
        </label>
        <input
          id="name"
          {...register("name")}
          className="mt-2 w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-2.5 text-sm text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-colors duration-200"
          placeholder="Enter your full name"
        />
        {errors.name && (
          <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-semibold text-gray-700 dark:text-gray-200"
        >
          Email Address
        </label>
        <input
          id="email"
          type="email"
          {...register("email")}
          className="mt-2 w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-2.5 text-sm text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-colors duration-200"
          placeholder="Enter your email address"
        />
        {errors.email && (
          <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
        )}
      </div>
    </div>
  );
}
