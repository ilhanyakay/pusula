let degrees = 0
basic.forever(function () {
    degrees = input.compassHeading()
    if (degrees >= 45) {
        if (degrees <= 135) {
            basic.showString("N")
        }
    }
    if (degrees >= 225) {
        if (degrees <= 315) {
            basic.showString("S")
        }
    }
})
