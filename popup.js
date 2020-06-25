const ONE_DAY = 1000 * 60 * 60 * 24;
let now = new Date();
let currentYear = now.getFullYear();
let start = new Date(currentYear, 0, 0);
let diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
const day = Math.floor(diff / ONE_DAY);

let fullJulianElement = document.getElementById('fullJulian');
let dayOfYearElement = document.getElementById('dayOfYear');
let suffixElement = document.getElementById('suffix');
let bigCenterElement = document.getElementById('bigCenterJulian');

const currentYearString = `${currentYear}`;
const yearLastTwo = currentYearString.substring(currentYearString.length-2);
const fullJulian = ` ${yearLastTwo}${day}`;
let suffix = day === 1 ? 'st' : (day === 2 ? 'nd' : (day === 3 ? 'rd' : 'th'));
suffix = `${suffix} `; // add space

fullJulianElement.innerHTML = fullJulian;
bigCenterElement.innerHTML = fullJulian;;
dayOfYearElement.innerHTML = day;
suffixElement.innerHTML = suffix;

let copyElement = document.getElementById('copyIcon');
copyElement.addEventListener('click', function(event) {
    navigator.clipboard.writeText(fullJulian).then(function() {
        let container = document.getElementById('mainContainer');
        const newDiv = document.createElement('div');
        newDiv.innerHTML = 'copied!';
        newDiv.id = 'newDiv';
        newDiv.style.backgroundColor = 'red';
        newDiv.style.borderRadius = '15%';
        newDiv.style.width = '60%';
        newDiv.style.textAlign = 'center';
        newDiv.classList.add('data-row')
        container.append(newDiv);
        setTimeout(() => {
            document.getElementById('newDiv').remove();
        }, 3000);
    });
})
