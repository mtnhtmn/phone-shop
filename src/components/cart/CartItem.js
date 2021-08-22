import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import {TextField} from "@material-ui/core";
import {addToCart} from "../../store/actions/cartActions";
import {connect} from 'react-redux';
import CartItemDetails from "./CartItemDetails";
import {removeItemFromOrder} from "../../store/actions/ordersActions";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

const CartItem = (props) => {
    const classes = useStyles();
    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                 <CartItemDetails phone={props.item}/>
            </CardContent>
            <CardActions>
                <TextField
                    id="filled-number"
                    label="Quantity"
                    type="number"
                    defaultValue={props.item.quantity}
                    InputProps={{
                        inputProps: {
                            min: 1,
                        }
                    }}
                    variant="filled"
                    onChange={(e)=> {
                        if (e.target.value > props.item.quantity) {
                            props.addToCart(props.item)
                        } else if (e.target.value < props.item.quantity) {
                            props.removeItemFromOrder(props.item)
                        }
                    }}
                />
            </CardActions>
        </Card>
    );
}

export default connect(null,{addToCart,removeItemFromOrder})(CartItem)
