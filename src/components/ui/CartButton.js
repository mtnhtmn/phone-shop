import React from 'react';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {connect} from 'react-redux';

const StyledBadge = withStyles((theme) => ({
    badge: {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}))(Badge);

const CartButton = (props) => {
    const {cartItems,pendingOrder} = props
    const numberOfItems = cartItems.length + pendingOrder.items.length
    return (
        <IconButton onClick={props.open} aria-label="cart">
            <StyledBadge badgeContent={numberOfItems} color="secondary">
                <ShoppingCartIcon />
            </StyledBadge>
        </IconButton>
    );
}

const mapStateToProps = (state) => {
    return {
        cartItems: state.cartReducer.cartItems,
        pendingOrder : state.ordersReducer.pendingOrder
    }
}

export default connect(mapStateToProps, null)(CartButton)
