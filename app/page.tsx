import Link from "next/link"

const topics = [
  { id: "important_days_and_dates", name: "Important Days & Dates" },
  { id: "Train_Manager", name: "Train Manager" },
  { id: "RAJBHASA", name: "RAJBHASA" },
]

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">Choose a Quiz Topic</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {topics.map((topic) => (
          <Link
            key={topic.id}
            href={`/quiz/${topic.id}`}
            className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition duration-300"
          >
            <h2 className="text-xl font-semibold text-center">{topic.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  )
}
