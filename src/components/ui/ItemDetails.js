import React from 'react';
import Typography from "@material-ui/core/Typography";

const CartDetails = ({phone}) => {
    return (
        <div>
            <Typography variant="h5" component="h2">
                Name: {phone.name}
            </Typography>
            <Typography variant="body2" component="p">
                Price: {phone.price}
                <br />
            </Typography>
        </div>
    );
};

export default CartDetails;
