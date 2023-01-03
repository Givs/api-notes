const { Router } = require("express")

const UsersController = require("../controllers/UsersController")

const usersRouters = Router()
const usersController = new UsersController


function mymiddlewere(request, response, next){

    if (!request.body.isAdmin){
        return response.json({ message: "user unauthorized" })
    }

    next()
}

usersRouters.post("/", mymiddlewere, usersController.create)
usersRouters.put("/:id", usersController.update)

module.exports = usersRouters