function deadPotato(xCoord, yCoord) {
    this.width = 80;
    this.height = 80;

    this.x = xCoord;
    this.y = yCoord;

    this.show = function() {
        image(explodeImg, this.x, this.y, this.width, this.height);
    }

    this.disappear = function() { //disappears after certain amt of time
        setTimeout(function() {
            deadArr.shift(); //delete particle
        }, deadLinger);
    }
}