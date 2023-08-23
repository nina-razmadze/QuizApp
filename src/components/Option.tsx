import { useState, useEffect } from "react";

export default function Option({ question }: any) {
  const [shuffledOptions, setShuffledOptions] = useState<string[]>([]);
  const [correctIndex, setCorrectIndex] = useState<number>(-1);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(
    null
  );

  useEffect(() => {
    shuffleOptions();
  }, [question]);

  const shuffleArray = (array: any[]) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  const shuffleOptions = () => {
    const allOptions = [question.correct_answer, ...question.incorrect_answers];
    const shuffled = shuffleArray(allOptions);
    setShuffledOptions(shuffled);

    const correctAnswerIndex = shuffled.findIndex(
      (option) => option === question.correct_answer
    );
    setCorrectIndex(correctAnswerIndex);
    setSelectedOptionIndex(null);
  };

  const handleOptionClick = (index: number) => {
    setSelectedOptionIndex(index);
  };

  return (
    <div>
      {shuffledOptions.map((option, index) => (
        <p
          key={index}
          className={selectedOptionIndex === index ? "selected" : ""}
          onClick={() => handleOptionClick(index)}
        >
          <h1
            className={
              selectedOptionIndex === index
                ? index === correctIndex
                  ? "correct"
                  : "incorrect"
                : ""
            }
          >
            {selectedOptionIndex === index
              ? index === correctIndex
                ? "Correct"
                : "Incorrect"
              : ""}
          </h1>
          {option}
        </p>
      ))}
    </div>
  );
}
