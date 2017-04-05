var BurningElement = function(element) {
    this.element = element
    this.element.style.position = 'relative'
    this.element.style.zIndex = '50'

    var canvas = Helpers.makeUnderlyingCanvas(this.element)
    var context = canvas.getContext('2d')
    
    var engine = new ParticleEngine(context)
}