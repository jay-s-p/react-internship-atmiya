
import { useContext } from "react";
import { SetUserDataContext } from "../pages/Form";

const InputTextarea = ({ data_type, placeholder = "", rows = "2", data = "" }) => {

    const setData = useContext(SetUserDataContext)

    const handleInputChange = (event) => {
        const { value } = event.target;
        setData((prevData) => ({ ...prevData, [data_type]: value }));
    }

    return (
        <>
            {
                <label htmlFor={`data-${data_type}`} className="form-label w-100">
                    <textarea
                        id={`data-${data_type}`}
                        className="form-control w-100"
                        rows={rows}
                        placeholder={placeholder}
                        onChange={handleInputChange}
                        defaultValue={data}
                    />
                </label>
            }
        </>
    )
}

export default InputTextarea;