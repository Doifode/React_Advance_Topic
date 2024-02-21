import React from 'react'
import { Formik, useFormik, ErrorMessage } from 'formik'
import * as yup from "yup"
const validation = yup.object({
    firstval: yup.string().required(),
    secondval: yup.string().required()
})
const RelateInput = () => {
    const { values, handleChange,handleSubmit ,errors,touched} = useFormik({
        validationSchema: { validation },
        onSubmit: () => submitVal(),
        initialValues: { 

            firstval: "",
            secondval: ""

        }
    });
    const submitVal = () => {
        console.log(values, "values")
    }
    return (
        <form action="" onSubmit={() => handleSubmit()}>
            <input type="number" name='firstval' onChange={handleChange} />
            <ErrorMessage name='firstval' />
            <input type="number" name='secondval' onChange={handleChange} />
            <ErrorMessage name='secondval' />

            <button type='submit'>Save</button>

        </form>
    )
}

export default RelateInput