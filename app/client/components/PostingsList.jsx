Postings = new Mongo.Collection('postings');

PostingsList = React.createClass({
  mixins: [ReactMeteorData],
 
  getMeteorData() {
    return {
      postings: Postings.find({}).fetch()
    }
  },
  renderPostings() {
    return this.data.postings.map((posting) => {
      return <Posting key={posting._id} posting={posting} />;
    });
  },
  render() {
    return (
      <div className="container">
	{this.renderPostings()}
      </div>
    );
  }
});