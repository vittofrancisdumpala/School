import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";
import * as PropTypes from "prop-types";
import {connect} from "react-redux";
import {openAction, closeAction} from "../../../App/actions";
import PatientRegistrationDialog from "../../../components/Dialogs/patientRegistrationDialog";
import add_user from "../../../assets/images/undraw_add_user_ipe3.svg";
const useStyles = makeStyles({

});

function InfoCards(props) {
    const classes = useStyles();

    return (
        <GridContainer>
            <GridItem xs={12} sm={6} md={3}>
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="140"
                            image={add_user}
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Patients
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button
                            size="small"
                            color="primary"
                            onClick={() => {props.history.push('/dashboard/search')}}
                        >
                            Search
                        </Button>
                        <Button size="small" color="primary" onClick={props.open}>
                            Register
                        </Button>
                    </CardActions>
                </Card>
            </GridItem>
            <PatientRegistrationDialog
                open={props.openFlag}
                handleClose={props.close}
            />
        </GridContainer>
    );
}
InfoCards.propTypes = {
    classes: PropTypes.object,
    openFlag: PropTypes.bool.isRequired,
};
const mapStateToProps = state => ({
    openFlag: state.app.regFlag,
});
const mapDispatchToProps = dispatch => ({
    open:() => {
        dispatch(openAction());
    },
    close:() =>{
        dispatch(closeAction());
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(InfoCards);

