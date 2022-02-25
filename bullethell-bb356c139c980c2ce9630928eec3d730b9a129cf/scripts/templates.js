const AI = {};
const BULLET = {};
const MODEL = {};
const POWERUP = {};
const SPRITE = {};
const WEAPON = {};


// Models

MODEL.basicBullet = function(e) {
    fill('#ff0000');
    ellipse(e.pos.x, e.pos.y, e.radius, e.radius);
};

MODEL.player = function(e) {
    image.src = '..\sprites\player.png';
    image.onload = function(){
      context.drawImage(image, 0, 0);
    }
    
    //------------------------------
    //push();
    //translate(e.pos.x, e.pos.y);

    //// Thruster
    //fill('#7C8A99');
    //stroke(0);
    //rectMode(RADIUS);
    //rect(-0.5, 4, 6, 10);

    //// Rear fins
    //fill('#ACBAC9');
    //triangle(3, 2, 3, 10, 22, 16);
    //triangle(-3, 2, -3, 10, -22, 16);

    //// Wings
    //fill('#BDC3C7');
    //triangle(1, 3, 1, -24, 12, 6);
    //triangle(-1, 3, -1, -24, -12, 6);

    //// Canopy
    //fill('#29C5FF');
    //ellipse(0, 1, 6, 8);

    //pop();
};


// AI


// Bullets

BULLET.basic = {
    // Display
    model: MODEL.basicBullet,
    // Physics
    radius: 5
};


// Powerups


// Sprites

SPRITE.player = {
    // Display
    model: MODEL.player,
    // Physics
    radius: 14,
    // Stats
    hp: 999
};


// Weapons