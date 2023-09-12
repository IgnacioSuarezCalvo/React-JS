import { useState } from "react"

export const formWhitValidation =(FormWrappedComponent) =>{
            const FormWhitValidation = (props) =>{
                const [errors, setErrors] = useState({})

                const validateForm = () =>{
                    let newErrors ={}
                    let isValid = true
                    if(props.formData.name){
                        newErrors.name = 'El campo esta vacio'
                        isValid = false
                    }
                    if(props.formData.email){
                        newErrors.email = 'El email esta vacio'
                        isValid = false 
                    }
                    setErrors(newErrors)
                    return isValid
                }
                return  <FormWrappedComponent
                    {...props}
                    errors={errors}
                    validateForm={validateForm}
                /> 
                
            }
            return FormWhitValidation
}



