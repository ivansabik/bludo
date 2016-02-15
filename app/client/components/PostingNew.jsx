PostingNew = React.createClass({
    getInitialState: function() {
        return { showSuccess: false };
    },
  handleNewPosting(e) {
    e.preventDefault();
    var firstName = e.target.firstName.value;
    var lastName = e.target.lastName.value;
    var contactNumber = e.target.contactNumber.value;
    var email = e.target.email.value;
    var address = e.target.address.value;
    var bloodGroup = e.target.bloodGroup.value;

    var url = '/posting/edit/' + '2k1j21';
    Donors.insert({
        firstName: firstName,
        lastName: lastName,
        contactNumber: contactNumber,
        email: email,
        address: address,
        bloodGroup: bloodGroup
    });
    this.setState({ showSuccess: true, url: url});
    },
  render () {
    return (
      <div>
        <Modal
          isOpen={ this.props.isOpen }
          close={ this.props.closeModal }
          title="Create new donor posting">
        { this.state.showSuccess ? 'Thanks! Your url is '+this.state.url : null }
        <div className={this.state.showSuccess ? 'hidden' : ''}>
        <form onSubmit={this.handleNewPosting}>
            <input placeholder="Your first name" id="firstName" type="text"/>
            <input placeholder="Your last name" id="lastName" type="text"/>
            <input id="email" placeholder="Your email address" type="email" className="validate"/>
            <input id="contactNumber" placeholder="Your contact number" type="tel" className="validate"/>
            <input placeholder="Your address" id="address" type="text"/>
            <label for="bloodGroup">Your bloodtype</label>
            <select id="bloodGroup">
                <option value="O−">O−</option>
                <option value="O+">O+</option>
                <option value="A+−">A+−</option>
                <option value="B−">B−</option>
                <option value="B+">B+</option>
                <option value="AB−">AB−</option>
                <option value="AB+">AB+</option>
            </select>
            <button id="new">New posting</button>
        </form>
        </div>
        <button onClick={ this.props.closeModal }>Close</button>
        </Modal>
      </div>
    );
  }
});
