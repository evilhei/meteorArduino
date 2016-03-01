if(Meteor.isServer) {

  var five = Meteor.npmRequire("johnny-five");
  var board = new five.Board();
  var temporal = Meteor.npmRequire("temporal");

  Meteor.startup(function() {
    board.on("ready", Meteor.bindEnvironment(function() {
      var theCat = new five.Servo({
        pin: 11,
        range: [20, 140]
      });
      
      temporal.delay(500, Meteor.bindEnvironment(function() {
          console.log("500ms later...");
          theCat.sweep()
          tempInstance = theCat;
          return tempInstance;
        }))        
    }))
  })

  console.log(tempInstance);
}



