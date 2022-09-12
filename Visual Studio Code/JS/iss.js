class ISSRenderer {
    endpointurl = 'https://api.wheretheiss.at/v1/satellites/25544';


    constructor(data) {
        this.data = data;
        this.fetchData();
        setInterval(this.doAutoFetch, 500);
    }

    async fetchData() {
        let response = await fetch(this.endpointurl);
        this.data = await response.json();
        this.updateUI();
        console.log(this.data)

    };


    updateUI() {
        $('#iss').append(`<div class="col iss"><div/>`)
        $('#iss-latitude').text(this.data.latitude);
        $('#iss-longitude').text(this.data.longitude);
        $('#iss-altitude').text(this.data.altitude);
        $('#iss-velocity').text(this.data.velocity);
        $('#iss-visibility').text(this.data.visibility);
        $('#iss-footprint').text(this.data.footprint);
        $('#iss-timestamp').text(this.data.timestamp);
        $('#iss-daynum').text(this.data.daynum);
        $('#iss-solar_lat').text(this.data.solar_lat);
        $('#iss-solar_lon').text(this.data.solar_lon);
        $('#iss-units').text(this.data.units);
    }

    doAutoFetch(){
        if ($('#iss-iss-autofetch').prop('checked')){
            issRenderer.fetchData();
        }
    }
}

var issRenderer = new ISSRenderer(); 