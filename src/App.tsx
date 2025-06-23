import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import StepOne from './components/StepOne'
import StepTwo from './components/StepTwo'
import StepThree from './components/StepThree'
import Success from './components/Success'
import ThemeToggle from './components/ThemeToggle'
import { formSchema, type FormData } from './types'

export default function App() {
  const [step, setStep] = useState(1)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submittedData, setSubmittedData] = useState<FormData | null>(null)

  const {
    register,
    handleSubmit,
    trigger,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
    defaultValues: {
      name: '',
      email: '',
      gender: undefined,
      hobbies: [],
      country: '',
      age: undefined,
      phone: '',
      profession: '',
      address: '',
      city: '',
      zipCode: '',
      education: '',
      experience: undefined,
      skills: [],
      aboutYou: '',
    }
  })

  const getStepFields = (currentStep: number): Array<keyof FormData> => {
    switch (currentStep) {
      case 1:
        return ['name', 'email']
      case 2:
        return ['gender', 'age', 'phone', 'profession', 'hobbies', 'country']
      case 3:
        return ['address', 'city', 'zipCode', 'education', 'experience', 'skills', 'aboutYou']
      default:
        return []
    }
  }

  const onNext = async () => {
    const fieldsToValidate = getStepFields(step)
    const valid = await trigger(fieldsToValidate)
    
    if (valid) {
      setStep(prev => prev + 1)
    }
  }

  const onPrev = () => {
    setStep(prev => prev - 1)
  }

  const onSubmit = (data: FormData) => {
    console.log('Form Submitted:', data)
    setSubmittedData(data)
    setIsSubmitted(true)
  }

  const onStartOver = () => {
    setIsSubmitted(false)
    setSubmittedData(null)
    setStep(1)
    reset()
  }

  const getStepTitle = (currentStep: number) => {
    switch (currentStep) {
      case 1: return 'Basic Information'
      case 2: return 'Personal Details'
      case 3: return 'Additional Information'
      default: return ''
    }
  }

  if (isSubmitted && submittedData) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-6 transition-colors duration-200">
        <ThemeToggle />
        <div className="w-full max-w-4xl bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
          <Success formData={submittedData} onStartOver={onStartOver} />
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-6 transition-colors duration-200">
      <ThemeToggle />
      
      <div className="w-full max-w-2xl bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
            Multi-Step Registration Form
          </h2>
          
          {/* Progress Bar */}
          <div className="flex items-center gap-2 mt-6 mb-4">
            {[1, 2, 3].map((stepNumber) => (
              <div key={stepNumber} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-colors duration-200 ${
                  stepNumber <= step 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400'
                }`}>
                  {stepNumber}
                </div>
                {stepNumber < 3 && (
                  <div className={`w-16 h-1 mx-2 transition-colors duration-200 ${
                    stepNumber < step 
                      ? 'bg-blue-600' 
                      : 'bg-gray-200 dark:bg-gray-700'
                  }`} />
                )}
              </div>
            ))}
          </div>
          
          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200">
            Step {step}: {getStepTitle(step)}
          </h3>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
       
          <div className="min-h-[400px]">
            {step === 1 && <StepOne register={register} errors={errors} />}
            {step === 2 && <StepTwo register={register} errors={errors} />}
            {step === 3 && <StepThree register={register} errors={errors} />}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between pt-6">
            <button
              type="button"
              onClick={onPrev}
              disabled={step === 1}
              className={`px-6 py-2.5 rounded-lg font-semibold text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 ${
                step === 1
                  ? 'bg-gray-200 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed'
                  : 'bg-gray-500 hover:bg-gray-600 text-white dark:text-gray-100'
              }`}
            >
              Previous
            </button>

            {step < 3 ? (
              <button
                type="button"
                onClick={onNext}
                className="px-6 py-2.5 bg-blue-600 text-white rounded-lg font-semibold text-sm hover:bg-blue-700 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-colors duration-200"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                className="px-6 py-2.5 bg-green-600 text-white rounded-lg font-semibold text-sm hover:bg-green-700 focus:ring-2 focus:ring-green-500/20 focus:outline-none transition-colors duration-200"
              >
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}