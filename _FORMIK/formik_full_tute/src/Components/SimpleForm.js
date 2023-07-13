import React from 'react';
import * as Yup from "yup";
import { useFormik } from 'formik';
import { Formik, Field, ErrorMessage, Form } from 'formik';
const initialValues = {
    name: '',
    email: '',
    number: ''
}
const onSubmit = values => console.log(values)
const validationSchema = Yup.object({
    name: Yup.string().max(4).required(),
    email: Yup.string().email().required(),
    number: Yup.number().required(),

})

export const SimpleForm = () => {
    const { getFieldProps, errors, touched, handleSubmit } = useFormik({
        initialValues,
        validationSchema,
        onSubmit

    })
    return (
        <>
            <div className="container">
                <div className="row ">
                    <div className="col-md-6">
                        <form action="" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="" > Name</label>
                                <input type="text"{...getFieldProps('name')} name='name' className='form-control' />
                                {errors.name && touched.name ? <p className='text-danger'>{errors.name}</p> : ''}
                            </div>
                            <div className="form-group">
                                <label htmlFor=""> Email</label>
                                <input type="text"{...getFieldProps('email')} name='email' className='form-control' />
                                {errors.email && touched.email ? <p className='text-danger'>{errors.email}</p> : ''}

                            </div>
                            <div className="form-group">
                                <label htmlFor=""> Number</label>
                                <input type="text" {...getFieldProps('number')} name='number' className='form-control' />
                                {errors.number && touched.number ? <p className='text-danger'>{errors.number}</p> : ''}

                            </div>
                            <div>
                                <button className=' btn btn-success btn-lg' type='submit'>Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
