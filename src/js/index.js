const timeElem = document.getElementById('timeElem');
let time = 1800;

const updateTimeElem = () => {
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;
  seconds = seconds < 10 ? '0' + seconds:
  seconds;
  timeElem.innerHTML = `${minutes}:${seconds}`;
  time--;
};
setInterval(updateTimeElem, 1000);



const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
};

