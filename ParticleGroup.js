/*
 * Arguments object should have this properties:
 * number (Number) - how many particles
 * xRange (Array<Number, Number>) - range for x coordinate of particles
 * yRange (Array<Number, Number>) - range for y coordinate of particles
 * radiusRange (Array<Number, Number>) - range for radius of particles
 * color (String) - color in form of: "255, 255, 255"
 * speedRange (Array<Number, Number>) - range for speed of particles
 * func (Function) - mathematical R -> R function
 */
var ParticleGroup = function(args) {
    this.particles = []
    this.func = args.func
    this.number = args.number
    this.color = args.color
    this.xRange = args.xRange
    this.yRange = args.yRange
    this.radiusRange = args.radiusRange
    this.speedRange = args.speedRange
    this.lifetimeRange = args.lifetimeRange

    for (var i = 0; i < this.number; i++) {
        var randomX = Helpers.getRandomNumber(
            this.xRange[0],
            this.xRange[1]
        )
        var randomY = Helpers.getRandomNumber(
            this.yRange[0],
            this.yRange[1]
        )
        var randomRadius = Helpers.getRandomNumber(
            this.radiusRange[0],
            this.radiusRange[1]
        )
        var randomSpeed = Helpers.getRandomNumber(
            this.speedRange[0],
            this.speedRange[1]
        ) / Helpers.speedScale
        var randomLifetime = Helpers.getRandomNumber(
            this.lifetimeRange[0],
            this.lifetimeRange[1]
        )

        this.particles[i] = new Particle({
            x: randomX,
            y: randomY,
            color: this.color,
            radius: randomRadius,
            speed: randomSpeed,
            lifetime: randomLifetime
        })
    }
}