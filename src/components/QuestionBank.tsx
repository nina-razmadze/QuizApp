import axios from "axios";
import { useEffect, useState } from "react";
import Option from "./Option";
import Question from "./Question";
import Button from "./Button";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import Search from "./Search";
import Content from "./Content";
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
    <div className="w-[100%] ml-[12%]  justify-center">
      <h1 className="text-[35px] pt-[20px]">What will you teach today?</h1>
      <div className="ml-[15%]">
        <Search />
      </div>
      <div className="grid grid-cols-8 gap-4 pb-[30px] pr-[15px] ">
        {/* <Link to="/20/medium"> */}
        {/* Use the correct route */}
        <Button
          fetchQuestions={fetchQuestions}
          difficulty="medium"
          topicId={20}
          Children="Mythology"
        >
          Mythology
        </Button>
        {/* </Link> */}
        <Button
          fetchQuestions={fetchQuestions}
          difficulty="medium"
          topicId={22}
          Children="Geography"
        ></Button>
        <Button
          fetchQuestions={fetchQuestions}
          difficulty="medium"
          topicId={23}
          Children="History"
        ></Button>
        <Button
          fetchQuestions={fetchQuestions}
          difficulty="medium"
          topicId={10}
          Children="Books"
        ></Button>
        <Button
          fetchQuestions={fetchQuestions}
          difficulty="medium"
          topicId={18}
          Children="Computers"
          imageUrl="https://cf.quizizz.com/image/subject-computers.png"
        ></Button>

        <Button
          fetchQuestions={fetchQuestions}
          difficulty="medium"
          topicId={12}
          Children="Music"
          imageUrl="https://cf.quizizz.com/image/subject-arts-music.png"
        ></Button>

        <Button
          fetchQuestions={fetchQuestions}
          difficulty="medium"
          topicId={24}
          Children="Politics"
        ></Button>
        <Button
          fetchQuestions={fetchQuestions}
          difficulty="medium"
          topicId={21}
          Children="Sport"
          imageUrl="https://cf.quizizz.com/image/subject-physical-ed.png"
        ></Button>
      </div>

      <div>
        <Sidebar />
        <Question questions={questions} />
        <Content />
      </div>
    </div>
  );
}
