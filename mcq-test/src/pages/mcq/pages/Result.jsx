import { useEffect } from "react";

function Result({ selectedOptions, setShowResult, setSelectedOptions, questions }) {

  const getResult = () => {
    return Object.values(questions).reduce((acc, que) => {
      if (que.options[selectedOptions.get(que.id)] === que.answer) {
        acc.push(que.id);
      }
      return acc;
    }, []);
  }
  
  const handleRestart = () => {
    setShowResult(0)
    setSelectedOptions(new Map())
  }

  const result = getResult()

  return (
    <>
      <div className="h-[93vh] w-screen grid">

        <div className="grid">
          <h1 className="text-8xl font-serif m-auto">Result</h1>
        </div>
        <div className="grid ">
          <div className="m-auto bg-base-content rounded-full text-base-200 w-52 h-52 grid text-6xl font-serif">
            <span className="m-auto">{Math.floor((result.length / questions.length) * 100)}%</span>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center text-2xl font-serif">
          <div className="w-fit flex m-auto">
            <div>Total questions</div><div>&nbsp; : {questions.length}</div>
          </div>
          <div className="w-fit flex m-auto mt-5">
            <div>Correct answers</div><div>&nbsp; : {result.length}</div>
          </div>
        </div>

        <div className="w-full grid mt-auto mb-10 px-10">
          <button autoFocus={true} className="btn w-full md:w-[10em] mx-auto btn-info font-sans text-xl btn-lg" onClick={handleRestart}>Restart</button>
        </div>
      </div>
    </>
  );
}

export default Result;
