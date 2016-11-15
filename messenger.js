function Messenger(){

  var eventMessenger = {};
  _.extend(this, BackboneEvents);

  console.log("event", eventMessenger);

  this.highlightParticipant = function(id) {
    console.log("Emitting highlight participant: ", id);
    this.trigger("highlight:participant", id);
  }

  console.log("Messenger Object created.");

  return this;

}
