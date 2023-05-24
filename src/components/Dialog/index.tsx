import React, { ReactNode } from 'react'
import {Dialog} from '@mui/material'

type CustomDialogProps = {
    open: boolean,
    children?: ReactNode
}

function CustomDialog(props: CustomDialogProps) {
  return (
    <Dialog open={props.open}>
        {props.children}
    </Dialog>

  )
}

export default CustomDialog