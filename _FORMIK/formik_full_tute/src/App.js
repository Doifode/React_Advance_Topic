import React from 'react'
import { useFormik } from 'formik'
import * as yup from "yup"
const validation = yup.object({
  firstval: yup.number().min().moreThan(0).required(),
  secondval: yup.string().required(),

})
const App = () => {
  const { values, handleChange, handleBlur, handleSubmit, errors, touched } = useFormik({
    initialValues: {
      firstval: "",
      secondval: ""
    },
    validationSchema: validation,
    onSubmit: () => submitVal(),
  });
  const submitVal = () => {
    console.log(values, "values")
  }
  return (
    <form action="" onSubmit={handleSubmit}>
      <input className='form-control m-3' type="number"
        value={values.firstval} name='firstval'
        onChange={(e) => {
          handleChange(e)
          values.secondval = +e.target.value * 10
        }} />
      <input onBlur={handleBlur} type="number" className='form-control m-3'
        disabled value={values.secondval} name='secondval' onChange={handleChange} />
      {errors.firstval && touched.firstval ? errors.firstval : ""}

      <button type='submit'>Save</button>

    </form>
  )
}

export default App