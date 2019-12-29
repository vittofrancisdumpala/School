import React, {Component} from "react";
import PropTypes from "prop-types";
import clsx from 'clsx';
import {withStyles} from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import Typography from '@material-ui/core/Typography';
import { formatDate } from '../../../helpers/utils';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';
import profile from "../../../assets/images/undraw_profile_6l1l.svg";

const style =theme => ({
    root: {
        padding: theme.spacing(3, 2),
    },
    info : {
        margin : "15px",
    },
    card: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
});

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state={
            value: 0,
            expanded: false,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleExpandClick = this.handleExpandClick.bind(this);
    }
    handleChange(event, newValue) {
        this.setState({
            value: newValue,
        });
    }
    handleExpandClick() {
        this.setState({
            expanded: !this.state.expanded,
        })
    }
    render() {
        const { classes, details } = this.props;
        const expanded = this.state.expanded;
        return (
            <Card className={classes.card}>
                <CardHeader
                    avatar={
                        <Avatar variant="rounded">
                            <NavigateBeforeIcon
                                style={{ fontSize: 50 }}
                                onClick={this.props.close}
                            />
                        </Avatar>
                    }
                    title={details.firstName+" "+details.lastName}
                    subheader={formatDate(details.dob)}
                />
                <CardMedia
                    className={classes.media}
                    image={profile}
                    title="Profile"
                />
                <CardActions disableSpacing>
                    <IconButton
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded,
                        })}
                        onClick={this.handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent className={classes.info}>
                        <Typography variant="overline" display="block" gutterBottom>
                            Email   : {details.email}<br/>
                            Name    : {details.firstName+" "+details.lastName}<br/>
                            Phone   : {details.phone}<br/>
                            Age   : {details.age} years<br/>
                            Gender   : {details.gender}<br/>
                            Height   : {details.height}cm<br/>
                            Blood Group   : {details.bloodType}<br/>
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>
        );
    }
}
Profile.propTypes = {
    classes: PropTypes.object.isRequired,
    details: PropTypes.object.isRequired,
    close: PropTypes.func.isRequired,
};

export default withStyles(style)(Profile);