import React from 'react';
import {Card, CardActions, CardContent, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import {connect} from 'react-redux';
import {addToCart} from "../../store/actions/cartActions";


const useStyles = makeStyles({
    root: {
        maxWidth: 500,
        margin: 10,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 34,
    },
    pos: {
        marginBottom: 12,
    },
});

const PhoneCard = (props) => {
    const classes = useStyles();
    console.log(props)
    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {props.phone.name}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    price: {props.phone.price}
                </Typography>
            </CardContent>
            <CardActions>
                <Button onClick={() => props.addToCart(props.phone)} size="small">Add to cart</Button>
            </CardActions>
        </Card>
    );
};

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => dispatch(addToCart(id))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(PhoneCard);
