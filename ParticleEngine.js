/*
 * Calls draw and animate with fixed fps
 */
var ParticleEngine = function(context) {
    this.fps = 15
    this.fpsInterval = 1000 / this.fps
    this.requestFrameId = undefined

    var self = this
    var context = context
    var elapsed
    var then = Date.now()

    var particleSystem = [
        new ParticleGroup({
            func: function(x) { return Math.sin(x) },
            number: 50,
            xRange: [0, 300],
            yRange: [0, 150],
            radiusRange: [5, 10],
            color: new Rgba(255, 0, 0),
            speedRange: [5, 20],
            lifetimeRange: [1, 1]
        }),
        new ParticleGroup({
            func: function(x) { return x * x },
            number: 50,
            xRange: [0, 300],
            yRange: [0, 150],
            radiusRange: [5, 10],
            color: new Rgba(0, 0, 255),
            speedRange: [5, 20],
            lifetimeRange: [1, 2]
        })
    ]

    /*
     * Particle System is an array of particle groups which contains
     * a movement function for this group and an array of particles
     */
    var step = function() {
        context.clearRect(0, 0, 1000000, 1000000)
        for (var i = 0; i < particleSystem.length; i++) {
            Drawer.drawCircles(
                context,
                particleSystem[i].particles
            )
            Animator.animateGroup(
                particleSystem[i].particles, 
                particleSystem[i].func,
                elapsed
            )
        }
    }

    var start = function() {
        self.requestFrameId = requestAnimationFrame(start)
        now = Date.now()
        elapsed = now - then
        if (elapsed > self.fpsInterval) {
            then = now
            step()
        }
    }

    start()
}

ParticleEngine.prototype.setFps = function(newFps) {
    this.fps = newFps
    this.fpsInterval = 1000 / this.fps
}

ParticleEngine.prototype.getFps = function() { return this.fps }

ParticleEngine.prototype.setFpsInterval = function(newInterval) {
    this.fpsInterval = newInterval
    this.fps = 1000 / this.fpsInterval
}

ParticleEngine.prototype.getFpsInterval = function() { return this.fpsInterval }

ParticleEngine.prototype.stop = function() {
    cancelAnimationFrame(this.requestFrameId)
}