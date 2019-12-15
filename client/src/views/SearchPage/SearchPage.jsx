import React from "react";
import MaterialTable from "material-table";
import * as PropTypes from "prop-types";
import {loadPatientRecords} from "./actions";
import {connect} from "react-redux";

class SearchRecords extends React.Component {
    componentDidMount() {
        this.props.load();
    }

    render() {
        return (
            <MaterialTable
                title="Patients"
                columns={[
                    { title: 'First Name', field: 'firstName' },
                    { title: 'Last Name', field: 'lastName' },
                    { title: 'Mobile', field: 'phone' },
                    { title: 'Age', field: 'age' },
                ]}
                data={this.props.records}
                actions={[
                    {
                        icon: 'save',
                        tooltip: 'Save User',
                    }
                ]}
            />
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
