export default function Button({
  fetchQuestions,
  topicId,
  difficulty,
  Children,
  imageUrl,
}: any) {
  return (
    <div>
      <div className="flex flex-col items-center">
        <div
          onClick={() => fetchQuestions(topicId, difficulty)}
          className="rounded-full w-[60px] h-[60px] border mb-2 border-blue-600"
          style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <button
          onClick={() => fetchQuestions(topicId, difficulty)}
          className=" text-black py-2 px-4 rounded"
        >
          {Children}
        </button>
      </div>
    </div>
  );
}
