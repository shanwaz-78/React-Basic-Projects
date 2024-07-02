import { Router } from "express";
import controllers from "../controller/index.js";
import verifyToken from "../middleware/auth.js";

const notesRoute = Router();

notesRoute.get(
  "/get-notes",
  verifyToken,
  controllers.notesControllers.getAllNotesController
);

notesRoute.post(
  "/add-note",
  verifyToken,
  controllers.notesControllers.addNotesController
);

notesRoute.post(
  "/update-note/:id",
  verifyToken,
  controllers.notesControllers.updateNoteController
);

notesRoute.delete(
  "/delete-note/:id",
  verifyToken,
  controllers.notesControllers.deleteNoteController
);
export default notesRoute;
