let location = 0
let top = 0
input.onButtonPressed(Button.A, function () {
    location = 1
    if (location == 1) {
        led.plot(4, 0)
        led.unplot(4, 4)
    }
})
input.onButtonPressed(Button.B, function () {
    location = 2
    if (location == 2) {
        led.plot(4, 4)
        led.unplot(4, 0)
    }
})
basic.forever(function () {
    if (top == 1 && location == 1) {
        basic.showString("U LOSE")
    }
})
basic.forever(function () {
    if (randint(1, 2) == 1) {
        top = 0
        led.plot(0, 0)
        led.plot(1, 0)
        basic.pause(500)
        led.unplot(0, 0)
        led.plot(2, 0)
        basic.pause(500)
        led.unplot(1, 0)
        led.plot(3, 0)
        basic.pause(500)
        led.unplot(2, 0)
        led.plot(4, 0)
        basic.pause(500)
        led.unplot(3, 0)
        led.unplot(4, 0)
        top = 1
    } else {
        top = 0
        led.plot(0, 4)
        led.plot(1, 4)
        basic.pause(500)
        led.unplot(0, 4)
        led.plot(2, 4)
        basic.pause(500)
        led.unplot(1, 4)
        led.plot(3, 4)
        basic.pause(500)
        led.unplot(2, 4)
        led.plot(4, 4)
        basic.pause(500)
        led.unplot(3, 4)
        led.unplot(4, 4)
        top = 2
    }
})
basic.forever(function () {
    if (top == 2 && location == 2) {
        basic.showString("U LOSE")
    }
})
