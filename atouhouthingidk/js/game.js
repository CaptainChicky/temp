let bg = [0, 0, 0];


//fps calculator

let avgFPS = 0;
let numFPS = 0;
let showFPS = false;

//hitboxes
let showHitbox = false;

//more stuff
let bullets;
let enemies;
let pl;
let powerups;

//fps thing calculate on sidebar
function calcFPS() {
    let fps = frameRate();
    avgFPS += (fps - avgFPS) / ++numFPS;

    document.getElementById('fps').innerHTML = 'FPS: ' + fps.toFixed(1);
    document.getElementById('avgfps').innerHTML = 'Avg. FPS: ' + avgFPS.toFixed(1);
}

// Reset all entities
// TODO spawn player
function resetEntities() {
    bullets = [];
    enemies = [];
    powerups = [];

    pl = new Sprite(width/2, height/2, SPRITE.player);

    // Spawn bullets
    for (let i = 0; i < 50; i++) {
        bullets.push(new Bullet(random(width), random(height), PI/4, 3, BULLET.basic));
    }
}

// Updaet game status on sidebar
function updateStatus() {
    document.getElementById('level').innerHTML = 'Level 1';
    document.getElementById('hp').innerHTML = 'HP: ' + pl.hp + '/' + pl.maxHp;
    document.getElementById('score').innerHTML = 'Score: 0';
}


/* Main p5.js functions */

function setup() {
    let c = createCanvas(600, 650);
    c.parent('game');

    // Set drawing modes
    // The circle is for sprite real hitbox
    ellipseMode(RADIUS);

    //------------------
    //some broken code 
    //tries to insert image fails epicly
    //        let img = new Image();
    //        img.onload = function() {
    //            context.drawImage(img, 10, 10);
    //        };
    //        img.src = './sprites/player.png';
    //------------------

    // Initialize entities
    resetEntities();
}

function draw() {
    background(bg);

    // Update status display
    updateStatus();
    calcFPS();

    // Update entities
    mainLoop(bullets);
    mainLoop(enemies);
    mainLoop(powerups);
    pl.act();
}


/* User input functions */

function keyPressed() {
    if (key === 'F') {
        showFPS = !showFPS;
        document.getElementById('debug').style.display = showFPS ? 'block' : 'none';
    }

    if (key === 'H') showHitbox = !showHitbox;
}
