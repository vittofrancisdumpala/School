import React from "react";
import MaterialTable from "material-table";
import * as PropTypes from "prop-types";
import {loadPatientRecords} from "./actions";
import {connect} from "react-redux";
import PatientInfoDialog from "./sections/patientInfoDialog";

class SearchRecords extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            detail: {},
        };
        this.rowClick = this.rowClick.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }
    componentDidMount() {
        this.props.load();
    }

    rowClick(event, rowData) {
        this.setState({
            open: true,
            detail: rowData,
        });
    }

    handleClose() {
        this.setState({
            open: false,
            detail:{},
        });
    }

    render() {
        return (
            <div>
                <MaterialTable
                    title="Patients"
                    columns={[
                        { title: 'First Name', field: 'firstName' },
                        { title: 'Last Name', field: 'lastName' },
                        { title: 'Mobile', field: 'phone' },
                        { title: 'Age', field: 'age' },
                    ]}
                    data={this.props.records}
                    onRowClick={this.rowClick}
                />
                <PatientInfoDialog
                    open={this.state.open}
                    details={this.state.detail}
                    close={this.handleClose}
                />
            </div>
        )
    }
}

SearchRecords.propTypes = {
  records: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => ({
    records: state.data.patients,
});
const mapDispatchToProps = dispatch => ({
    load: () => {
        dispatch(loadPatientRecords());
    }
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchRecords);
