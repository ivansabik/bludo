Posting = React.createClass({
  propTypes: {
    lat: React.PropTypes.object.isRequired,
    lon: React.PropTypes.object.isRequired,
    ip: React.PropTypes.object.isRequired,
    timestamp: React.PropTypes.object.isRequired,
    editLink: React.PropTypes.object.isRequired,
    isActive: React.PropTypes.object.isRequired,
  },
  render() {
    return (
        <ul>
                <li>{this.props.posting.lat}</li>
                <li>{this.props.posting.lon}</li>
                <li>{this.props.posting.ip}</li>
                <li>{this.props.posting.timestamp}</li>
                <li>{this.props.posting.editLink}</li>
                <li>{this.props.posting.isActive}</li>
        </ul>
    );
  }
});
