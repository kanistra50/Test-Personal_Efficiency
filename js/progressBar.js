//ProgressBar

function move(iteration, lengthArr = 0) {       
    const stop = iteration * 100 / lengthArr;
    const elem = document.getElementById("Bar");
    let width = lengthArr ? (iteration - 1) * 100 / lengthArr : 0;

    if (!!lengthArr) {
        let sett = 0
        if (iteration != 0) {
            sett = 12; 
        }
        const id = setInterval(frame, sett);
        function frame() {
           if (width >= stop) {
               clearInterval(id);
           } else {
               width ++; 
               elem.style.width = width + '%'; 
           }
        }
    } else {
        const id = setInterval(back, 120);
        function back() {
            if (width > stop) {
                width--;
                elem.style.width = width + '%';
            } else {
                clearInterval(id);
            }
        }
    }   
}
