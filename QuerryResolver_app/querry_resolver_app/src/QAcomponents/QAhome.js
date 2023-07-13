
import { Grid, TextField } from '@material-ui/core'
import { Button } from 'bootstrap'
import React from 'react';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import { useState } from 'react';


export const QAhome = () => {
    const [loginDetails, setLoginDetails] = useState();
    const submitLoginForm = () => {

    }

    return (
        <React.Fragment>
            <Grid container >
                <Formik
                    initialValues={
                        {
                            username: '',
                            password: ''
                        }
                    }
                    onSubmit={(values, { resetForm }) => submitLoginForm(values, { resetForm })}

                >
                    <Form>
                        <Field as={TextField} label="User Name" />
                        <Field as={TextField} label="Password" />
                        <Button> Login</Button>

                    </Form>

                </Formik>
            </Grid>
        </React.Fragment >
    )
}
