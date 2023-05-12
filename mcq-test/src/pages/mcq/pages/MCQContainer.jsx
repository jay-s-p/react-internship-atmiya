import React, { useEffect, useState } from "react";
import SingleMCQ from '../components/SingleMCQ'
import { storeData, retrieveData } from '../crud/StoreRetrieveData'
import { KEY_CURRENT_QUESTION } from '../assets/KEYS.js'

function MCQContainer({ selectedOptions, setSelectedOptions, questions, setShowResult }) {

  const [showSubmit, setShowSubmit] = useState(false)

  const [showReset, setShowReset] = useState(false)

  const [currentQuestion, setCurrentQuestion] = useState(0)

  const handlePrevious = () => { if (currentQuestion > 0) setCurrentQuestion(c => c - 1) }

  const handleNext = () => { if (currentQuestion < questions.length - 1) setCurrentQuestion(c => c + 1) }

  const handleSubmit = async () => {
    await setCurrentQuestion(0)
    setShowResult(true)
  }

  const arrKeyUp = {
    "Enter": handleSubmit,
  }

  const arrKeyDown = {
    "ArrowLeft": handlePrevious,
    "ArrowRight": handleNext,
  }

  const handleOnKeyUp = (event) => {
    arrKeyUp[event.key] && arrKeyUp[event.key]()
  }

  const handleKeyDown = (event) => {
    if (/^\d+$/.test(event.key)) {
      let i = (parseInt(event.key))
      // (i >= 0 && i < options.length) && 
      // TODO : condition checked above just call the set option any how
    } else {
      arrKeyDown[event.key] && arrKeyDown[event.key]()
    }
  };

  useEffect(() => {
    (async () => {
      const data = await retrieveData(KEY_CURRENT_QUESTION);
      data !== null && setCurrentQuestion(data)

    })()
  }, [])

  useEffect(() => {

    (currentQuestion + 1 == questions.length) && setShowSubmit(true)
    storeData(KEY_CURRENT_QUESTION, currentQuestion)

  }, [currentQuestion])

  useEffect(() => {

    (selectedOptions.size == questions.length) && setShowSubmit(true)
    setShowReset(selectedOptions.size !== 0)

  }, [selectedOptions])

  return (
    <>
      <div className="h-[93vh] w-screen bg-base-100 grid overflow-auto"
        onKeyDown={handleKeyDown}
        onKeyUp={handleOnKeyUp}
        tabIndex="0"
        autoFocus={true}
      >
        <div
          // tabIndex="0" // This is required to make the div focusable and receive keyboard events
          // autoFocus={true}
          className="container h-full w-full max-h-full max-w-[90rem] m-auto border-0 border-emerald-500 ">
          <h1 className="text-5xl font-bold text-center m-5">MCQ Test</h1>
          <div className="mcq-container p-4">
            <SingleMCQ data={questions[currentQuestion]} selectedOptions={selectedOptions} setSelectedOptions={setSelectedOptions} sr_no={currentQuestion + 1} />
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
                    <button className="btn btn-info btn-outline  w-full md:w-[10rem]" onClick={() => { setSelectedOptions(new Map()); setShowReset(false); setShowSubmit(false) }}>Reset</button>
                  }
                  {
                    (showSubmit)
                    &&
                    <label htmlFor="my-modal" className="btn btn-success  w-full md:w-[10rem]">Submit</label>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <label htmlFor="my-modal" className="modal modal-bottom sm:modal-middle cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <h3 className="text-lg font-bold">Are you sure?</h3>
          <p className="py-4">{ (selectedOptions.size !== questions.length) ? `You have ${questions.length - selectedOptions.size} left out of the ${questions.length} questions.`:`Are you sure to submit?` } </p>
        <div className="modal-action ">
          <label htmlFor="my-modal" className="btn btn-outline  text-lg ">No</label>
          <label htmlFor="my-modal" className="btn btn-error  text-lg"  onClick={handleSubmit}>Yes</label>
        </div>
        </label>
      </label>
    </>
  )
}

export default MCQContainer;
