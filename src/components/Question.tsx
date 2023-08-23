import Option from "./Option";
import { useParams } from "react-router-dom";

export default function Question({ questions }: any) {
  return (
    <div>
      {questions.map((question: any, index: number) => {
        return (
          <div key={index}>
            <h1 className="border border-black">{question.question}</h1>
            <Option question={question} />
          </div>
        );
      })}
    </div>
  );
}
