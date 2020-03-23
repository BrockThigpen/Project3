
let cvs = document().getElementById('canvas');
let ctx = cvs.getContext('2d');

// load images

let plane = new Image();
let bg = new Image();
let fg = new Image();
let boltNorth = new Image();
let boltSouth = new Image();

plane.src = 'images/plane.png';
bg.src = 'images/bg.png';
fg.src = 'images/fg.png';
boltNorth.src = 'images/boltNorth.png';
boltSouth.src = 'images/boltSouth.png';


// some variables

let gap = 150;
let constant;

let bX = 30;
let bY = 30;

let gravity = 1.5;

let score = 0;

// audio files

let fly = new Audio();
let crash = new Audio();
let scor = new Audio();

fly.src = 'sounds/fly.mp3';
crash.src = 'sounds/crash.mp3';
scor.src = 'sounds/score.mp3';

// on key down

document.addEventListener('keydown',moveUp);

function moveUp(){
    bY -= 15;
    fly.play();
}

// bolt coordinates

let bolt = [];

bolt[0] = {
    x : cvs.width,
    y : 0
};

// draw images

function draw(){
    
    ctx.drawImage(bg,0,0);
    
    
    for(let i = 0; i < bolt.length; i++){
        
        constant = boltNorth.height+gap;
        ctx.drawImage(boltNorth,bolt[i].x,bolt[i].y);
        ctx.drawImage(boltSouth,bolt[i].x,bolt[i].y+constant);
             
        bolt[i].x--;
        
        if( bolt[i].x == 125 ){
            bolt.push({
                x : cvs.width,
                y : Math.floor(Math.random()*boltNorth.height)-boltNorth.height
            }); 
        }

        // detect collision
        
        if( bX + plane.width >= bolt[i].x && bX <= bolt[i].x + boltNorth.width && (bY <= bolt[i].y + boltNorth.height || bY+plane.height >= bolt[i].y+constant) || bY + plane.height >=  cvs.height - fg.height){
         location.reload(); // reload the page
        }
        
        if(bolt[i].x == 5){
            score++;
            scor.play();
        }
        
        
    }

    ctx.drawImage(fg,0,cvs.height - fg.height);
    
    ctx.drawImage(plane,bX,bY);
    
    bY += gravity;
    
    ctx.fillStyle = '#000';
    ctx.font = '20px Verdana';
    ctx.fillText('Score : '+score,10,cvs.height-20);
    
    requestAnimationFrame(draw);
    
}

draw();


