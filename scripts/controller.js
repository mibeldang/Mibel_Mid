
var btnOff = document.getElementById('off');
var btn1 = document.getElementById('1');
var btn2 = document.getElementById('2');
var btn3 = document.getElementById('3');
var statusOff = "The fan is currently turned Off";
var status1 = "The fan is currently turned 1";
var status2 = "The fan is currently turned 2";
var status3 = "The fan is currently turned 3";

btnOff.addEventListener('click', (e) => {
  e.preventDefault();
  client = mqtt.connect(" wss://test.mosquitto.org:8081/mqtt");
  client.on("off", () => {
    console.log()
    client.publish("mibel/fan/status", statusOff).text(moment().format('MMMM Do YYYY, h:mm:ss a')).appendTo($(row));
    $("#status").statusOff
  })
  console.log("Button off is clicked.")
})


btn1.addEventListener('click', (e) => {
  e.preventDefault();
  client = mqtt.connect(" wss://test.mosquitto.org:8081/mqtt");
  client.on("1", () => {
    console.log()
    client.publish("mibel/fan/status", status1).text(moment().format('MMMM Do YYYY, h:mm:ss a')).appendTo($(row));
    $("#status").status1
  })
  console.log('Button 1 is clicked')
})


btn2.addEventListener('click', (e) => {
  e.preventDefault();
  client = mqtt.connect(" wss://test.mosquitto.org:8081/mqtt");
  client.on("2", () => {
    console.log()
    client.publish("mibel/fan/status", status2).text(moment().format('MMMM Do YYYY, h:mm:ss a')).appendTo($(row));
    $("#status").status2
  })
  console.log('Button 2 is clicked')
})

btn3.addEventListener('click', (e) => {
  e.preventDefault();
  client = mqtt.connect(" wss://test.mosquitto.org:8081/mqtt");
  client.on("3", () => {
    console.log()
    client.publish("mibel/fan/status", status3).text(moment().format('MMMM Do YYYY, h:mm:ss a')).appendTo($(row));
    $("#status").status3

  })
  console.log("Button 3 is clicked..")
})






