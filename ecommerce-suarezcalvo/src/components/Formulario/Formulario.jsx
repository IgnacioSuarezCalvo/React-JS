import { useState } from "react"
import Form from "./Form"
import { formWhitValidation } from "./FormWhitValidation"

const FormWhitValidation = formWhitValidation(Form)

const Formulario = () => {
    const[formData, setFormData] = useState({
        name: '',
        email: ''
    })

    const handleOnChange = (event) =>{
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }
    console.log(formData)
  return (
    <div>
        <FormWhitValidation 
            formData={formData} 
            handleOnChange={handleOnChange} 
        />
    </div>
  )
}

export default Formulario