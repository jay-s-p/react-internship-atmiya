import { useEffect, useState } from "react";


const SingleMCQ = ({ data, sr_no, setSelectedOptions, selectedOptions }) => {

	const [question, options, id] = [data.question, data.options, data.id];

	const handleChecked = (userSelectedOption) => {
		if (checked == userSelectedOption) {
			setChecked(-1)
			setSelectedOptions((dataMap) => {
				dataMap = new Map(dataMap)
				dataMap.delete(id)
				return dataMap
			})
		} else {
			setChecked(userSelectedOption)
			setSelectedOptions((dataMap) => {
				dataMap = new Map(dataMap).set(id, userSelectedOption)
				return dataMap
			})
		}
	}
	
	const [checked, setChecked] = useState((selectedOptions.get(id) !== undefined ? selectedOptions.get(id) : -1))

	useEffect(() => {
		console.log(selectedOptions);
		try {
			setChecked(selectedOptions.get(id) !== undefined ? selectedOptions.get(id) : -1)
		} catch (error) {
			console.error("Error");
		}
	}, [data, selectedOptions]);

	return (
		<>
			<div className="mcq-container p-3 mt-10 rounded-2xl shadow-sm select-none">
				<div className="question-container text-2xl select-none pl-3 font-semibold">{sr_no ? <span>{sr_no}. &nbsp;&nbsp;</span> : ""}{question}</div>
				<div className="options-container grid grid-cols-1 gap-2 mt-5">
					{options.map((option, i) => (
						<label className={`
						bg-base-200 border-base-300 border p-3 flex gap-2 rounded-xl cursor-pointer  select-none transition-all duration-100
						active:bg-opacity-30 active:bg-gray-500 active:scale-[.99] 
						${checked == i ? "bg-blue-500 font-semibold border-blue-500 bg-opacity-20" : " hover:bg-base-300"}`}
							key={i}>
							<input checked={checked == i} readOnly className="radio radio-sm my-auto radio-primary hidden" onClick={() => { handleChecked(i) }} type="radio" name={`option${id}${sr_no}`} />
							<span className="my-auto text-xl"><span className="font-semibold">{"( "}{String.fromCharCode(65 + i)}{" )"}&nbsp;&nbsp;</span> {option}</span>
						</label>
					))}
				</div>
			</div>
		</>
	)
}

export default SingleMCQ