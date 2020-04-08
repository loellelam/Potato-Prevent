function Enemy() {
    this.width = 50;
    this.height = 40;
    
    this.x = displayWidth + this.width;
    this.y = (Math.random() * (displayHeight - this.height));

    this.gravity = enemySpeed; //speed at which enemies move

    this.show = function() {
        image(enemyImg, this.x, this.y, this.width, this.height);
    }

    this.move = function() {
        this.x -= this.gravity;
    }

    this.checkPos = function() { //check if enemy has reached the player zone
        if (this.x < 200) {
            enemyArr.shift(); //kill current enemy

            loseALife(); //take one life away
        }
    }
}