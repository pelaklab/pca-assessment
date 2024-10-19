import { useState } from 'react';

const questions = [
  "Do you feel your vision has worsened?",
  "Do you have any problems seeing objects directly in front of you? (i.e., trouble finding things that were directly in your sight, but you did not see)?",
  "Do you have any trouble with depth perception (i.e., perceiving distances or seeing well in three dimensions)?",
  "Have you experienced any problems with driving?",
  "Are you having any problems with reading?",
  "When reading, do you find that you need to follow the lines with your finger to stay on the correct line?",
  "Are you having any problems working with numbers or performing calculations?",
  "Are you having any problems mentally calculating a tip at a restaurant?",
  "Are you seeing shadowing in your periphery but then discovering that nothing is there?",
  "Have there been times where you thought something was moving, but it was actually still?",
  "Are you having any difficulty recognizing familiar faces?",
  "Have you found it more difficult to learn new faces compared to a year ago?",
  "Have you experienced any visual hallucinations (i.e., seeing something that is not there)?",
  "Have you had any trouble recognizing a tool, utensil, or device when you see it?",
  "Are you having any problems knowing left from right?",
];

const Questionnaire: React.FC  = () => {
  const [answers, setAnswers] = useState<number[]>(Array(questions.length).fill(null));
  const [score, setScore] = useState<number | null>(null); // To store the total score after submission

  const handleAnswerChange = (index: number, value: number) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = value;
    setAnswers(updatedAnswers);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Calculate the total score
    const totalScore = answers.reduce((acc, curr) => acc + (curr !== null ? curr : 0), 0);
    setScore(totalScore);
  };

  const scoringSystem = [
    { score: 0, label: 'Never' },
    { score: 1, label: 'Almost Never' },
    { score: 2, label: 'Sometimes' },
    { score: 3, label: 'Fairly Often' },
    { score: 4, label: 'Very Often' }
  ]

  return (
    <div className="container mx-auto p-6 max-w-3xl bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Colorado Posterior Cortical Questionnaire</h1>

      <form onSubmit={handleSubmit} className="space-y-8">
        {questions.map((question, index) => (
          <fieldset key={index} className="border p-5 rounded-lg shadow-sm">
            <legend id={`question-${index}-label`} className="text-l font-medium mb-3 text-gray-800">
              {index + 1}. {question}
            </legend>
            <div className="grid grid-cols-5 gap-4 mt-3">
              {scoringSystem.map(({ score, label }) => (
                <label key={score} className="flex flex-col items-center text-center">
                  <input
                    type="radio"
                    name={`question-${index}`}
                    value={score}
                    checked={answers[index] === score}
                    onChange={() => handleAnswerChange(index, score)}
                    className="h-6 w-6 text-indigo-600 focus:ring-indigo-500 focus:ring-2 rounded-full border-gray-300"
                    aria-labelledby={`question-${index}-label`}
                  />
                  <span className="mt-2 text-sm font-medium text-gray-700">{label}</span>
                </label>
              ))}
            </div>
          </fieldset>
        ))}

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 px-5 rounded-lg hover:bg-indigo-700 transition font-semibold text-lg"
        >
          Submit
        </button>
      </form>

      {score !== null && (
        <div className="mt-8 p-6 bg-green-100 text-green-800 rounded-lg">
          <h2 className="text-2xl font-semibold">Your Total Score: {score}</h2>
        </div>
      )}
    </div >
  );
};

export { Questionnaire as CpcQuestionnaire }
