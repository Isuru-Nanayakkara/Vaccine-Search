if(document.readyState === 'complete') {
    getVaccineCentersList();
}

var interval = setInterval(function() {
    if(document.readyState === 'complete') {
        getVaccineCentersList();
        clearInterval(interval);
        done();
    }    
}, 100);

function getVaccineCentersList() {
    const Url = "https://vaccine.covid19.gov.lk/cz-portal-backend-service/api/v1/vsession/list"

    fetch(Url)
    .then(data => { return data.json()})
    .then(res => { console.log(res) })
}