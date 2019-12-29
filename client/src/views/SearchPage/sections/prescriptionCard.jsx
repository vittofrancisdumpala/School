import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import PropTypes from "prop-types";
import { formatDate } from '../../../helpers/utils';
import {withStyles} from "@material-ui/core";
import report from "../../../assets/images/undraw_blog_anyj.svg";
import FavoriteIcon from '@material-ui/icons/Favorite';

const style =theme => ({
    card: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 151,
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    playIcon: {
        height: 38,
        width: 38,
    },
    heart: {
        color: red[500],
    },
});

class PrescriptionCard extends Component {
    render() {
        const { classes, prescription } = this.props;
        return (
            <Card className={classes.card}>
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                        <Typography component="h5" variant="h5">
                            {formatDate(prescription.createdAt)}
                        </Typography>
                    </CardContent>
                    <div className={classes.controls}>
                        <IconButton aria-label="bpm">
                            {prescription.heartRate}<FavoriteIcon className={classes.heart}/>
                        </IconButton>
                        <Typography component="h6" variant="h6">
                            {prescription.bp}
                        </Typography>
                    </div>
                </div>
                <CardMedia
                    className={classes.cover}
                    image={report}
                    title={formatDate(Date.now())}
                />
            </Card>
        );
    }
}

PrescriptionCard.propTypes = {
    classes: PropTypes.object.isRequired,
    prescription: PropTypes.object.isRequired,
};
export default withStyles(style)(PrescriptionCard);