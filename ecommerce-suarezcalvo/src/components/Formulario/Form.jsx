import { useState } from "react"

const Form = ({handleOnChange, formData, errors, validateForm}) => {

    const handleOnSubmit = (event) =>{
        event.preventDefault()
        if(validateForm()){
            console.log('enviando datos', formData)
        }
        
    }

    return (
        <center>
            <form onSubmit={handleOnSubmit}>
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Ingrese el nombre"
                        value={formData.name}
                        onChange={handleOnChange}
                    />
                    {errors && errors.name && <span>{errors.name}</span>}
                    <input 
                        type="text" 
                        name="email" 
                        placeholder="Ingrese el email"
                        value={formData.email}
                        onChange={handleOnChange}
                    />
                    {errors && errors.email && <span>{errors.email}</span>}

                    <button>Enviar</button>
            </form>
        </center>
    )
}

export default Form