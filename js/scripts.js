var interval = setInterval(function() {
    if(document.readyState === 'complete') {
        clearInterval(interval);
        getVaccineCentersList();
    }    
}, 100);

function getVaccineCentersList() {
    // const Url = "https://vaccine.covid19.gov.lk/cz-portal-backend-service/api/v1/vsession/list"

    // fetch(Url, {
    //     method: 'GET',
    //     headers: { 
    //         'Content-Type': 'application/json',
    //         'X-Requested-With': 'XMLHttpRequest'
    // }})
    // .then(response => response.json())
    // .then(data => console.log(data));
    
    const Url = "https://mysterious-eyrie-27080.herokuapp.com/https://vaccine.covid19.gov.lk/cz-portal-backend-service/api/v1/vsession/list"
    
    fetch(Url, {
      "method": "GET",
      "headers": {
            "X-Requested-With": "XMLHttpRequest"
      }
    })
    .then(response => {
        if (response.ok) return response.json()
        throw new Error('Network response was not ok.')
    })
    .then(data => console.log(data.contents));
}