import { useEffect, useState } from "react";
import MCQContainer from "./pages/MCQContainer";
import questions from "./assets/questions.json";
import Result from "./pages/Result";
import { storeData, retrieveData } from './crud/StoreRetrieveData'

function index() {
  const [showResult, setShowResult] = useState(false)
  const [selectedOptions, setSelectedOptions] = useState({})

  const KEY = "user_selected_options"

  const resetSelectedOptions = () => {
    setSelectedOptions({})
  }

  useEffect(() => {
    const data = retrieveData(KEY)
    console.log(data);
    if (Object.keys(data).length > 0)
      setSelectedOptions(x => ({...x,...data}))
  }, [])

  useEffect(() => {
    // console.log(selectedOptions); 
    storeData(KEY, selectedOptions)
  }, [selectedOptions])


  return (
    <>
      {
        showResult
          ?
          <Result selectedOptions={selectedOptions} setShowResult={setShowResult} questions={questions} />
          :
          <MCQContainer selectedOptions={selectedOptions} setSelectedOptions={setSelectedOptions} resetSelectedOptions={resetSelectedOptions} questions={questions} setShowResult={setShowResult} />
      }
    </>
  )
}

export default index;
