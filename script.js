const container = document.querySelector("#container");  
    for (let i = 0; i < 64; i++) {
        const div = document.createElement("div"); 
        div.classList.add("newDiv"); 
        container.appendChild(div); 
    }
