import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import StepThree from "./components/StepThree";
import Success from "./components/Success";
import ThemeToggle from "./components/ThemeToggle";
import { formSchema, type FormData } from "./types";

export default function App() {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<FormData | null>(null);

  const {
    register,
    handleSubmit,
    trigger,
    reset,
    clearErrors,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onTouched",
    defaultValues: {
      name: "",
      email: "",
      gender: undefined,
      hobbies: [],
      country: "",
      age: undefined,
      phone: "",
      profession: "",
      address: "",
      city: "",
      zipCode: "",
      education: "",
      experience: undefined,
      skills: [],
      aboutYou: "",
    },
  });

  const getStepFields = (currentStep: number): Array<keyof FormData> => {
    switch (currentStep) {
      case 1:
        return ["name", "email"];
      case 2:
        return ["gender", "age", "phone", "profession", "hobbies", "country"];
      case 3:
        return [
          "address",
          "city",
          "zipCode",
          "education",
          "experience",
          "skills",
          "aboutYou",
        ];
      default:
        return [];
    }
  };

  const onNext = async () => {
    const fieldsToValidate = getStepFields(step);
    const valid = await trigger(fieldsToValidate);

    if (valid) {
      const nextStep = step + 1;
      const nextFields = getStepFields(nextStep);

      clearErrors(nextFields);

      setTimeout(() => setStep(nextStep), 0);
    }
  };

  const onPrev = () => {
    setStep((prev) => prev - 1);
  };

  const onSubmit = (data: FormData) => {
    console.log("Form Submitted:", data);
    setSubmittedData(data);
    setIsSubmitted(true);
  };

  const onStartOver = () => {
    setIsSubmitted(false);
    setSubmittedData(null);
    setStep(1);
    reset();
  };

  const getStepTitle = (currentStep: number) => {
    switch (currentStep) {
      case 1:
        return "Basic Information";
      case 2:
        return "Personal Details";
      case 3:
        return "Additional Information";
      default:
        return "";
    }
  };

  if (isSubmitted && submittedData) {
    return (
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6 flex items-center justify-center transition-colors">
        <ThemeToggle />
        <div className="w-full max-w-4xl bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg transition-colors">
          <Success formData={submittedData} onStartOver={onStartOver} />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6 flex items-center justify-center transition-colors">
      <ThemeToggle />

      <div className="w-full max-w-2xl bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg transition-colors">
        <div className="mb-6">
          <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100">
            Multi-Step Registration Form
          </h2>

          <div className="flex items-center space-x-2 mb-4">
            {[1, 2, 3].map((stepNumber) => (
              <div key={stepNumber} className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    stepNumber <= step
                      ? "bg-blue-600 text-white"
                      : "bg-gray-300 dark:bg-gray-600 text-gray-600 dark:text-gray-400"
                  }`}
                >
                  {stepNumber}
                </div>
                {stepNumber < 3 && (
                  <div
                    className={`w-16 h-1 mx-2 ${
                      stepNumber < step
                        ? "bg-blue-600"
                        : "bg-gray-300 dark:bg-gray-600"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300">
            Step {step}: {getStepTitle(step)}
          </h3>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="min-h-[400px]">
            {step === 1 && <StepOne register={register} errors={errors} />}
            {step === 2 && <StepTwo register={register} errors={errors} />}
            {step === 3 && <StepThree register={register} errors={errors} />}
          </div>

          <div className="flex justify-between pt-6">
            <button
              type="button"
              onClick={onPrev}
              disabled={step === 1}
              className={`px-6 py-2 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                step === 1
                  ? "bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed"
                  : "bg-gray-500 hover:bg-gray-600 text-white"
              }`}
            >
              Previous
            </button>

            {step < 3 ? (
              <button
                type="button"
                onClick={onNext}
                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
