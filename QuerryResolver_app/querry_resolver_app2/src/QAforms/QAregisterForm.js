import { Button, Grid, MenuItem, Select, TextField } from '@material-ui/core'
import { ErrorMessage, Field, Formik, Form } from 'formik'
import React, { useEffect, useState } from 'react'


const getData = () => {
    const userData = localStorage.getItem('allUsersDetails');
    const data = JSON.parse(userData);
    if (data) {
        return data

    }
    else { return [] }

}

export const QAregisterForm = () => {
    const [usersDetails, setUsersDetails] = useState(getData());
    const addUserForm = (values, { resetForm }) => {
        setUsersDetails((pre) => [...pre, values]);
        console.log(usersDetails)
        resetForm()
    }
    useEffect(() => {

        localStorage.setItem("allUsersDetails", JSON.stringify(usersDetails));
    }, [usersDetails])
    console.log(usersDetails, 'UserDetails')

    return (

        <React.Fragment>
            <Grid container>
                <Formik
                    initialValues={{
                        firstName: "",
                        lastName: "",
                        role: "",
                        username: "",
                        password: '',
                        image: ""
                    }}
                    onSubmit={(values, { resetForm }) => addUserForm(values, { resetForm })}
                >{({ values, setFieldValue }) => (


                    <Form>
                        <img height={50} width={50} src={values.image} alt="" />
                        <input type="file" name="image" onChange={(e) => {
                            const file = new FileReader();
                            file.readAsDataURL(e.target.files[0])
                            file.onload = () => {
                                setFieldValue('image', file.result)
                                console.log(values)
                            }

                        }} />
                        <Field as={TextField} className="mt-1" size="small" fullWidth name="firstName" label="First Name" />
                        <ErrorMessage name="firstName" />
                        <Field as={TextField} className="mt-1" name="lastName" size="small" fullWidth label="Last Name" />
                        <ErrorMessage name="lastName" />
                        <Field as={Select} className="mt-1" name="role" size="small" fullWidth label="User Roll" >
                            <MenuItem value='employee'>
                                Employee
                            </MenuItem>
                            <MenuItem value='helperEmployee'>
                                Helper
                            </MenuItem>
                            <MenuItem value='admin'>
                                Admin
                            </MenuItem>

                        </Field>
                        <ErrorMessage name="role" />
                        <Field as={TextField} className="mt-1" size="small" fullWidth name="username" label="User Name" />
                        <ErrorMessage name="username" />
                        <Field as={TextField} className="mt-1" size="small" fullWidth name="password" label="Password" />
                        <ErrorMessage name="password" />
                        <Button type='submit'> Save</Button>


                    </Form>
                )}
                </Formik>


            </Grid>
        </React.Fragment>

    )
}
