import React from 'react';
import {Container, Grid} from "@material-ui/core";
import PhoneCard from "../phones/PhoneCard";
import {connect} from "react-redux";
import {getPhones} from "../../store/actions/phonesActions";
import Appbar from "../ui/Appbar";
import {changeRouteTitle} from "../../store/actions/uiAction";

const Phones = (props) => {
    const {phones,getPhones,changeRouteTitle} = props
    React.useEffect( () => {
        changeRouteTitle('Phones')
    },[changeRouteTitle])
    React.useEffect(()=>{
        getPhones()
    },[getPhones])
    return (
        <div>
            <Appbar/>
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
export default connect(mapStateToProps,{getPhones,changeRouteTitle})(Phones);
