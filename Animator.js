/*
 * Changes objects' positions with movement function
 */
var Animator = (function(Animator) {
    /*
     * Moves the object along the function
     * The function is mathematical R -> R function
     * An object must have this properties:
     * y (Number)
     * x (Number)
     * animationIterator (Number) - stores last animation position
     * speed (Number) - animation speed
     * age (Number) - age of object
     */
    Animator.animate = function(object, func, elapsed) {
        object.x += object.animationIterator * elapsed
        object.y += func(object.animationIterator) * elapsed
        object.age += 1 / Helpers.agingScale * elapsed
        object.animationIterator += object.speed * elapsed
    }

    Animator.animateGroup = function(objects, func, elapsed) {
        for (var i = 0; i < objects.length; i++) {
            if (objects[i].age > objects[i].lifetime) {
                objects.splice(i, 1)
            } else {
                Animator.animate(objects[i], func, elapsed)
            }
        }
    }
    
    return Animator
}(Animator || {}))