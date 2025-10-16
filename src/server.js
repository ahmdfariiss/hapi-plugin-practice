/* eslint-disable */

const Hapi = require("@hapi/hapi");
const notes = require("./api/notes");
const NotesService = require("./services/inMemory/NotesService");

const init = async () => {
  const noteService = new NotesService();
  const server = Hapi.server({
    port: 3001,
    host: "localhost",
    routes: {
      cors: {
        origin: ["*"],
      },
    },
  });

  await server.register({
    plugin: notes,
    option: {
      service: noteService,
    },
  });

  await server.start();

  console.log(`server berjalan pada ${server.info.uri}`);
};

init();
