import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import {Main} from './Modal.styles'


export default function ModalUI({
    // Transition,
    handleClose,
    // open
}) {

    return (
        <Dialog
            open={true}
            // TransitionComponent={Transition}
            // keepMounted
            onClose={handleClose}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
        >
            <Main>게시물이 정상적으로 등록되었습니다.</Main>
            <Button onClick={handleClose} color="primary">
                확인
            </Button>
        </Dialog>
    )
}

