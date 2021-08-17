import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CartButton from './CartButton';
import {connect} from "react-redux";
import CartItems from './CartItems'

const CartModal= (props) => {
    const {pendingOrder} = props
    console.log(pendingOrder.items)
    const cartItems = pendingOrder.items.map(item => {
        return (
            <div>
                <CartItems item={item}/>
            </div>
        )
    })
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <CartButton open={handleClickOpen}/>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Your Cart"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {cartItems}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary" autoFocus>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        pendingOrder : state.ordersReducer.pendingOrder
    }
}

export default connect(mapStateToProps, null)(CartModal)
