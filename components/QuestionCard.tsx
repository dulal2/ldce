import { Button } from "@/components/ui/button"
import { CheckCircle, XCircle } from "lucide-react"

interface QuestionCardProps {
  question: string
  options: string[]
  onAnswer: (selectedOption: number) => void
  showFeedback: boolean
  selectedOption: number | null
  correctAnswer: number
}

export default function QuestionCard({
  question,
  options,
  onAnswer,
  showFeedback,
  selectedOption,
  correctAnswer,
}: QuestionCardProps) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">{question}</h2>
      <div className="grid gap-2" role="radiogroup" aria-labelledby="question-label">
        {options.map((option, index) => (
          <Button
            key={index}
            onClick={() => onAnswer(index)}
            variant="outline"
            className={`justify-start text-left ${
              showFeedback && index === correctAnswer
                ? "bg-green-100 text-green-800"
                : showFeedback && index === selectedOption
                  ? "bg-red-100 text-red-800"
                  : ""
            }`}
            disabled={showFeedback}
            role="radio"
            aria-checked={selectedOption === index}
          >
            {option}
            {showFeedback && index === correctAnswer && (
              <CheckCircle className="inline-block ml-2 h-5 w-5 text-green-600" aria-label="Correct answer" />
            )}
            {showFeedback && index === selectedOption && index !== correctAnswer && (
              <XCircle className="inline-block ml-2 h-5 w-5 text-red-600" aria-label="Incorrect answer" />
            )}
          </Button>
        ))}
      </div>
    </div>
  )
}

