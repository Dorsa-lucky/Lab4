
function show_time(){
    let d = new Date();
    let time = d.toLocaleDateString();
    console.log(time);
}

console.log(setInterval(show_time, 1000));