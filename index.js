// const Cylon = require('cylon')
// const { devices } = require('./config/index')

// const robot = Cylon.robot({
//   connections: { raspi: { adaptor: 'raspi' } }, //Config para raspi
//   devices, //Dispositivos conectados a la raspberry pi (Sensores en este cas0)
//   work: function (my) {
//     // Aquí es donde podemos trabajar con el robot de cylon (Con los driver)

//     let analogValue = 0;

//     for (let i = 0; i < devices.length; i++) {
//       const sensorName = devices[i].name;
//       my.devices[sensorName].on('analogRead', () => {
//         analogValue = my.sensor.analogRead() // Devuelve el valor del sensor

//         console.log({sensorActive: analogValue})
//         console.log(my)
//       })
//     }
//   },
// })

// robot.start()

// const Gpio = require('onoff').Gpio;
// const sensor = new Gpio(7, 'in')
// const sensor2 = new Gpio(7, 'in')
// const sensor3 = new Gpio(7, 'in')

// console.log(sensor)
// console.log(sensor.watch())
// console.log(sensor.watch)

// sensor.watch((err, value) => {
//   if (err) {
//     throw err;
//   }

//   console.log('test', value)

// })

// sensor2.watch((err, value) => {
//   if (err) {
//     throw err;
//   }

//   console.log('test', value)

// });

// sensor3.watch((err, value) => {
//   if (err) {
//     throw err;
//   }

//   console.log('test', value)

// });

// var LED = new Gpio(18, 'out');

// var ledInterval = setInterval(sayHello, 300);

// function sayHello () {
//   if (LED.readSync() === 0) {
//     LED.writeSync(1); //se enciende
//   } else {
//     LED.writeSync(0); //se apaga
//   }
// }

const { Board, Sensor } = require("johnny-five")
const raspi = require('raspi-io');

const board = new Board({
  io: new raspi()
});

board.on("ready", () => {
  // Create a new generic sensor instance for
  // a sensor connected to an analog (ADC) pin
  const sensor = new Sensor({
    pin: 7,
    type: "digital"
  });
  const sensor2 = new Sensor({
    pin: 29,
    type: "digital"
  });
  const sensor3 = new Sensor({
    pin: 31,
    type: "digital"
  });

  // When the sensor value changes, log the value
  sensor.on("change", value => {
    console.log("Sensor: ");
    console.log("  value  : ", sensor.value);
    console.log("-----------------");
  });

  sensor2.on("change", value => {
    console.log("Sensor: ");
    console.log("  value  : ", sensor2.value);
    console.log("-----------------");
  });

  sensor3.on("change", value => {
    console.log("Sensor: ");
    console.log("  value  : ", sensor3.value);
    console.log("-----------------");
  });
});