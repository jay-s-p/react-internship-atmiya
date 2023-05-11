function Result({ selectedOptions, setShowResult, questions }) {

  const getResult = () => {
    console.log(selectedOptions);
    return Object.values(questions).filter((que, i) => {
      console.log("ans : " + que.answer);
      console.log("selected: " + selectedOptions[i + 1]);
      if (que.options[selectedOptions[i + 1]] === que.answer)
        return true
    })
  }

  const result = getResult();

  return (
    <>
      <div className="grid mt-10">
        <h1 className="text-8xl font-serif m-auto">Result</h1>
      </div>
      <div className="grid my-10 mt-20">
        <div className="m-auto bg-base-content rounded-full text-base-200 w-52 h-52 grid text-6xl font-serif"><span className="m-auto">{(questions.length / result.length) * 10}%</span></div>
      </div>
      <div className="flex flex-col justify-center text-2xl font-serif">
        <div className="w-fit flex m-auto">
          <div>Total questions</div><div>&nbsp; : {questions.length * 10}</div>
        </div>
        <div className="w-fit flex m-auto mt-5">
          <div>Correct answers</div><div>&nbsp; : {result.length * 10}</div>
        </div>
      </div>
    </>
  );
}

export default Result;
