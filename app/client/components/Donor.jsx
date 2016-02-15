Donor = React.createClass({
  propTypes: {
    firstName: React.PropTypes.object.isRequired,
    lastName: React.PropTypes.object.isRequired,
    contactNumber: React.PropTypes.object.isRequired,
    email: React.PropTypes.object.isRequired,
    address: React.PropTypes.object.isRequired,
    bloodGroup: React.PropTypes.object.isRequired,
  },
  render() {
    return (
        <ul>
            <li>{this.props.donor.firstName}</li>
            <li>{this.props.donor.lastName}</li>
            <li>{this.props.donor.contactNumber}</li>
            <li>{this.props.donor.email}</li>
            <li>{this.props.donor.address}</li>
            <li>{this.props.donor.bloodGroup}</li>
        </ul>
    );
  }
});

