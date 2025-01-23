document.getElementById("my_head").addEventListener("click", doStuff);

function doStuff() { // could do doStuff(e) if want to do stuff to e and it's properties
    document.getElementById("paragraph").innerHTML = "this is the new text";
    document.getElementById("paragraph").style.color = "blue";
    document.getElementById("image").src = "images/unicorns/unicorn (2).png";
    //e.innerHTML = "html";
}

