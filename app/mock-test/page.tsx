"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Clock, AlertTriangle } from "lucide-react"
import QuestionCard from "@/components/QuestionCard"
import MockTestQuestionCard from "@/components/MockTestQuestionCard"

const mockQuestions = [
  {
    question: "What is the primary responsibility of a Train Manager?",
    options: [
      "Driving the train",
      "Managing passenger safety and comfort",
      "Maintaining the train engine",
      "Selling tickets on board",
    ],
    correctAnswer: 1,
  },
  {//in this question add a image above question also clear where image store 
    question: "Which document is essential for a Train Manager to check before departure?",
    options: ["Passenger manifest", "Train formation report", "Catering menu", "Weather forecast"],
    correctAnswer: 1,
  },
  {
    question: "How many minutes before departure should a Train Manager report for duty?",
    options: ["15 minutes", "30 minutes", "45 minutes", "60 minutes"],
    correctAnswer: 2,
  },
  {
    question: "What is the maximum speed limit for freight trains on a broad gauge track?",
    options: ["60 km/h", "75 km/h", "100 km/h", "120 km/h"],
    correctAnswer: 2,
  },
  {
    question: "Which form is used to issue a caution order?",
    image: "/images/pic1.jpg", 
    options: ["T/409", "T/369", "T/509", "T/409A"],
    correctAnswer: 0,
  },
]

export default function MockTestPage() {
  const router = useRouter()
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [userAnswers, setUserAnswers] = useState<number[]>(new Array(mockQuestions.length).fill(-1))
  const [timeLeft, setTimeLeft] = useState(300) // 5 minutes in seconds
  const [showFeedback, setShowFeedback] = useState(false)
  const [testSubmitted, setTestSubmitted] = useState(false)

  useEffect(() => {
    if (timeLeft > 0 && !testSubmitted) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1)
      }, 1000)
      return () => clearInterval(timer)
    } else if (timeLeft === 0 && !testSubmitted) {
      handleSubmit()
    }
  }, [timeLeft, testSubmitted])

  const handleAnswer = (selected: number) => {
    const newAnswers = [...userAnswers]
    newAnswers[currentQuestion] = selected
    setUserAnswers(newAnswers)
  }

  const handleNext = () => {
    if (currentQuestion < mockQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const handleSubmit = () => {
    setTestSubmitted(true)
    setShowFeedback(true)
    
  }

  const calculateScore = () => {
    return userAnswers.reduce((score, answer, index) => {
      return score + (answer === mockQuestions[index].correctAnswer ? 1 : 0)
    }, 0)
  }

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`
  }

  const questionsAttempted = userAnswers.filter((answer) => answer !== -1).length

  return (
    <div className="max-w-4xl mx-auto p-4">
      <Card className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Mock Test</h1>
          <div className="flex items-center space-x-2">
            <Clock className="w-5 h-5" />
            <span className={`font-mono ${timeLeft < 60 ? "text-red-500" : ""}`}>{formatTime(timeLeft)}</span>
          </div>
        </div>

        {timeLeft < 60 && !testSubmitted && (
          <Alert variant="destructive" className="mb-4">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Warning</AlertTitle>
            <AlertDescription>Less than 1 minute remaining!</AlertDescription>
          </Alert>
        )}

        <div className="mb-4">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>
              Progress: {questionsAttempted}/{mockQuestions.length} questions attempted
            </span>
            <span>Score: {testSubmitted ? `${calculateScore()}/${mockQuestions.length}` : "---"}</span>
          </div>
          <Progress value={(questionsAttempted / mockQuestions.length) * 100} className="h-2" />
        </div>
       
        <MockTestQuestionCard
          question={mockQuestions[currentQuestion].question}
          options={mockQuestions[currentQuestion].options}
          onAnswer={handleAnswer}
          showFeedback={showFeedback}
          selectedOption={userAnswers[currentQuestion]}
          correctAnswer={mockQuestions[currentQuestion].correctAnswer}
          image={mockQuestions[currentQuestion].image}
           
        />
        

        <div className="flex justify-between mt-6">
          <Button onClick={handlePrevious} disabled={currentQuestion === 0}>
            Previous
          </Button>
          <div className="flex space-x-2">
            {!testSubmitted && (
              <Button variant="destructive" onClick={handleSubmit}>
                Submit Test
              </Button>
            )}
            {currentQuestion < mockQuestions.length - 1 ? (
              <Button onClick={handleNext}>Next</Button>
            ) : (
              testSubmitted && <Button onClick={() => router.push("/")}>Finish</Button>
            )}
          </div>
        </div>
      </Card>
    </div>
  )
}

