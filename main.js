var canvas = new fabric.Canvas('myCanvas');
var player_x = 40;
var player_y = 80;
var b_w = 30;
var b_h = 30;
var player_img = "";
var block = "";

function addimg_p(){
fabric.Image.fromURL("player.png" , function(getImg1){
    player_img = getImg1;
    player_img.scaleToWidth(130);
    player_img.scaleToHeight(170);
    player_img.set({
        top:player_y,
        left:player_x
    });
    canvas.add(player_img);

    
    
});
}

function addimg_b(get_block){
    fabric.Image.fromURL(get_block , function(getImage2){
        block = getImage2;
        block.scaleToWidth(b_w);
        block.scaleToHeight(b_h);
        block.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block);
    });
}

window.addEventListener("keydown", kd);

function kd(x){
    key_n = x.keyCode;

    if(key_n == 38){
        console.log("up");
        up();
    }
    if(key_n == 40){
        console.log("down");
        down();
    }
    if(key_n == 37){
        console.log("left");
        left();
    }
    if(key_n == 39){
        console.log("right");
        right();
        }

    
    if(key_n == 67){
        console.log("cloud(c)");
        addimg_b('cloud.jpg');
    }
    if(key_n == 68){
        console.log("dark green(d)");
        addimg_b('dark_green.png');
    }
    if(key_n == 71){
        console.log("ground(g)");
        addimg_b('ground.png');
    }
    if(key_n == 76){
        console.log("light green(l)");
        addimg_b('light_green.png');
    }
    if(key_n == 82){
        console.log("roof(r)");
        addimg_b('roof.jpg');
    }
    if(key_n == 84){
        console.log("trunk(t)");
        addimg_b('trunk.jpg');
    }
    if(key_n == 85){
        console.log("unique(u)");
        addimg_b('unique.png');
    }
    if(key_n == 87){
        console.log("wall(w)");
        addimg_b('wall.jpg');
    }
    if(key_n == 89){
        console.log("yellow wall(y)");
        addimg_b('yellow_wall.png');
    }

    if(x.shiftKey == true && key_n == 80){
        console.log("Shift and p are pressed together");
        b_w = b_w + 10;
        b_h = b_h + 10;
        document.getElementById("width").innerHTML = b_w;
        document.getElementById("height").innerHTML = b_h;
    }


    if(x.shiftKey == true && key_n == 77){
        console.log("Shift and m are pressed together");
        b_w = b_w - 10;
        b_h = b_h - 10;
        document.getElementById("width").innerHTML = b_w;
        document.getElementById("height").innerHTML = b_h;
    }
}

function up(){

    if(player_y>0){

        player_y = player_y - b_w;
        canvas.remove(player_img);
        console.log("Current X= "+player_x + "And Current Y= "+player_y );
addimg_p();
    }

}

function down(){
    
    if(player_y<530){

        player_y = player_y+b_w;
canvas.remove(player_img);

console.log("Current X= "+player_x + "And Current Y= "+player_y );
addimg_p();

    }
}

function left(){
    
    if(player_x>0){

        player_x = player_x-b_w;
canvas.remove(player_img);

console.log("Current X= "+player_x + "And Current Y= "+player_y );
addimg_p();

    }
}

function right(){
    
    if(player_x<750){

        player_x = player_x+b_w;
canvas.remove(player_img);

console.log("Current X= "+player_x + "And Current Y= "+player_y );
addimg_p();

    }
}


