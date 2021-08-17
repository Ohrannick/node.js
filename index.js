const EventsEmitter = require("events");
const emitter = new EventsEmitter();

let timers = [...process.argv].slice(2).map((item) => {
  let data = item.split("-");
  return {
    value: new Date(`${data[3]}-${data[2]}-${data[1]}T${data[0]}:50:00`),
    active: true,
  };
});

const updateTimers = () => {
  console.clear()
  timers.forEach((item) => {
    if (item.active) {
      let secs = parseInt((item.value.getTime() - new Date().getTime())/1000);
      let days = parseInt(secs/86400);
      let hours = parseInt((secs - days*86400) / 3600);
      let minutes = parseInt((secs - days*86400 - hours*3600) / 60);
      let seconds = (secs - days*86400 - hours*3600 - minutes*60);
      if (secs > 0) {
        console.log(`Для ${item.value.toString()} осталось: ${days} д ${hours} ч ${minutes} м ${seconds} с`);
      } else {
        console.log(`Для ${item.value.toString()} осталось: 0 seconds. Таймер завершен`);
        item.active = false;
      }
    }
  });
};

emitter.on("cicle", updateTimers);

setInterval(() => emitter.emit("cicle"), 1000);