// Google map
(g=>{var h,a,k,p="The Google Maps JavaScript API",c="google",l="importLibrary",q="__ib__",m=document,b=window;b=b[c]||(b[c]={});var d=b.maps||(b.maps={}),r=new Set,e=new URLSearchParams,u=()=>h||(h=new Promise(async(f,n)=>{await (a=m.createElement("script"));e.set("libraries",[...r]+"");for(k in g)e.set(k.replace(/[A-Z]/g,t=>"_"+t[0].toLowerCase()),g[k]);e.set("callback",c+".maps."+q);a.src=`https://maps.${c}apis.com/maps/api/js?`+e;d[q]=f;a.onerror=()=>h=n(Error(p+" could not load."));a.nonce=m.querySelector("script[nonce]")?.nonce||"";m.head.append(a)}));d[l]?console.warn(p+" only loads once. Ignoring:",g):d[l]=(f,...n)=>r.add(f)&&u().then(()=>d[l](f,...n))})
      ({key: "AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg", v: "weekly"});
      
// Theme toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('night-mode');
});

// Form validation
const form = document.getElementById('registration-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Add your form submission logic here
    alert('Registration submitted successfully!');
});

// Loadin google map during runtime
let geoLocation;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  geoLocation = new Map(document.getElementById("map"), {
    center: { lat: 40.7301259, lng: -73.578066 },
    zoom: 8,
  });
}

initMap();

// Timeline
const schedule = document.getElementById('schedule');
const events = [
    { date: '2024-04-15', name: 'Opening Day' },
    { date: '2024-07-08', name: 'Mid-Season Tournament' },
    { date: '2024-07-09', name: 'Mid-Season Tournament' },
    { date: '2024-09-20', name: 'Season Finals' },
    { date: '2024-09-30', name: 'Closing Ceremony' }
];

function createTimeline() {
    const timeline = document.createElement('div');
    timeline.classList.add('timeline');

    events.forEach((event, index) => {
        const item = document.createElement('div');
        item.classList.add('timeline-item');
        item.classList.add(index % 2 === 0 ? 'left' : 'right');

        const content = document.createElement('div');
        content.classList.add('timeline-content');

        const date = document.createElement('h3');
        date.textContent = event.date;

        const name = document.createElement('p');
        name.textContent = event.name;

        content.appendChild(date);
        content.appendChild(name);
        item.appendChild(content);
        timeline.appendChild(item);
    });

    schedule.appendChild(timeline);
}

createTimeline();

// Animated cricket ball with scroll to top functionality
const cricketBall = document.createElement('img');
cricketBall.id = 'cricket-ball';
cricketBall.src = 'https://cdn-icons-png.flaticon.com/128/1099/1099680.png'; // Replace with actual image URL
cricketBall.alt = 'Cricket ball';
document.body.appendChild(cricketBall);

cricketBall.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Show/hide cricket ball based on scroll position
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        cricketBall.style.display = 'block';
    } else {
        cricketBall.style.display = 'none';
    }
});