
ScaleMode = function(givenName,givenType,givenIntervals){
    this.name = givenName
    this.intervals  = givenIntervals
    this.type = givenType
}
ScaleMode.prototype.name = "Unknown scale mode"
ScaleMode.prototype.intervals = []
ScaleMode.prototype.isSharp = function(){
    if (this.type == "sharp") {
        return true
    } else {
        return false
    }
}
ScaleMode.prototype.isFlat = function(){
    return ! this.isSharp()
}
ScaleModes = {
    Jon : new ScaleMode("Jon", "sharp"  ,[2,2,1,2,2,2,1]),
    Dur : new ScaleMode("Dur", "sharp"  ,[2,2,1,2,2,2,1]),
    Aiol : new ScaleMode("Aiol","flat",  [2,1,2,2,1,2,2]),
    Mol : new ScaleMode("Mol","flat",    [2,1,2,2,1,2,2])

}


ToneNames = {
    Sharp : ["c","cis","d","dis","e","f","fis","g","gis","a","ais","h"],
    Flat :  ["c","des","d","es","e","f","ges","g","as","a","b","h"]
}



Tone = function(name,octave) {
    if(typeof name == "string"){
        this.name = name
        this.index = getToneIndex(this.name)
    }
    if(typeof name == "number"){
        this.index = name
        this.name = getToneName(this.index)
    }
    this.octave = octave
}
Tone.isValidName = function(toneName) {
    //appendToDebug("Searching for " + toneName)
    var tones = ToneNames.Sharp.concat(ToneNames.Flat)
    var result = false
    tones.forEach(function(tone) {
        //appendToDebug("comparing with " + tone)
        if(tone == toneName){
            result = true
        }
    })
    return result
}

Tone.prototype.equals = function(anotherTone){
    if(anotherTone.index == this.index && anotherTone.octave == this.octave){
        return true
    }else{
        return false
    }
}

Tone.prototype.add = function(interval){
    var index = this.index + interval.interval
    return new Tone(index%12,Math.floor(index/12)+this.octave)
}
Tone.prototype.substract = function(interval){
    var index = this.index - interval.interval
    return new Tone(index%12,Math.floor(index/12)+this.octave)
}
Tone.prototype.toString = function(){
    return this.name + this.octave
}
getToneIndex = function(toneName) {
    toneIndex = ToneNames.Flat.indexOf(toneName)
    if(toneIndex == -1){
        toneIndex = ToneNames.Sharp.indexOf(toneName)
    }
    return toneIndex
}
getToneName = function(index,mode){
    if (typeof mode == 'undefined' ) mode = 'sharp'
    if (mode == 'sharp') {
        return ToneNames.Sharp[index]
    } else {
        return ToneNames.Flat[index]
    }
}


Scale = function(startingToneGiven,modeGiven) {
    this.baseTone = startingToneGiven
    this.mode = modeGiven
    this.constructTones()
}
Scale.prototype.getToneNameFromIndex = function(index){
    return getToneName(index,this.mode.type)
}
Scale.prototype.constructTones = function() {
    this.tones = []
    var intervalIndex = 0
    var toneIndex = this.baseTone.index
    this.tones.push(this.baseTone)
    for (i = 0; i < 6; i++) {
        toneIndex += this.mode.intervals[intervalIndex]
        intervalIndex++
        appendToDebug(toneIndex)

        this.tones.push(new Tone(this.getToneNameFromIndex(toneIndex%12),this.baseTone.octave + Math.floor(toneIndex/12)))
    }
    this.tones.push(new Tone(this.baseTone.name,this.baseTone.octave+1))
}
Scale.prototype.withinScale = function(tone){
    if(typeof tone == "Object") tone = tone.name
    var value = false
    this.tones.forEach(function(checkedTone,index,array){
        if(checkedTone.name == tone) value = true
    })
    return value
}


Interval = function(name,interval){
    this.interval = interval
    this.name = name
}
Interval.basicIntervals = [
    new Interval("prima",0),
    new Interval("sekunda",2),
    new Interval("tercie",4),
    new Interval("kvarta",5),
    new Interval("kvinta",7),
    new Interval("sexta",9),
    new Interval("septima",11),
    new Interval("oktáva",12)
]
Interval.prototype.getInterval = function(intervalName) {
    searchIn = Interval.basicIntervals
    var foundInterval = null
    searchIn.forEach(function(interval){
        if(interval.name == intervalName)foundInterval = interval
    } )
    return foundInterval
}

Interval.prototype.getIntervalNames = function(intervalName) {
    searchIn = Interval.basicIntervals
    var foundIntervalNames = []
    searchIn.forEach(function(intervalName){
        if(interval.interval == intervalName)foundIntervalNames.push(interval.name)
    } )
    return foundIntervalNames    
}

appendToDebug = function(whatToAppend){
    $("#debug").append(" <br> " + whatToAppend)
}
