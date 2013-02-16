var five = require("../lib/johnny-five.js"),
    fsr1, fsr2, fsr3, fsr4, led;

(new five.Board()).on("ready", function() {

  // Create a new `fsr` hardware instance.
  fsr1 = new five.Sensor({
    pin: "A0",
    freq: 25
  });

  led = new five.Led(11);

  fsr1.scale([ 0, 255 ]).on("A0", function() {

    led.brightness( this.value );
    console.log( "A0 ", this.value, this.scaled );

  });


   fsr2 = new five.Sensor({
    pin: "A1",
    freq: 25
  });

   led = new five.Led(11);

  fsr2.scale([ 0, 255 ]).on("read", function() {

    led.brightness( this.value );
    console.log( "read ", this.value, this.scaled );
  

  });

   fsr3 = new five.Sensor({
    pin: "A2",
    freq: 25
  });

 led = new five.Led(11);

  fsr3.scale([ 0, 255 ]).on("read", function() {

    led.brightness( this.value );
    console.log( "read ", this.value, this.scaled );
  

  });

   fsr4 = new five.Sensor({
    pin: "A3",
    freq: 25
  });
 led = new five.Led(11);

  fsr4.scale([ 0, 255 ]).on("read", function() {

    led.brightness( this.value );
    console.log( "read ", this.value, this.scaled );
   // this.wait( 500 )

  });

  
});
