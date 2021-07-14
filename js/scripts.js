var interval = setInterval(function() {
    if(document.readyState === 'complete') {
        clearInterval(interval);
        getVaccineCentersList();
    }    
}, 100);

function getVaccineCentersList() {
    const Url = "https://mysterious-eyrie-27080.herokuapp.com/https://vaccine.covid19.gov.lk/cz-portal-backend-service/api/v1/vsession/list"

    fetch(Url)
    .then(response => response.json())
    .then(data => console.log(data));
}