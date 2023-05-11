import React, { useEffect, useState } from "react";
import Result from "./Result";
import MCQ from '../components/MCQ'
import { storeData, retrieveData } from '../crud/StoreRetrieveData'

function MCQContainer({ selectedOptions, setSelectedOptions, questions, setShowResult, resetSelectedOptions }) {
  const [showSubmit, setShowSubmit] = useState(false)
  const [showReset, setShowReset] = useState(false)

  const [currentQuestion, setCurrentQuestion] = useState(0)

  const handlePrevious = () => setCurrentQuestion(c => c - 1)
  const handleNext = () => setCurrentQuestion(c => c + 1)

  const KEY_CURRENT_QUESTION = 'current_question'

  let getData = () => {
    const data = retrieveData(KEY_CURRENT_QUESTION)
    console.log(data);
    if (data !== null) {
      return data
    }
    return 0
  }

  // useEffect(()=>{
  //   setCurrentQuestion(getData())
  // },[])


  useEffect(() => {
    (currentQuestion + 1 == questions.length) && setShowSubmit(true)
    console.log("selected option : " + Object.keys(selectedOptions).length);
    storeData(KEY_CURRENT_QUESTION, currentQuestion)
    if (Object.keys(selectedOptions).length !== 0) setShowReset(true)
    else setShowReset(false)
  }, [currentQuestion, selectedOptions])

  return (
    <>
      <div className="h-screen w-screen bg-base-100 grid overflow-auto">
        <div className="container h-full w-full max-h-full max-w-[90rem] m-auto border-0 border-emerald-500 ">
          <h1 className="text-5xl font-bold text-center m-5">MCQ Test</h1>
          <div className="mcq-container p-4">
            <MCQ data={questions[currentQuestion]} selectedOptions={selectedOptions} setSelectedOptions={setSelectedOptions} sr_no={currentQuestion + 1} />
            <div className="button-container mt-5 mx-2 transition-all">
              <div className="flex gap-4 flex-wrap">
                <button
                  className={`btn btn-outline flex-1 md:w-[10rem] md:flex-initial`}
                  disabled={(currentQuestion - 1 < 0)}
                  onClick={handlePrevious}>Previous</button>
                <button
                  className="btn btn-outline flex-1 md:w-[10rem] md:flex-initial"
                  disabled={(currentQuestion + 1 == questions.length)}
                  onClick={handleNext}>Next</button>
                <div className="ml-auto w-full md:w-fit flex flex-wrap gap-3">
                  {
                    (showReset)
                    &&
                    <button className="btn btn-info btn-outline  w-full md:w-[10rem]" onClick={() => { resetSelectedOptions(); setShowReset(false); setShowSubmit(false) }}>Reset</button>
                  }
                  {
                    (showSubmit)
                    &&
                    <button className="btn btn-success  w-full md:w-[10rem]" onClick={() => { setShowResult(true) }}>Submit</button>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MCQContainer;
