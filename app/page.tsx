import Link from "next/link";

const topics = [
  { id: "important_days_and_dates", name: "Important Days" },
  { id: "Train_Manager", name: "Train Manager" },
  { id: "RAJBHASA", name: "RAJBHASA" },
]

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <header>
      <h1 className="text-4xl font-extrabold text-center mb-10 text-gray-50">
        Choose A <span className="text-yellow-500">Quiz Topic</span>
        </h1>
      </header>

      <main>
        {/* Quiz Topics Grid */}
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic) => (
            <Link key={topic.id} href={`/quiz/${topic.id}`} passHref>
              <div className="relative block p-8 rounded-xl bg-gradient-to-br from-blue-100 to-blue-300 shadow-lg hover:shadow-xl transition-transform hover:-translate-y-1 duration-300 cursor-pointer">
                <h2 className="text-xl font-bold text-gray-900 text-center">
                  {topic.name}
                </h2>
              </div>
            </Link>
          ))}
        </div>
        {/* About Topics Section */}
        <section className="mt-12 text-center">
          <h2 className="text-2xl font-semibold text-blue-500 mb-4">
            About These Topics
          </h2>
          <p className="text-gray-50 leading-relaxed px-4">
            Test your knowledge with our quizzes! Whether you want to{" "}
            <strong className="text-yellow-500">remember important days</strong>,{" "}
            <strong className="text-yellow-500">Test Your Knowledge: Railway Operations Rules</strong>, or{" "}
            <strong className="text-yellow-500">learn more about Rajbhasha</strong>, we’ve got you covered.
            Choose a topic and challenge yourself today!
          </p>
        </section>

                {/* Mock Test Section */}
        <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-xl p-8 mt-12 shadow-lg">
          <h2 className="text-3xl font-bold text-blue-400 mb-4">
            What is a Mock Test?
          </h2>
          <p className="text-lg leading-relaxed text-gray-300">
            A <strong className="text-yellow-400">Mock Test</strong> is the ultimate way to{" "}
            <strong className="text-yellow-400">prepare like a pro!</strong> 🚀 It simulates real exam conditions,  
            helping you build confidence, improve speed, and test your{" "}
            <strong className="text-yellow-400">accuracy</strong> before the actual exam.
          </p>
          
          <div className="mt-6 space-y-3 text-gray-300">
            <p>✅ <strong className="text-yellow-400">Real Exam Simulation</strong> – Practice just like the real test.</p>
            <p>✅ <strong className="text-yellow-400">Time Management</strong> – Improve your speed & efficiency.</p>
            <p>✅ <strong className="text-yellow-400">Detailed Explanations</strong> – Learn from mistakes & track progress.</p>
            <p>✅ <strong className="text-yellow-400">Boost Confidence</strong> – Feel ready for the real challenge!</p>
          </div>

          <p className="mt-6 font-semibold text-blue-400">
            🚀 Ready to challenge yourself? Start your <strong className="text-yellow-400">Mock Test Now!</strong>
          </p>
        </section>
      </main>
    </div>
  );
}


