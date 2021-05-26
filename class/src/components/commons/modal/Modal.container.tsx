import React from 'react';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';
import ModalUI from './Modal.presenter';

// const Transition = React.forwardRef(function Transition(
//   props: TransitionProps & { children?: React.ReactElement<any, any> },
//   ref: React.Ref<unknown>,
// ) {
//   return <Slide direction="up" ref={ref} {...props} />;
// });

export default function Modal({handleClose, /* open */}){
    return (
        <ModalUI 
            // Transition={Transition} 
            handleClose={handleClose}
            // open={open}
        />
    )
}

