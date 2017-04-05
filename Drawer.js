/*
 * Draws on a specified context
 */
var Drawer = (function(Drawer) {
    /*
     * Circle object must have this properties:
     * x (Number)
     * y (Number)
     * radius (Number)
     * color (String) - color of particles
     */
    Drawer.drawGradientCircle = function(context, circle) {
        var gradient = context.createRadialGradient(
            circle.x, circle.y, 1,
            circle.x, circle.y, circle.radius
        )

        gradient.addColorStop(0, circle.color.withAlpha(1).toHtml())
        gradient.addColorStop(1, circle.color.withAlpha(0).toHtml())

        context.fillStyle = gradient
        
        context.beginPath()
        context.arc(
            circle.x, circle.y,
            circle.radius,
            0, 2 * Math.PI
        )
        context.fill()
    }

    Drawer.drawGradientCircles = function(context, circles) {
        for (var i = 0; i < circles.length; i++) {
            Drawer.drawGradientCircle(context, circles[i])
        }
    }
    
    Drawer.drawCircle = function(context, circle) {
        context.fillStyle = circle.color.toHtml()
        context.beginPath()
        context.arc(
            circle.x, circle.y,
            circle.radius,
            0, 2 * Math.PI
        )
        context.fill()
    }

    Drawer.drawCircles = function(context, circles) {
        for (var i = 0; i < circles.length; i++) {
            Drawer.drawCircle(context, circles[i])
        }
    }

    return Drawer
}(Drawer || {}))