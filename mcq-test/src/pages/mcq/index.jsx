import { useEffect, useState } from "react";
import MCQContainer from "./pages/MCQContainer";
import questions from "./assets/questions.json";
import Result from "./pages/Result";
import { storeData, retrieveData } from './crud/StoreRetrieveData'
import { KEY_SELECTED_OPTION } from './assets/KEYS'

function index() {
  const [showResult, setShowResult] = useState(false)
  const [selectedOptions, setSelectedOptions] = useState({})

  const resetSelectedOptions = () => {
    setSelectedOptions({})
  }

  // useEffect(async () => {
  //   const data = await retrieveData(KEY_SELECTED_OPTION)
  //   if (Object.keys(data).length > 0)
  //     awaitsetSelectedOptions(x => ({ ...x, ...data }))
  // }, [])

  useEffect(() => {
    storeData(KEY_SELECTED_OPTION, selectedOptions)
  }, [selectedOptions])


  return (
    <>

        {
          showResult
            ?
            <Result selectedOptions={selectedOptions} setShowResult={setShowResult} questions={questions} setSelectedOptions={setSelectedOptions}/>
            :
            <>
            <MCQContainer selectedOptions={selectedOptions} setSelectedOptions={setSelectedOptions} resetSelectedOptions={resetSelectedOptions} questions={questions} setShowResult={setShowResult} />
            </>
        }

    </>
  )
}

export default index;
