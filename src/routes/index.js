const { Router } = require("express")

const usersRouters = require("./users.routes")

const routes = Router()

routes.use("/users", usersRouters)

module.exports = routes