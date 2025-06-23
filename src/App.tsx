import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import StepOne from './components/StepOne'
import StepTwo from './components/StepTwo'
import ThemeToggle from './components/ThemeToggle'
import { formSchema, type FormData } from './types'

export default function App() {
  const [step, setStep] = useState(1)
  const {
    register,
    handleSubmit,
    trigger,
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
    }
  })

  const onNext = async () => {
    const fieldsToValidate: Array<keyof FormData> = step === 1 
      ? ['name', 'email'] 
      : ['gender', 'hobbies', 'country', 'age', 'phone', 'profession']
    
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
    alert('Form submitted successfully!\n\n' + JSON.stringify(data, null, 2))
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6 flex items-center justify-center transition-colors">
      <div className="w-full max-w-2xl bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg transition-colors">
        <ThemeToggle />
        
        <div className="mb-6">
          <h2 className="text-3xl font-bold mb-2 text-gray-800 dark:text-gray-100">
            Multi-Step Form
          </h2>
          <div className="flex items-center space-x-2 mb-4">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
              step >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-600'
            }`}>
              1
            </div>
            <div className={`flex-1 h-1 ${step >= 2 ? 'bg-blue-600' : 'bg-gray-300'}`}></div>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
              step >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-600'
            }`}>
              2
            </div>
          </div>
          <p className="text-gray-600 dark:text-gray-400">
            Step {step} of 2: {step === 1 ? 'Basic Information' : 'Additional Details'}
          </p>
        </div>

        <div className="space-y-6">
          {step === 1 && <StepOne register={register} errors={errors} />}
          {step === 2 && <StepTwo register={register} errors={errors} />}

          <div className="flex justify-between pt-6 border-t border-gray-200 dark:border-gray-700">
            {step > 1 && (
              <button
                type="button"
                onClick={onPrev}
                className="px-6 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500"
              >
                ← Previous
              </button>
            )}
            
            <div className="ml-auto">
              {step < 2 ? (
                <button
                  type="button"
                  onClick={onNext}
                  className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Next →
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleSubmit(onSubmit)}
                  className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  Submit Form
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}