import React from 'react'
import { useState } from 'react'

export default function Input(props) {
    const [InputText, setInputText] = useState("");
    const handleEnterPress = (e) => {
        if (e.keyCode === 13) {
            props.addList(InputText);
            setInputText("");
        }
    }; const [Input, setInput] = useState('');
    return (
        <div>
            <div className="input-group mb-3 w-25 m-auto">
                <input type="text" className="form-control border-primary" placeholder="Enter Text Here" value={InputText}
                    onChange={(e) => {
                        setInputText(e.target.value);
                    }}
                    onKeyDown={handleEnterPress} />
                <button className="btn btn-primary" type="button" id="button-addon2" onClick={() => {
                    props.addList(InputText);
                    setInputText("");
                }}>Add</button>
            </div>
        </div>
    )
}
