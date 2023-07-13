import { Dialog, DialogContent, DialogTitle, Button } from '@material-ui/core'
import React from 'react'

export const ModalPopup = (props) => {
    const { title, onClose, children } = props
    return (

        <Dialog {...props}>
            {title ? <DialogTitle>{title}
                {onClose ? <Button onClick={() => onClose()}> X</Button> : ''}
            </DialogTitle> : ''}
            <DialogContent>

                {children}
            </DialogContent>

        </Dialog>

    )
}
