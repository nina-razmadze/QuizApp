import axios from "axios";
import { useEffect, useState } from "react";
import Option from "./Option";
import Question from "./Question";

export default function QuestionBank() {
  const [questions, setQuestions] = useState([]);

  const fetchQuestions = async (topicId: number, difficulty: string) => {
    try {
      const resp = await axios.get(`https://opentdb.com/api.php`, {
        params: {
          amount: 20,
          category: topicId,
          difficulty: difficulty,
          type: "multiple",
        },
      });
      console.log(resp.data);
      const decodedQuestions = resp.data.results.map((question: any) => ({
        ...question,
        question: decodeHTML(question.question),
      }));
      setQuestions(decodedQuestions);
    } catch (error) {
      console.log(error);
    }
  };
  const decodeHTML = (text: any) => {
    return text.replace(/&quot;/g, '"').replace(/&#039;/g, "'");
  };
  return (
    <div>
      <button onClick={() => fetchQuestions(20, "medium")}>Mythology</button>
      <button onClick={() => fetchQuestions(22, "medium")}>Geography</button>
      <button onClick={() => fetchQuestions(23, "medium")}>History</button>
      <button onClick={() => fetchQuestions(10, "easy")}>Books</button>
      <button onClick={() => fetchQuestions(18, "medium")}>
        science:Computers
      </button>

      <div>
        <Question questions={questions} />
      </div>
    </div>
  );
}
