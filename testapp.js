function TestApp(element, events) {

  console.log("TestApp Created");

  events.on("highlight:participant", function(id) {

    console.log("I should highlight participant", id);

  });
}
