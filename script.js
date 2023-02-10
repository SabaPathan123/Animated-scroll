const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checkBoxes);

checkBoxes();

function checkBoxes(){
    const maxHeight = window.innerHeight / 5 * 4;

    

    boxes.forEach(box => {
        const topBox = box.getBoundingClientRect().top;
        if(topBox < maxHeight){
            box.classList.add("show");
        }
        else{
            box.classList.remove("show"); 
        }
    })
}