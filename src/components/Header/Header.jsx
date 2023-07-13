import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {

    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        setText('');
        navigate(`/videos/${text}`);
    }
    const [text, setText] = useState[''];
    const handleChange = (e) =>  setText(e.target.value);

    return (

        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Search..." value={text} onChange={handleChange}/>
        </form>
    )
}