var interval = setInterval(function() {
    if(document.readyState === 'complete') {
        clearInterval(interval);
        getVaccineCentersList();
    }    
}, 100);

function getVaccineCentersList() {
    const Url = "https://baroque-chaise-38790.herokuapp.com/https://vaccine.covid19.gov.lk/cz-portal-backend-service/api/v1/vsession/list"

    fetch(Url)
    .then(response => {
        if (response.ok) return response.json()
        throw new Error('Network response was not ok.')
    })
    .then(data => console.log(data.contents));
}