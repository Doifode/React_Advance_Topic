import React from 'react';
import * as Yup from "yup";
import { useFormik } from 'formik';
import { Formik, Field, ErrorMessage, Form } from 'formik';
import { TextField } from '@material-ui/core';
const validationSchema = Yup.object({
    name: Yup.string().max(4).required(),
    email: Yup.string().email().required(),
    number: Yup.number().required(),

})

export const CompactForm = () => {
    return (
        <>
            <div className="container">
                <div className="row ">
                    <div className="col-md-6">
                        <Formik initialValues={{
                            name: '',
                            email: '',
                            number: '',
                            Address: {
                                village: '',
                                dist: '',
                                tal: '',
                                number: ["", ""]

                            }
                        }} onSubmit={(v,onSubmitProps) => {setTimeout(() => {
                            onSubmitProps.setSubmitting(false)
                        }, 2000);console.log(v)}}
                            validationSchema={validationSchema}>
                            {formik =>
                                <Form action="" >
                                <div className="form-group">
                                    <label htmlFor="" > Name</label>
                                    <Field as={TextField}  variant='outlined' className='form-control' fullWidth name='name' />
                                    <ErrorMessage name='name'  as={TextField} />
                                       
                                </div>
                                <div className="form-group">
                                    <label htmlFor=""> Email</label>
                                    <Field name='email' className='form-control' />
                                    <ErrorMessage name='email' />
                                </div>
                                <div className="form-group">
                                    <label htmlFor=""> Number</label>
                                    <Field name='number' className='form-control' />
                                    <ErrorMessage name='number' />
                                </div>
                                <label htmlFor="">Address</label>
                                <div className="row">
                                    <div className="col-4">
                                        <div className="form-group">
                                            <label htmlFor=""> Village</label>
                                            <Field name='Address.village' className='form-control' />
                                            <ErrorMessage name='Address.village' />
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="form-group">
                                            <label htmlFor=""> Dist</label>
                                            <Field name='Address.dist' className='form-control' />
                                            <ErrorMessage name='Address.dist' />
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="form-group">
                                            <label htmlFor=""> Tal</label>
                                            <Field name='Address.number[0]' className='form-control' />
                                            <ErrorMessage name='Address.tal' />
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <button className='btn btn-success btn-lg' type='submit' disabled={formik.isSubmitting}>Save</button>
                                </div>
                            </Form>
                            }
                        </Formik>
                    </div>
                </div>
            </div >
        </>
    )
}
