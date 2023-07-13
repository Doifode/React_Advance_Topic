import { Button, MenuItem, Select, TextField } from '@material-ui/core'
import { Field, Form, Formik } from 'formik'
import React, { useEffect, useState } from 'react'

export const QAquery = () => {
    const [helperEmpList, setHelperEmpList] = useState([])
    useEffect(() => {
        const data = localStorage.getItem("allUsersDetails");
        const parse = JSON.parse(data);
        const filterHelper = parse.filter((i) => i.role === "helperEmployee");
        setHelperEmpList(filterHelper)

    }, [])
    const submitQuerry = () => {

    }

    return (
        <React.Fragment>
            <Formik onSubmit={(values) => submitQuerry(values)}>
                {({ }) => (
                    <Form>
                        <Field as={TextField} fullWidth name="query" label="Query" />
                        <Field as={TextField} fullWidth name="date" label="Date" />
                        <Field as={Select} name="assign_to" fullWidth>
                            {
                                helperEmpList.map((i) => {
                                    return <MenuItem>
                                        {i.firstName}
                                    </MenuItem>
                                }

                                )
                            }
                        </Field>
                        <Button> Send</Button>


                    </Form>

                )}
            </Formik>

        </React.Fragment >
    )
}
