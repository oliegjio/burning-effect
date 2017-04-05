var Particle = function(args) {
    this.x = args.x; this.y = args.y
    this.radius = args.radius
    this.color = args.color
    this.speed = args.speed
    this.animationIterator = 0
    this.age = 0
    this.lifetime = args.lifetime
}