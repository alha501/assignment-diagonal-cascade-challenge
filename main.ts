input.onButtonPressed(Button.A, function () {
    led.toggle(0, 0)
    for (let y = 0; y <= 1; y++) {
        led.toggle(y, 1 - y)
        basic.pause(100)
    }
    for (let y = 0; y <= 2; y++) {
        led.toggle(y, 2 - y)
        basic.pause(100)
    }
    for (let y = 0; y <= 3; y++) {
        led.toggle(y, 3 - y)
        basic.pause(100)
    }
    for (let y = 0; y <= 4; y++) {
        led.toggle(y, 4 - y)
        basic.pause(100)
    }
    for (let y = 0; y <= 4; y++) {
        led.toggle(y + 1, 4 - y)
        basic.pause(100)
    }
    for (let y = 0; y <= 4; y++) {
        led.toggle(y + 2, 4 - y)
        basic.pause(100)
    }
    for (let y = 0; y <= 4; y++) {
        led.toggle(y + 3, 4 - y)
        basic.pause(100)
    }
    for (let y = 0; y <= 4; y++) {
        led.toggle(y + 4, 4 - y)
        basic.pause(100)
    }
})
input.onButtonPressed(Button.B, function () {
    led.toggle(0, 0)
    for (let y = 0; y <= 1; y++) {
        led.toggle(y, 1 - y)
        basic.pause(100)
    }
    for (let y = 0; y <= 2; y++) {
        led.toggle(y, 2 - y)
        basic.pause(100)
    }
    for (let y = 0; y <= 3; y++) {
        led.toggle(y, 3 - y)
        basic.pause(100)
    }
    for (let y = 0; y <= 4; y++) {
        led.toggle(y, 4 - y)
        basic.pause(100)
    }
    for (let y = 0; y <= 4; y++) {
        led.toggle(y + 1, 4 - y)
        basic.pause(100)
    }
    for (let y = 0; y <= 4; y++) {
        led.toggle(y + 2, 4 - y)
        basic.pause(100)
    }
    for (let y = 0; y <= 4; y++) {
        led.toggle(y + 3, 4 - y)
        basic.pause(100)
    }
    for (let y = 0; y <= 4; y++) {
        led.toggle(y + 4, 4 - y)
        basic.pause(100)
    }
})
basic.forever(function () {
	
})
