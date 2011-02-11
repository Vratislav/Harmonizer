
IntervalTester = function(){
    this.TONE_MODE = 1
    this.INTERVAL_MODE = 1
    
    this.mode = this.TONE_MODE

    this.questionCount = -1
    this.correct = 0
    this.baseTone = new Tone("c", 1)
    this.intervals = Interval.basicIntervals
    this.chosenInterval = null

    this.bindUI()
    this.generateNewQuestion()
}

IntervalTester.prototype.bindUI = function() {
    var it = this
    var checkButton = $("#check")
    checkButton.click(function() {
        it.evaluate()
    })
    $("#end_tone").keypress(function(event){
        if(event.which == 13){
            checkButton.click()
        }
    })
}



IntervalTester.prototype.generateNewQuestion = function() {
    if(this.mode == this.TONE_MODE){
        this.chosenInterval = this.intervals.pick()
        $("#interval_name").text(this.chosenInterval.name)
        $("#start_tone").html(this.baseTone.name)
        this.questionCount++
        $("#question_count").html(this.questionCount)
        $("#end_tone").focus()
    }
}

IntervalTester.prototype.evaluate = function() {
    if(this.mode == this.TONE_MODE){
        value = $("#end_tone").val()
        if(value != ""){
            if(Tone.isValidName(value)){
                toneAnswer = new Tone(value,this.baseTone.octave)
                if(toneAnswer.value < this.baseTone.value)toneAnswer.octave++
                correctAnswer = this.baseTone.add(this.chosenInterval)
                appendToDebug("Your answer is: " + toneAnswer + " correct is: " + correctAnswer)
                if(toneAnswer.equals(correctAnswer)){
                    this.correct++
                    $("#correct_count").html(this.correct)
                }
                $("#end_tone").val("")
                it.generateNewQuestion()
                it.computeAndShowPercentage()
            }else{
                $("#end_tone").val("")
            }
        }
    }
}

IntervalTester.prototype.computeAndShowPercentage = function(){
    var percentage = 0
    if(this.questionCount != 0){
        percentage = Math.round((this.correct / this.questionCount) * 1000)/10
    }
    $("#correct_percentage").html(percentage)
}

$(document).ready(function(){
    appendToDebug("bla bla bla")
    ar = ["ble","bla","blu"]
    appendToDebug(ar.pick())
    testT = new Tone("h",1)
    appendToDebug(testT)
    testI = new Interval("sekunda",2)
    appendToDebug(testT.add(testI))

    it = new IntervalTester()
})