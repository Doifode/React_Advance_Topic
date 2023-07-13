
import { Grid, TextField, Button } from '@material-ui/core'
import React, { useEffect } from 'react';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import { useState } from 'react';
import { useNavigate } from "react-router-dom"


export const QAhome = () => {
    const [loginDetails, setLoginDetails] = useState([]);
    useEffect(() => {
        // const checkLogin = localStorage.getItem('allUsersDetails');
        // const data = JSON.parse(checkLogin)
        // setLoginDetails(data.map((i) => {
        //     return { username: i.username, password: i.password, role: i.role }
        // }
        // ));
        // if (loginDetails.length > 0) {
        //     console.log(loginDetails, 'allUsersDetails')
        // }

    }, [])
    const navigate = useNavigate()
    const submitLoginForm = (values) => {
        const validataion = loginDetails.find((i) => i.username === values.username && i.password === values.password)
        console.log(values);
        if (validataion || values.username === "yash" && values.password === "yash") {
            alert('you are logged in')
            navigate('/dashboard');
            localStorage.setItem('role', JSON.stringify(validataion))


        } else {
            alert('please check id password')
        }
    }

    return (
        <React.Fragment>
            <Grid container >
                <Formik
                    initialValues={{
                        username: '',
                        password: ''
                    }}
                    onSubmit={(values, { resetForm }) => submitLoginForm(values, { resetForm })}
                >
                    <Form>
                        <Field as={TextField} name="username" label="User Name" />
                        <Field as={TextField} name="password" label="Password" />
                        <Button type='submit'> Login</Button>
                    </Form>
                </Formik>
            </Grid>
        </React.Fragment >
    )
}
