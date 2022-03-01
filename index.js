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

const Gpio = require('onoff').Gpio;
const sensor = new Gpio(7, 'in', 'both');

sensor.watch((err, value) => {
  if (err) {
    throw err;
  }

  console.log('test', value)

});

// process.on('SIGINT', _ => {
//   led.unexport();
//   button.unexport();
// });