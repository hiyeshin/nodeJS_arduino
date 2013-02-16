var five = require("../lib/johnny-five.js"),
    child = require("child_process"),
    http = require("http"),
    socket = require("socket.io"),
    fs = require("fs"),
    app, board, io;


function handler( req, res ) {
  var path = __dirname;

  if ( req.url === "/" ) {
    path += "/radar.html";
  } else {
    path += req.url;
  }

  fs.readFile( path, function( err, data ) {
    if ( err ) {
      res.writeHead( 500 );
      return res.end( "Error loading " + path );
    }

    res.writeHead( 200 );
    res.end( data );

  });
}


app = http.createServer( handler );
app.listen( 8080 );

io = socket.listen( app );
io.set( "log level", 1 );

board = new five.Board();

board.on("ready", function() {
  var fsr1, fsr2, fsr3, fsr4, led;

  child.exec( "open http://localhost:8080/" );


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

