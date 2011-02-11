Array.prototype.pick = function(){
    var randomIndex = Math.round(Math.random() * (this.length-1))
    return this[randomIndex]
}
