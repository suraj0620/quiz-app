import { useState } from "react";

const questions = [
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    answer: "Mars",
  },
  {
    question: "What is the largest ocean on Earth?",
    options: ["Indian Ocean", "Arctic Ocean", "Atlantic Ocean", "Pacific Ocean"],
    answer: "Pacific Ocean",
  },
  {
    question: "Which gas do plants absorb from the air?",
    options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    answer: "Carbon Dioxide",
  },
];

export default function App() {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const current = questions[index];

  const handleAnswer = (selected) => {
    if (selected === current.answer) setScore(score + 1);

    if (index + 1 < questions.length) {
      setIndex(index + 1);
    } else {
      setFinished(true);
    }
  };

  const restartQuiz = () => {
    setIndex(0);
    setScore(0);
    setFinished(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md">
        
        {!finished ? (
          <>
            <h1 className="text-2xl font-bold mb-4 text-center">
              Simple Quiz App
            </h1>
            <p className="text-lg font-medium mb-4">
              Q{index + 1}. {current.question}
            </p>

            <div className="space-y-3">
              {current.options.map((opt) => (
                <button
                  key={opt}
                  className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                  onClick={() => handleAnswer(opt)}
                >
                  {opt}
                </button>
              ))}
            </div>
          </>
        ) : (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Quiz Finished 🎉</h2>
            <p className="text-xl mb-4">
              Your Score: <span className="font-bold">{score}</span> /
              {questions.length}
            </p>

            <button
              onClick={restartQuiz}
              className="py-2 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
            >
              Restart Quiz
            </button>
          </div>
        )}
      </div>
    </div>
  );
}