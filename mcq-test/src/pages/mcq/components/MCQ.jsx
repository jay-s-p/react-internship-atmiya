import { useState } from "react";


const MCQ = ({ data, sr_no }) => {
	const [question, options, answer, id] = [data?.question, data?.options, data?.answer, data.id];
	const handleChecked = (id) => { setChecked(id); console.log(id); }
	const [checked, setChecked] = useState()
	return (
		<>
			<div className="mcq-container bg-base-200 p-3 mt-10 rounded-2xl shadow-sm select-none">
				<div className="question-container text-2xl select-none pl-3 font-semibold">{sr_no ? sr_no + ". " : ""}{question}</div>
				<div className="options-container grid grid-cols-1 gap-2 mt-3">
					{options.map((option, i) => (
						<label className={`
						p-3 flex gap-2 rounded-xl cursor-pointer  select-none transition-all duration-100
						active:bg-opacity-30 active:bg-gray-500 active:scale-[.99] 
						${checked == i ? "bg-blue-500 font-semibold bg-opacity-20" : " hover:bg-gray-500 hover:bg-opacity-10"}
						`}
							key={i}>
							<input className="radio radio-sm	 my-auto radio-primary " onChange={() => { handleChecked(i) }} type="radio" name={`option${id}${sr_no}`} />
							<span className="my-auto ml-4 text-xl">{String.fromCharCode(65+i)}. {option}</span>
						</label>
					))}
				</div>
			</div>
		</>
	)
}

export default MCQ