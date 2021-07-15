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
            row.setAttribute('class', 'list-item');
            row.appendChild(document.createElement('td')).textContent = new Date(obj.date).toDateString();
            row.appendChild(document.createElement('td')).textContent = obj.ageGroup;
            row.appendChild(document.createElement('td')).textContent = obj.mohCenter;
            row.appendChild(document.createElement('td')).textContent = obj.centerName;
            row.appendChild(document.createElement('td')).textContent = obj.dose;
            row.appendChild(document.createElement('td')).textContent = obj.vaccineType;
            
            const table = document.getElementsByClassName('table')[0].getElementsByTagName('tbody')[0];
            table.appendChild(row);
        }
     })
    .catch(error => console.log(error))
}

$(document).on("long-press", ".list-item" , function(e) {
    e.preventDefault();
    
    let row = $(e.target).closest('tr').html();

    let date = $(row)[0].textContent;
    let area = $(row)[2].textContent;
    let center = $(row)[3].textContent;
    let dose = $(row)[4].textContent;
    let vaccine = $(row)[5].textContent;

    let message = `Get the ${dose} of ${vaccine} at ${center}, ${area} on ${date}`

	if(navigator.share) {
        navigator.share({
            title: 'COVID-19 Vaccination Program',
            text: message,
            url: 'https://isuru-nanayakkara.github.io/Vaccine-Search/'
        });
    }
});