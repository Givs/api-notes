const { Router } = require("express")

const NotesController = require("../controllers/NotesController")
const ensureAuth = require("../middlewares/ensureAuth")


const notesRouters = Router()
const notesController = new NotesController

notesRouters.use(ensureAuth)

notesRouters.post("/", notesController.create)
notesRouters.get("/:id", notesController.show)
notesRouters.delete("/:id", notesController.delete)
notesRouters.get("/", notesController.index)

module.exports = notesRouters