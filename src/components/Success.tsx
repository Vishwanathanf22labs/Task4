import type { FormData } from '../types'

interface SuccessProps {
  formData: FormData
  onStartOver: () => void
}

export default function Success({ formData, onStartOver }: SuccessProps) {
  return (
    <div className="text-center space-y-6">
      <div className="mb-8">
        <div className="w-20 h-20 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-10 h-10 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-2">
          Form Submitted Successfully!
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Thank you for providing your information. Here's a summary of what you submitted:
        </p>
      </div>

      <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 text-left space-y-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">
          Your Information Summary
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Basic Information</h4>
            <div className="space-y-1 text-sm">
              <p><span className="font-medium">Name:</span> {formData.name}</p>
              <p><span className="font-medium">Email:</span> {formData.email}</p>
              <p><span className="font-medium">Gender:</span> {formData.gender}</p>
              <p><span className="font-medium">Age:</span> {formData.age} years</p>
              <p><span className="font-medium">Phone:</span> {formData.phone}</p>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Professional Details</h4>
            <div className="space-y-1 text-sm">
              <p><span className="font-medium">Profession:</span> {formData.profession}</p>
              <p><span className="font-medium">Experience:</span> {formData.experience} years</p>
              <p><span className="font-medium">Education:</span> {formData.education}</p>
              <p><span className="font-medium">Country:</span> {formData.country}</p>
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Address</h4>
          <div className="text-sm">
            <p>{formData.address}</p>
            <p>{formData.city}, {formData.zipCode}</p>
          </div>
        </div>

        <div>
          <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Hobbies</h4>
          <div className="flex flex-wrap gap-2">
            {formData.hobbies.map((hobby, index) => (
              <span key={index} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs">
                {hobby}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Technical Skills</h4>
          <div className="flex flex-wrap gap-2">
            {formData.skills.map((skill, index) => (
              <span key={index} className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">About You</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-800 p-3 rounded border">
            {formData.aboutYou}
          </p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          onClick={onStartOver}
          className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Fill Another Form
        </button>
      </div>
    </div>
  )
}