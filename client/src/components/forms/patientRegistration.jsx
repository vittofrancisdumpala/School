import React from "react";
import {
    Formik, Form, Field, ErrorMessage,
} from 'formik';
import InputAdornment from '@material-ui/core/InputAdornment';
import {createPatient} from "./actions";
import Button from '@material-ui/core/Button';
import * as Yup from 'yup';
import * as PropTypes from "prop-types";
import {connect} from "react-redux";
import {  Container, FormControlLabel, FormLabel  } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import GridContainer from "../Grid/GridContainer";
import GridItem from "../Grid/GridItem";
import Divider from "@material-ui/core/Divider";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { KeyboardDatePicker } from "@material-ui/pickers";

const style = (theme) => ({
    root: {
        flexGrow: 1,
    },
});
const phoneRegExp = /^[6-9]\d{9}$/;

function _calculateAge(dob) { // birthday is a date
    let ageDifMs = Date.now() - dob.getTime();
    let ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}
function PatientRegistration(props) {
    const { classes } = props;
    return (
        <Container fixed>
            <Formik
                initialValues={{ email: '', firstName: '', lastName: '', dob:null, age:0, gender:'female', phone:'' }}
                onSubmit={(values, { setSubmitting }) => {
                    setSubmitting(true);
                    values.createdBy=props.createdBy;
                    props.submit(values);
                }}
                validationSchema={Yup.object().shape({
                    email: Yup.string()
                        .email('Invalid email')
                        .required('Required'),
                    firstName: Yup.string()
                        .required('Required'),
                    lastName: Yup.string()
                        .required('Required'),
                    dob: Yup.date()
                        .required('Required'),
                    age: Yup
                        .number()
                        .required('Required')
                        .positive()
                        .integer(),
                    gender: Yup.string()
                        .required('Required'),
                    phone: Yup.string()
                        .matches(phoneRegExp, 'Phone number is not valid')
                        .required('Required'),
                })}
            >
                {(props) => {
                    const {
                        values,
                        touched,
                        errors,
                        dirty,
                        isSubmitting,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        setFieldValue,
                        handleReset,
                    } = props;
                    return (
                        <form onSubmit={handleSubmit}>
                            <GridContainer justify="space-around" alignItems="center" >
                                <GridItem xs={12} md={6} lg={6}>
                                    <TextField
                                        id="outlined-required"
                                        label="First Name"
                                        placeholder="First Name"
                                        margin="normal"
                                        name="firstName"
                                        error={(errors.firstName && touched.firstName)}
                                        value={values["firstName"]}
                                        variant="outlined"
                                        fullWidth
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        helperText={(errors.firstName && touched.firstName) && errors.firstName}
                                    />
                                </GridItem>
                                <GridItem xs={12} md={6} lg={6}>
                                    <TextField
                                        id="outlined-required"
                                        label="Last Name"
                                        placeholder="Last Name"
                                        margin="normal"
                                        name="lastName"
                                        variant="outlined"
                                        fullWidth
                                        error={(errors.lastName && touched.lastName)}
                                        value={values.lastName}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        helperText={(errors.lastName && touched.lastName) && errors.lastName}
                                    />
                                </GridItem>
                                <GridItem xs={12} md={6} lg={6}>
                                    <TextField
                                        id="outlined-required"
                                        label="Email"
                                        placeholder="Email"
                                        margin="normal"
                                        name="email"
                                        error={(errors.email && touched.email)}
                                        variant="outlined"
                                        value={values.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        helperText={(errors.email && touched.email) && errors.email}
                                        fullWidth
                                    />
                                </GridItem>
                                <GridItem xs={12} md={6} lg={6}>
                                    <FormLabel component="legend">Gender</FormLabel>
                                    <RadioGroup
                                        aria-label="gender"
                                        name="gender"
                                        value={values.gender}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        row
                                    >
                                        <FormControlLabel
                                            value="female"
                                            control={<Radio color="primary" />}
                                            label="Female"
                                            labelPlacement="start"
                                        />
                                        <FormControlLabel
                                            value="male"
                                            control={<Radio color="primary" />}
                                            label="Male"
                                            labelPlacement="start"
                                        />
                                        <FormControlLabel
                                            value="other"
                                            control={<Radio color="primary" />}
                                            label="Other"
                                            labelPlacement="start"
                                        />
                                    </RadioGroup>
                                </GridItem>
                                <GridItem xs={12} md={3} lg={3}>
                                    <KeyboardDatePicker
                                        margin="normal"
                                        disableFuture
                                        name="dob"
                                        error={(errors.dob && touched.dob)}
                                        id="date-picker-dialog"
                                        label="Date Of Birth"
                                        format="MM/dd/yyyy"
                                        value={values.dob}
                                        inputVariant="outlined"
                                        onChange={e => {
                                            setFieldValue("dob",e.toString());
                                            let cAge= _calculateAge(e);
                                            setFieldValue("age",cAge);
                                        }}
                                        helperText={(errors.dob && touched.dob) && errors.dob}
                                        fullWidth
                                        required
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                    />
                                </GridItem>
                                <GridItem xs={12} md={3} lg={3}>
                                    <TextField
                                        id="outlined-required"
                                        label="Age"
                                        name="age"
                                        value={values.age}
                                        margin="normal"
                                        variant="outlined"
                                        fullWidth
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                        error={(errors.age && touched.age)}
                                        helperText={(errors.age && touched.age) && errors.age}
                                    />
                                </GridItem>
                                <GridItem xs={12} md={6} lg={6}>
                                    <TextField
                                        id="outlined-required"
                                        label="Mobile Number"
                                        name="phone"
                                        value={values.phone}
                                        margin="normal"
                                        variant="outlined"
                                        fullWidth
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    +91
                                                </InputAdornment>
                                            ),
                                        }}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        error={(errors.phone && touched.phone)}
                                        helperText={(errors.phone && touched.phone) && errors.phone}
                                    />
                                </GridItem>
                                <GridItem sm={12} md={12} lg={12}>
                                    <br />
                                    <Divider variant="fullWidth" />
                                    <br />
                                </GridItem>
                                <GridItem >
                                    <Button
                                        type="button"
                                        onClick={handleReset}
                                        variant="outlined"
                                        color="secondary"
                                        disabled={!dirty || isSubmitting}
                                    >
                                        Reset
                                    </Button>
                                    <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                        variant="outlined"
                                        color="primary"
                                    >
                                        Submit
                                    </Button>
                                </GridItem>
                            </GridContainer>
                        </form>
                    );
                }}
            </Formik>
        </Container>
    );
}
PatientRegistration.propTypes = {
createdBy: PropTypes.string,
submit: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({
createdBy: state.auth.user.local.email,
});
const mapDispatchToProps = dispatch => ({
    submit: (values) => {
        console.log(values);
        dispatch(createPatient(values));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(style)(PatientRegistration))
