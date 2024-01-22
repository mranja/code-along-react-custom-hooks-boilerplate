import React, { useState } from "react";
import useLocalStorage from "./useStorage";

const InputField =()=>{


    let [value, updateValue] = useLocalStorage("inputData")

    function savingInputValues(e){
        let data = e.target.value;
        updateValue(data)
    }

    console.log("value", value)


    return (
        <>
        <div>
            <input type="text"
            placeholder="enter something here..."
            onChange={savingInputValues}

            />
            <h3>data that is getting stored : {value}</h3>
        </div>
        </>
    )
}


export default InputField;

