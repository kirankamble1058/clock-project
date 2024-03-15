function show_clock(){
    let h = document.getElementsByClassName('needle hr')[0];
    let m = document.getElementsByClassName('needle mn')[0];
    let s = document.getElementsByClassName('needle ss')[0];

    
    let date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    h.style.transform = `rotate(${30* hours + minutes/2}deg)`;
    m.style.transform =`rotate(${6* minutes }deg)`;
    s.style.transform =` rotate(${6 *seconds}deg)`;

    let sound

}
setInterval(show_clock,1000);

