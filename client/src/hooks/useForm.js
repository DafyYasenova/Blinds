import { useState } from "react";

export default function useForm( initilalValues, submitHandler) {
    const [values, setValues] = useState(initilalValues);

    const onChange = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    const onSubmit = (e) => {
        e.preventDefault();
       submitHandler(values);

       // setValues(initilalValues)
    }

    return {
        values,
        onChange,
        onSubmit,
    }
}