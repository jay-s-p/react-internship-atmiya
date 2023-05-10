import React, { useState } from "react";
import questions from "../assets/questions.json";
import Result from "./Result";
import MCQ from '../components/MCQ'

function MCQContainer() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const handlePrevious = () => setCurrentQuestion(c => c - 1)
  const handleNext = () => setCurrentQuestion(c => c + 1)
  return (
    <>
      <div className="h-screen w-screen bg-base-100 grid overflow-auto">
        <div className="container h-full w-full max-h-full max-w-[90rem] m-auto border-0 border-emerald-500 ">
          <h1 className="text-5xl font-bold text-center m-5">MCQ Test</h1>
          <div className="mcq-container p-4">
            <MCQ data={questions[currentQuestion]} sr_no={currentQuestion + 1} />
            <div className="button-container mt-5 mx-2 transition-all">
              <div className="flex gap-4 flex-wrap">
                <button
                  className={`btn flex-1 sm:w-[10rem] sm:flex-initial `}
                  disabled={(currentQuestion - 1 < 0)}
                  onClick={handlePrevious}>Previous</button>

                <button
                  disabled={(currentQuestion + 1 == questions.length)}
                  className="btn flex-1 sm:w-[10rem] sm:flex-initial"
                  onClick={handleNext}>Next</button>
              {
                (currentQuestion + 1 == questions.length)
                &&
                <button className="btn btn-success ml-auto w-full sm:w-[10rem]">Submit</button>
              }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MCQContainer;
