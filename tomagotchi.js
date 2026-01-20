 var h = 100, b = 100, e = 100, g = 100;

  
        window.addEventListener('click', function() {
            const audio = document.getElementById('background-music');
            if (audio && audio.paused) {
                audio.play().catch(err => console.log('Autoplay failed:', err));
            }
        }, { once: true });

        function toon() {
            document.getElementById('h').innerHTML = h;
            document.getElementById('b').innerHTML = b;
            document.getElementById('e').innerHTML = e;
            document.getElementById('g').innerHTML = g;
            document.getElementById('pet').innerHTML = (h < 30 || b < 30 || e < 30) ? '😢' : '😊';
        }

        function eten() {
            h += 20;
            if (h > 100) h = 100;
            document.getElementById('msg').innerHTML = 'Nom nom!';
            toon();
        }

        function speel() {
            b += 25;
            e -= 10;
            if (b > 100) b = 100;
            if (e < 0) e = 0;
            document.getElementById('msg').innerHTML = 'Leuk!';
            toon();
        }

        function slaap() {
            e += 30;
            if (e > 100) e = 100;
            document.getElementById('msg').innerHTML = 'Zzz...';
            toon();
        }

        function werk() {
            g += 15;
            h -= 20;
            if (g > 500) g = 500;
            if (h < 0) h = 0;
            document.getElementById('msg').innerHTML = 'Hard werken!';
            toon();
        }

        setInterval(function () {
            h -= 2;
            b -= 1;
            e -= 1;
            g -= 1;
            if (h < 0) h = 0;
            if (b < 0) b = 0;
            if (e < 0) e = 0;
            if (g < 0) g = 0;
            if (h === 0 || b === 0 || e === 0) {
                document.getElementById('msg').innerHTML = 'Je Tamagotchi is overleden.';
                document.getElementById('pet').innerHTML = '💀';
            }
            toon();
        }, 3000);


const RESET_DELAY_MS = 2000;

function reset()   {

    h = 100;
    b = 100;
    e = 100;
    g = 100;
    document.getElementById('msg').innerHTML = 'Je hebt een nieuw Tamagotchi gekregen!';
    toon();

}
function dood() {
    h = 0;
    b = 0;
    e = 0;
    g = -100;
    document.getElementById('msg').innerHTML = 'Je Tamagotchi is overleden.';
    toon();
    document.getElementById('pet').innerHTML = '💀';
    setTimeout(reset, RESET_DELAY_MS);      
}

function toggleMenu() {
            const menu = document.getElementById('myLinks');
            menu.classList.toggle('active');
        }

function acceptCookies() {
            document.getElementById('cookieConsent').style.display = 'none';
            
        }

function declineCookies() {
            document.getElementById('cookieConsent').style.display = 'none';
            alert('Je hebt cookies geweigerd. Sommige functies werken mogelijk niet correct.');
        }

 function toggleDarkMode() {
           document.getElementById('darkModeToggle').classList.toggle('active');
           document.body.classList.toggle('dark-mode');
           const isDarkMode = document.body.classList.contains('dark-mode');
           localStorage.setItem('darkMode', isDarkMode);
           
        }



        window.onload = function() {
            if (localStorage.getItem('darkMode') === 'true') {
                document.body.classList.add('dark-mode');
            }
            document.getElementById('cookieConsent').style.display = 'block';
        };
