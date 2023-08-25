//add default local storage class on body
document.body.classList.add(localStorage.getItem("pagecolor"));

var el=document.querySelectorAll(".color-swetcher li");
var classeslist=[];
for(var i=0;i<el.length;i++)
{    //returns the value of a specified attribute (data-color) on the element and push it in classeslist.
    classeslist.push(el[i].getAttribute("data-color"));
    //When admin clicks on the button color do this function,
    el[i].addEventListener('click',function(){
    //remove all old classes
    //...classeslist instead of classlist[red] [blud] ...
    document.body.classList.remove(...classeslist);
    //add current class from li data-color
    document.body.classList.add(this.getAttribute("data-color"));
    //add data to local storage
    localStorage.setItem("pagecolor",this.getAttribute("data-color"));
    },
    //return false
    false)
}
