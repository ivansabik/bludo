Donors = new Mongo.Collection('donors');

DonorsList = React.createClass({
  mixins: [ReactMeteorData],
 
  getMeteorData() {
    return {
      donors: Donors.find({}).fetch()
    }
  },
  renderDonors() {
    return this.data.donors.map((donor) => {
      return <Donor key={donor._id} donor={donor} />;
    });
  },
  render() {
    return (
      <div className="container">
	  {this.renderDonors()}
      </div>
    );
  }
});