Welcome = React.createClass({
  render() {
    return (
        <div className="container centered">
            <p className="title">Bludo</p>
            <div className="row">
                <a href="/donor" id="donor-mode">
                    <img src="img/donor.png"/>
                    <span className="menu-item">   I'm a donor</span>
                </a>
            </div>
            <div className="row">
                <a href="/patient" id="patient-mode">
                    <img src="img/patient.png"/>
                    <span className="menu-item">   I'm a patient</span>
                </a>
            </div>
        </div>
    );
  }
});
