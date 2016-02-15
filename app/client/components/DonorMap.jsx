DonorMap = React.createClass({
    getInitialState () {
      return {
        postingNewOpen : false
      };
    },
    openModal () {
      this.setState({
        postingNewOpen : true
      });
    },
    closeModal () {
      this.setState({
        postingNewOpen : false
      });
    },
    componentDidMount: function() {
        L.Icon.Default.imagePath = 'packages/bevanhunt_leaflet/images';
        var map = L.map('map');
        var w = window.innerWidth;
        var h = window.innerHeight;
        $('#map').css({width: w+'px', height: h+'px'});
        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiaXZhbnNhYmlrIiwiYSI6ImNpa2l0dWlmeTA0c2x0emo3cms2MGJwZGMifQ.U9z4vWm8_4uUAHipnDE_1w', {
            maxZoom: 18,
            id: 'mapbox.streets'
        }).addTo(map);
        map.setView([19.42705, -99.127571], 18, {
            reset: true 
        });
        $.getScript('js/l.control.geosearch.js', function() {
            $.getScript('js/l.geosearch.provider.google.js', function() {
                new L.Control.GeoSearch({
                        provider: new L.GeoSearch.Provider.Google(),
                        position: 'topcenter',
                        showMarker: false,
                        retainZoomLevel: true,
                }).addTo(map);
            })
        })
        marker = L.marker([19.42705, -99.127571]).addTo(map);
        map.on('click', this.onMapClick);
    },
    onMapClick: function(e) {
        marker.setLatLng(e.latlng);
    },
  render() {
    return (
        <div id="map">
            <div className="add-box">
                <div className="fixed-action-btn">
                    <a onClick={this.openModal} className="btn-floating btn-large waves-effect waves-light red" id="add-posting"><i className="material-icons">add</i></a>
                </div>
            </div>
            <PostingNew closeModal={ this.closeModal } isOpen={ this.state.postingNewOpen } shouldHide="false" />
        </div>
    );
  }
});