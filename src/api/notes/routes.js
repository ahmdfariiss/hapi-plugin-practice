/* eslint-disable */
const routes = (handler) => [
  {
    method: "POST",
    path: "/notes",
    handler: handler.postNoteHandler,
  },
  {
    method: "GET",
    path: "/notes",
    handler: handler.getNotesHandler,
  },
  {
    method: "GET",
    path: "/notes/{id}",
    method: handler.getNoteByIdHandler,
  },
  {
    method: "PUT",
    path: "/notes/{id}",
    method: handler.putNoteByIdHandler,
  },
  {
    method: "DELETE",
    path: "/notes/{id}",
    method: handler.deleteNoteByIdHandler,
  },
];

module.exports = routes;
