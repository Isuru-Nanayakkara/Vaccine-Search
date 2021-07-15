var interval = setInterval(function() {
    if(document.readyState === 'complete') {
        clearInterval(interval);
        getVaccineCentersList();
    }    
}, 100);

function getVaccineCentersList() {
    // const Url = `https://baroque-chaise-38790.herokuapp.com/${encodeURI('https://vaccine.covid19.gov.lk/cz-portal-backend-service/api/v1/vsession/list')}`
    const Url = 'https://vaccine.covid19.gov.lk/cz-portal-backend-service/api/v1/vsession/list'

    fetch(Url)
    .then(response => response.json())
    .then(data => { 
        for(const obj of data) {
            let row = document.createElement('tr');
            row.appendChild(document.createElement('td')).textContent = obj.date;
            row.appendChild(document.createElement('td')).textContent = obj.dose;
            row.appendChild(document.createElement('td')).textContent = obj.ageGroup;
            row.appendChild(document.createElement('td')).textContent = obj.vaccineType;
            row.appendChild(document.createElement('td')).textContent = obj.mohCenter;

            const table = document.getElementsByClassName('table')[0];
            table.appendChild(row);
        }
     })
    .catch(error => console.log(error))
}