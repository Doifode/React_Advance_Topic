import { Button, Grid } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { ModalPopup } from '../QAreusable/ModalPopup'
import { QAregisterForm } from '../QAforms/QAregisterForm';
import { useNavigate } from "react-router-dom"
import { QAquery } from '../QAforms/QAquery';

export const QAdashboard = () => {
    const [showModal, setShowModal] = useState(false);
    const [role, setRole] = useState({});
    const [openAddQuery, setOpenAddQuery] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        // const role = localStorage.getItem("role");
        // setRole(JSON.parse(role))

    }, [])
    return (
        <React.Fragment>

            <Grid container >
                {role?.role == 'employee' ? <Grid item xs={2}>
                    <Button variant="text" onClick={() => { setOpenAddQuery(true); alert('hi') }}  >Add Query</Button>
                </Grid> : ''}
                <Grid item xs={2}><Button variant="text">
                    Attendance
                </Button>
                </Grid>
                <Grid item xs={2}><Button variant="text">
                    Status
                </Button>
                </Grid>
                {role?.role === "admin" ? <Grid item xs={2}><Button variant="text" onClick={() => setShowModal(true)}>
                    Add User
                </Button>
                </Grid> : ''}
                {role?.role == "helperEmployee" ? <Grid item xs={2}><Button variant="text">
                    Todays Query
                </Button>
                </Grid> : ""}
                <Grid item xs={2}><Button variant="text" onClick={() => { navigate('/'); localStorage.removeItem('role') }}>
                    Log Out
                </Button>
                </Grid>
            </Grid>
            <ModalPopup
                open={showModal}
                onClose={() => setShowModal(false)}
                title="Register Form"
            >
                <QAregisterForm />

            </ModalPopup >
            <ModalPopup
                open={openAddQuery}
                onClose={() => setOpenAddQuery(false)}
                title="Add Query"
            >
                <QAquery />

            </ModalPopup >
        </React.Fragment >


    )
}
