let dodaj = document.getElementById('dodaj');
let usun = document.getElementById('usun');
let tekst = document.querySelector('p');

dodaj.onclick = function() {
    tekst.textContent = 'przykładowy tekst';
} 
usun.onclick = function() {
    tekst.textContent = '';
}