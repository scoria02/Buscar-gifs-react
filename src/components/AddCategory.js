import React, {useState} from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setcategories}) => {

    const [inputValue, setInputValue] = useState('Agrega Categorias');

    const handleInputCharge = (e) => {

        setInputValue (e.target.value);
    }

    const handleSubmit = ( e ) => {
        e.preventDefault();
        if (inputValue.trim().length > 2 ) {
            
            setcategories (cats => [ inputValue,...cats]);
            setInputValue ('');
        }
    }

    return (
        <form onSubmit = { handleSubmit }>
            <input type = "text" 
            value = {inputValue} 
            onChange = {handleInputCharge}
            />
        </form>
    )
}

AddCategory.prototype = {
    setcategories: PropTypes.func.isRequired
}