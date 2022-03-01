
const Gpio = require('onoff').Gpio;
const LED = new Gpio(11, 'out');

var ledInterval = setInterval(sayHello, 300);

function sayHello () {
  if (LED.readSync() === 0) {
    LED.writeSync(1); //se enciende
  } else {
    LED.writeSync(0); //se apaga
  }
}
