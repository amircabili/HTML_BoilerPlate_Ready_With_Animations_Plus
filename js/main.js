

const allBboxes = document.querySelectorAll("#box1, #box2, #box3, #box4, #box5, #box6, #box7");
// page1.style.display = 'block'
// page2.style.display = 'none'

allBboxes.forEach(input => input.addEventListener('click', event => {
    console.log("querySelectorAll");

    //if(page1.style.display == 'none'){
    if (page1.classList.contains('goOut')) {
      // page1.style.display = 'block'
      page1.classList.add("goIn")
      page1.classList.remove("goOut")
      //   page2.style.display = 'none'
      page2.classList.add("goOut")
      page2.classList.remove("goIn")
    } else{
     // page2.style.display = 'block'
      page2.classList.add("goIn")
      page2.classList.remove("goOut")
      //  page1.style.display = 'none'
      page1.classList.add("goOut")
      page1.classList.remove("goIn")
    }
 }
 )
);
