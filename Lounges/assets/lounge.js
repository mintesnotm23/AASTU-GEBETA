const Lounges=[{
    name:"Kibnesh Lounge",
    Location:"Block 43 or Behind Engineering Library",
    image:'./Resources/images/Kibnesh.jpg',

    
},
    {
        name:"A+ Lounge",
        Location:"Block 52 or Behind Red Carpet",
        image:'./Resources/images/A+.jpg',
    },
    {
        name:"KK Lounge",
        Location:"Block 42 or Beside the student cafe",
        image:'./Resources/images/KK.jpg',
    },

    {
        name:"Serategnoch Lounge",
        Location:"Block 54",
        image:'./Resources/images/Sera.jpg',
    },


    {
        name:"Memhiran Lounge",
        Location:"Block 53",
        image:'./Resources/images/Mem.jpg',
    },

    {
        name:"SewSabi Lounge",
        Location:"CLOSED AT THE MOMENT!",
        image:'./Resources/images/SewSabi.jpg',
    },
]

const main = document.querySelector('.main');
var buttons = document.querySelectorAll('.btns');
var newDiv= document.createElement('div');

newDiv.className = "newdiv"

i=0;
buttons.forEach((button)=>{
    button.addEventListener('click',()=>{

       console.log(button.id);
       i++ 
       main.style.animation = "none"
       loungePick(button.id)
      
       main.style.animation = "scaler 500ms ease alternate" 

       setTimeout(()=>
       {
        main.style.animation = '';
       },200)

    })
})

i=0
function loungePick(idName)
{
    Lounges.forEach((lounge)=>
    {
    
        if(idName == lounge.name)
        {
            
            main.innerHTML="";
            var header = document.createElement('h1');
            header.innerHTML = "Name: " +`${lounge.name}` + '<br>';
            main.appendChild(header);
        
            var image = document.createElement('img');
            image.src = lounge.image
            main.appendChild(image);

            var location = document.createElement('h2')
            location.innerHTML = "Location: " + `${lounge.Location}`
            main.appendChild(location)

        }
    
})
}
