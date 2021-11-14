import React, { useState } from 'react';

const Convertor = () => {

    const [form, setForm] = useState({
        value: ''
    });

    const handleChange = evt => {
        setForm(prevForm => ({...prevForm, value: evt.target.value}))
    }

    if(form.value.length === 7){
        document.querySelector('.App').style.background = hexToRgb(form.value);
    }

    function hexToRgb(hex) {
        let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result 
        ? `rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)})` 
        : 'ошибка!';
    }

    return (
        <form className="form">
            <input 
                type="text" 
                value={form.value} 
                onChange={handleChange} 
                maxLength={7}
                placeholder="#cccccc"
            />
           <p>{form.value.length === 7 && hexToRgb(form.value)}</p>
        </form>
    );
};


export default Convertor;
