import React from 'react';
import {Container, Grid} from "@material-ui/core";
import PhoneCard from "../phones/PhoneCard";
import {connect} from "react-redux";
import {getPhones} from "../../store/actions/phonesActions";

const Phones = (props) => {
    const {phones} = props
    React.useEffect(()=>{
        props.getPhones()
    },[props])
    return (
        <div>
            {phones.map((phone) => {
                return (
                    <Container key={phone.id}>
                        <Grid container justifyContent={'center'}>
                            <Grid item sm={10}>
                                <PhoneCard phone={phone}/>
                            </Grid>
                        </Grid>
                    </Container>
                )
            })}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        phones:state.phonesReducer.phones
    }
}
export default connect(mapStateToProps,{getPhones})(Phones);
