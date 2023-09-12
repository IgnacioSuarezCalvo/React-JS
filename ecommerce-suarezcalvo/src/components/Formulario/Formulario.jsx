import { useState } from "react"
import Form from "./Form"
import { formWhitValidation } from "./FormWhitValidation"

const FormWhitValidation = formWhitValidation(Form)

const Formulario = () => {
    const[formData, setFormData] = useState({
        name: '',
        email: ''

    })

    const handleOnChange= (e) =>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
  return (
    <div>
        {/* <Form formData={formData} handleOnChange={handleOnChange}   /> */}
        <FormWhitValidation formData={formData} handleOnChange={handleOnChange} />
    </div>
  )
}

export default Formulario