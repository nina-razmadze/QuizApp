import Option from "./Option";

export default function Question({ questions }: any) {
  return (
    <div>
      {questions.map((question: any, index: number) => {
        console.log(question);
        return (
          <div key={index}>
            <h1 className="text-red">{question.question}</h1>
            <Option question={question} />
          </div>
        );
      })}
    </div>
  );
}
