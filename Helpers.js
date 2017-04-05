/*
 * Contains some useful functions
 */
var Helpers = (function(Helpers) {
    Helpers.speedScale = 1000000
    Helpers.agingScale = 1000

    Helpers.defaultFor = function(arg, value) {
        return typeof arg !== 'undefined' ? arg : value
    }

    /*
     * Gets the element's position relative to page
     */
    Helpers.getPosition = function(element) {
        for (
            var offsetLeft = 0, offsetTop = 0;
            element != null;
            offsetLeft += element.offsetLeft,
            offsetTop += element.offsetTop,
            element = element.offsetParent
        ) {}
        return {x: offsetLeft, y: offsetTop}
    }

    Helpers.getRandomNumber = function(from, to) {
        return Math.floor(Math.random() * to) + from
    }

    /*
     * Creates canvas under the element
     */
    Helpers.makeUnderlyingCanvas = function(element, offset) {
        var overlay = document.createElement('CANVAS')
        var elementWidth = element.offsetWidth
        var elementHeight = element.offsetHeight

        if (!offset) {
            if (elementWidth > elementHeight) {
                offset = elementWidth / 100 * 25
            } else {
                offset = elementHeight / 100 * 25
            }    
        }

        overlay.style.marginLeft = - offset / 2 + 'px'
        overlay.style.marginTop = - offset / 2 + 'px'
        overlay.style.width = (elementWidth + offset) + 'px'
        overlay.style.height = (elementHeight + offset) + 'px'
        overlay.style.float = 'left'
        overlay.style.zIndex = '10'
        overlay.style.position = 'absolute'

        element.parentNode.insertBefore(overlay, element)

        return overlay
    }
    
    return Helpers
}(Helpers || {}))