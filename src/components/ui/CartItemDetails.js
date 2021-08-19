import React from 'react';
import Typography from "@material-ui/core/Typography";

const CartItemDetails = ({phone}) => {
    return (
        <div>
            <Typography variant="h5" component="h2">
                {phone.name}
            </Typography>
            <Typography variant="body2" component="p">
                Price: {phone.price}$
                <br />
                <img src={phone.image} alt={phone.name} height={'100'} width={'100'}/>
            </Typography>
        </div>
    );
};

export default CartItemDetails;
