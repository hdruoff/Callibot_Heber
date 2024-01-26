input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    calliBot2.servo(C2Servo.Servo1, 60)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    calliBot2.servo(C2Servo.Servo2, 270)
})
calliBot2.servo(C2Servo.Servo1, 95)
calliBot2.servo(C2Servo.Servo2, 90)
basic.forever(function () {
    if (calliBot2.entfernung(C2Einheit.cm) <= 5.5) {
        calliBot2.motorStop(C2Motor.beide, C2Stop.Bremsen)
        basic.pause(500)
        calliBot2.servo(C2Servo.Servo1, 60)
        basic.pause(500)
        calliBot2.motor(C2Motor.beide, C2Dir.rueckwaerts, 30)
        calliBot2.warte(C2SensorWait.distanceCm, C2Check.greaterThan, 15)
        calliBot2.motorStop(C2Motor.beide, C2Stop.Frei)
        basic.pause(500)
        calliBot2.servo(C2Servo.Servo1, 105)
        basic.pause(2000)
        calliBot2.servo(C2Servo.Servo2, 135)
        basic.pause(500)
        calliBot2.servo(C2Servo.Servo2, 45)
        basic.pause(500)
        calliBot2.servo(C2Servo.Servo1, 95)
        basic.pause(500)
        calliBot2.servo(C2Servo.Servo2, 90)
        basic.pause(500)
    } else {
        calliBot2.motor(C2Motor.beide, C2Dir.vorwaerts, 30)
    }
})
