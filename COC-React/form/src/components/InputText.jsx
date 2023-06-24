import { useContext } from "react";
import { SetUserDataContext } from "../pages/Form";


const InputText = ({ data_type, placeholder = "", type = "text", data = "" }) => {

    const setData = useContext(SetUserDataContext)

    const handleInputChange = (event) => {
        const { value } = event.target;
        setData((prevData) => ({ ...prevData, [data_type]: value }));
    }

    return (
        <label htmlFor={`data-${data_type}`} className="form-label w-100">
            <input
                type={type}
                className="form-control w-100"
                id={`data-${data_type}`}
                placeholder={placeholder}
                defaultValue={data}
                onChange={handleInputChange}
            />
        </label>
    )
}

export default InputText;