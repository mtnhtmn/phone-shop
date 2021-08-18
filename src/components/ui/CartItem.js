import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {TextField} from "@material-ui/core";
import {removeItemFromCart} from "../../store/actions/cartActions";
import {connect} from 'react-redux';

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
    const classes = useStyles();
    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography variant="h5" component="h2">
                    Name: {props.item.name}
                </Typography>
                <Typography variant="body2" component="p">
                    Price: {props.item.price}
                    <br />
                </Typography>
            </CardContent>
            <CardActions>
                <TextField
                    id="filled-number"
                    label="Quantity"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="filled"
                />
                <Button size="small">Add</Button>
                <Button onClick={() => props.removeItemFromCart(props.item)} size="small">Remove From Cart</Button>
            </CardActions>
        </Card>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeItemFromCart: (id) => dispatch(removeItemFromCart(id))
    }
}

export default connect(null,mapDispatchToProps)(OutlinedCard)
