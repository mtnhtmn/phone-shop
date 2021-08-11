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
    return (
        <IconButton onClick={props.open} aria-label="cart">
            <StyledBadge badgeContent={props.cartNumbers} color="secondary">
                <ShoppingCartIcon />
            </StyledBadge>
        </IconButton>
    );
}

const mapStateToProps = (state) => {
    return {
        cartNumbers: []
    }
}

export default connect(mapStateToProps, null)(CartButton)
