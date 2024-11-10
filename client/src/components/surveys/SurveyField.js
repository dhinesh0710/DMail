//SurveyField contains logic to render single label and text input
import React from "react";

 // destructuring input from props object provided by Field component in redux-form
 //meta is 
// eslint-disable-next-line import/no-anonymous-default-export
export default ({input, label, meta : {touched, error}}) => {   
    return (
        <div>
            <label>{label}</label>
            <input {...input} style={{marginBottom: '5px'}} />
            <div className="red-text" style={{marginBottom: '20px'}}>
                {touched && error}
            </div>      
        </div>
    );
};