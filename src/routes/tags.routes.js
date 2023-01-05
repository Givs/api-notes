const { Router } = require("express")

const TagsController = require("../controllers/TagsController")
const ensureAuth = require("../middlewares/ensureAuth")


const tagsRouters = Router()
const tagsController = new TagsController

tagsRouters.get("/", ensureAuth, tagsController.index)


module.exports = tagsRouters