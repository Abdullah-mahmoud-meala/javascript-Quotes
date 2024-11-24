
var Queot =[
    {
        Queotscrept : "It's not what happens to you, but how you react to it that matters.",
        writer: "--Epictetus"
    },
    {
        Queotscrept :"You miss 100% of the shots you don't take.",
        writer: "--Wayne Gretzy"
    },
    {
        Queotscrept : "Resentment is like drinking poison and waiting for your enemies to die.",
        writer: "--Nelson Mandela"
    },
    {
        Queotscrept : "Do not take life too seriously. You will not get out alive.",
        writer: "--Elbert Hubbard"
    },
    {
        Queotscrept : "So many books, so little time.",
        writer: "--Frank Zappa"
    },
    {
        Queotscrept : "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        writer: "--Albert Einstein"
    },
    {
        Queotscrept : "A room without books is like a body without a soul.",
        writer: "--Mae West"
    },
    {
        Queotscrept : "You only live once, but if you do it right, once is enough.",
        writer: "--Frank Zappa"
    },
    {
        Queotscrept : "We accept the love we think we deserve.",
        writer: "--Stephen Chbosky"
    },
    
   
]




var same 
                 
function changeQueotes(){
  

           
   var y = Math.floor(Math.random() * Queot.length);
   
  if(y == same){
   
    y = Queot.length - same
  }

    
            document.getElementById("theQueott").innerHTML = `<q class="d-block mt-5 fs-2 fw-bold" id="sentacs">${Queot[y].Queotscrept}</q>
                        <p class="fs-2 mt-3 fw-bold"  id="writer">${Queot[y].writer}</p>` 
                         same = y

}

