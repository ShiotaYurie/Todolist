import React from "react";

export const Defultarea = (props) => {
    const  {defultText,onChangeTest,buttonName} = props
    // console.log(props);
    return(
        <>
        <div className="defult-input">
            <textarea placeholder="入力する" value={defultText} onChange={onChangeTest}></textarea>
            <button>{buttonName}</button>
        </div>
        </>

    );
};