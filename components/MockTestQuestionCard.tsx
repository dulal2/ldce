import { Button } from "@/components/ui/button";
import Image from "next/image";

interface MockTestQuestionCardProps {
  question: string;
  image?: string;
  options: string[];
  onAnswer: (selected: number) => void;
  showFeedback: boolean;
  selectedOption: number;
  correctAnswer: number;
}

export default function MockTestQuestionCard({
  question,
  image,
  options,
  onAnswer,
  showFeedback,
  selectedOption,
  correctAnswer,
}: MockTestQuestionCardProps) {
  return (
    <div className="space-y-4">
      {/* Display image if available */}
      {image && (
        <div className="w-full flex justify-center">
          <Image
            src={image}
            alt="Question Illustration"
            width={166} // Set appropriate width
            height={95} // Set appropriate height
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 166px"
            className="w-full h-auto rounded-lg border border-gray-200"
          />
        </div>
      )}

      <h2 className="text-xl font-semibold">{question}</h2>

      <div className="space-y-2">
        {options.map((option, index) => {
          let optionStyle = "bg-white hover:bg-gray-100"; // Default style

          // Apply styles based on feedback or selection
          if (showFeedback) {
            if (index === correctAnswer) {
              optionStyle = "bg-green-100"; // Correct answer
            } else if (index === selectedOption && selectedOption !== correctAnswer) {
              optionStyle = "bg-red-100"; // Incorrect answer
            }
          } else if (index === selectedOption) {
            optionStyle = "bg-blue-100"; // Selected option
          }

          return (
            <Button
              key={index}
              variant="outline"
              className={`w-full text-left justify-start ${optionStyle}`}
              onClick={() => onAnswer(index)}
            >
              {option}
            </Button>
          );
        })}
      </div>
    </div>
  );
}
