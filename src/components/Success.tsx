import type { FormData } from "../types";

interface SuccessProps {
  formData: FormData;
  onStartOver: () => void;
}

export default function Success({ formData, onStartOver }: SuccessProps) {
  return (
    <div className="text-center space-y-8">
      <div>
        <div className="mx-auto w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
          <svg
            className="w-8 h-8 text-green-600 dark:text-green-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h2 className="mt-4 text-2xl font-bold text-gray-800 dark:text-gray-100">
          Form Submitted Successfully!
        </h2>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Thank you for providing your information. Here's a summary of your
          submission:
        </p>
      </div>

      <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-left space-y-6">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
          Your Information Summary
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-3">
              Basic Information
            </h4>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <p>
                <span className="font-medium">Name:</span> {formData.name}
              </p>
              <p>
                <span className="font-medium">Email:</span> {formData.email}
              </p>
              <p>
                <span className="font-medium">Gender:</span> {formData.gender}
              </p>
              <p>
                <span className="font-medium">Age:</span> {formData.age} years
              </p>
              <p>
                <span className="font-medium">Phone:</span> {formData.phone}
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-3">
              Professional Details
            </h4>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <p>
                <span className="font-medium">Profession:</span>{" "}
                {formData.profession}
              </p>
              <p>
                <span className="font-medium">Experience:</span>{" "}
                {formData.experience} years
              </p>
              <p>
                <span className="font-medium">Education:</span>{" "}
                {formData.education}
              </p>
              <p>
                <span className="font-medium">Country:</span> {formData.country}
              </p>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-3">
            Address
          </h4>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            <p>{formData.address}</p>
            <p>
              {formData.city}, {formData.zipCode}
            </p>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-3">
            Hobbies
          </h4>
          <div className="flex flex-wrap gap-2">
            {formData.hobbies.map((hobby, index) => (
              <span
                key={index}
                className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2.5 py-1 rounded text-xs font-medium"
              >
                {hobby}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-3">
            Technical Skills
          </h4>
          <div className="flex flex-wrap gap-2">
            {formData.skills.map((skill, index) => (
              <span
                key={index}
                className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2.5 py-1 rounded text-xs font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-3">
            About You
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            {formData.aboutYou}
          </p>
        </div>
      </div>

      <button
        onClick={onStartOver}
        className="px-6 py-2.5 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-colors duration-200"
      >
        Fill Another Form
      </button>
    </div>
  );
}
