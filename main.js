var mobileViewport = window.matchMedia("screen and (max-width: 660px)");


    var person1 = document.getElementById("person1");
    var person2 = document.getElementById("person2");
    var person3 = document.getElementById("person3");
    var person4 = document.getElementById("person4");

    var persons = [person1, person2, person3, person4];
    
    function hideperson1() {
        person1.style.display = "flex";
        for(i = 1; i < persons.length; i++){
            persons[i].style.display = "none";
        }
    function shawAll(){
        for(i = 0; i < persons.length; i++){
            persons[i].style.display = "flex";
        }
    }
    };

   

if(mobileViewport.matches) {
hideperson1();

}
else{

}