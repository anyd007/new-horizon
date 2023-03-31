let couterDisplay = document.querySelector("#counter");
const br = document.createElement('br');
const eventSection = document.querySelector('#events')
const eventMenuBtn = document.querySelector('.event-item')

// ustawiamy datę docelową
const countDownDate = new Date("Apr 01, 2023 19:00:00").getTime();
const closeSectionDate = new Date("Apr 02, 2023 00:00:00").getTime();

// wywołujemy funkcję co 1 sekundę
const counter = setInterval(function () {

    // pobieramy aktualną datę i godzinę
    const now = new Date().getTime();

    // obliczamy różnicę między aktualną datą a datą docelową
    const distance = countDownDate - now;
    const closeSection =  closeSectionDate - now;

      // obliczamy dni, godziny, minuty i sekundy pozostałe do daty docelowej
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  let hoursDisplay = document.createElement("p")
  let daysDisplay = document.createElement("p")
  
  days === 1 ? daysDisplay.textContent = "dzień" : daysDisplay.textContent = "dni"

  let secDisplay = seconds <= 9 ? `0${seconds}` : `${seconds}`
  
  if(hours === 1){
    hoursDisplay.textContent = "godzina"
  }else if(hours <= 4){
    hoursDisplay.textContent = "godziny"
  }else if(hours <=  20 || hours === 0){
        hoursDisplay.textContent = "godzin"
    }
  else{

    hoursDisplay.textContent = "godziny"
  }
  
    // wyświetlamy wynik w konsoli
   couterDisplay.innerHTML = `${days} ${daysDisplay.textContent} <br> ${hours} ${hoursDisplay.textContent} ${minutes} min. ${secDisplay} sek.`

     // zatrzymujemy odliczanie, gdy osiągnięto datę docelową
  if (distance < 0) {
    clearInterval(counter);
    couterDisplay.textContent = "ZACZYNAMY !!!"
  }

  if (closeSection < 0) {
    eventMenuBtn.style.display = "none"
    eventSection.style.display = "none"
  }

}, 1000)