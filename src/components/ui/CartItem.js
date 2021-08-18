import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {TextField} from "@material-ui/core";
import {addToCart, removeItemFromCart} from "../../store/actions/cartActions";
import {connect} from 'react-redux';
import ItemDetails from "./ItemDetails";

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

const OutlinedCard = (props) => {
    const displayItems = props.item
    console.log(displayItems)
    const classes = useStyles();
    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                {displayItems ? <ItemDetails phone={props.item}/> : <Typography>
                    No items in cart
                </Typography>}
            </CardContent>
            <CardActions>
                <TextField
                    id="filled-number"
                    label="Quantity"
                    type="number"
                    InputProps={{
                        inputProps: {
                            min: 1,
                        }
                    }}
                    variant="filled"
                />
                <Button onClick={() => props.addToCart(props.item)} size="small">Add</Button>
                <Button onClick={() => props.removeItemFromCart(props.item)} size="small">Remove From Cart</Button>
            </CardActions>
        </Card>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => dispatch(addToCart(id)),
        removeItemFromCart: (id) => dispatch(removeItemFromCart(id))
    }
}

export default connect(null,mapDispatchToProps)(OutlinedCard)
