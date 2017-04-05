var Rgba = function(red, green, blue, alpha) {
    this.red = red
    this.green = green
    this.blue = blue
    this.alpha = Helpers.defaultFor(alpha, 1)
}

Rgba.prototype.toString = function() {
    return this.red + ', ' + this.green + ', ' + this.blue + ', ' + this.alpha
}

Rgba.prototype.toHtml = function() {
    return 'rgba(' + this.toString() + ')'
}

Rgba.prototype.withRed = function(red) {
    return new Rgba(red, this.green, this.blue, this.alpha)
}

Rgba.prototype.withGreen = function(green) {
    return new Rgba(this.red, green, this.blue, this.alpha)
}

Rgba.prototype.withBlue = function(blue) {
    return new Rgba(this.red, this.green, blue, this.alpha)
}

Rgba.prototype.withAlpha = function(alpha) {
    return new Rgba(this.red, this.green, this.blue, alpha)
}
