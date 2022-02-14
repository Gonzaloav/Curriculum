function imprimeHola (){
    console.log ("Hola")
}

window.addEventListener("load", main)

function main (){
    console.log ("Sarting");
    const titulo = document.querySelector ("h1");
    titulo.addEventListener ("pointerenter", imprimeHola);
    const elements = Array.from (document.body.querySelectorAll ("*"));
    console.log (elements);
    const counters = elements.map(
        (item)=>{
        return{
            element: item, 
            Counter: 0,
        } 
        }
    )
}

   



