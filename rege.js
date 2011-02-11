RegExper = function(){
    this.currentRegExpLabel = $("#currentRegExp")
    this.checkButton = $("#checkButton")
    this.resultLabel = $("#result")
    this.inputField = $("#input")
    var re = this
    this.checkButton.click(function(){
        re.checkRegExp()
    })
    $(document).keypress(function(event){
        if(event.which == 13){
            re.checkRegExp()
        }
    })
}

RegExper.prototype.score = 0
RegExper.prototype.currentRegExp = null

RegExper.prototype.generateRegExp = function(){
    this.currentRegExp = new RegExp("Blag?")
    this.currentRegExpLabel.text(this.currentRegExp.source)
}

RegExper.prototype.checkRegExp = function(){
    if(this.currentRegExp.test(this.inputField.val())){
        this.resultLabel.text("OK")
    }else{
        this.resultLabel.text("Bad")
    }
}

$(document).ready(function() {
    regExper = new RegExper()
    regExper.generateRegExp()

})


