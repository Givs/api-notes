const { Router } = require("express")
const multer = require("multer")

const uploadConfig = require("../configs/upload")
const UsersController = require("../controllers/UsersController")
const UserAvatarController = require("../controllers/UserAvatarController")
const ensureAuth = require("../middlewares/ensureAuth")

const usersRouters = Router()
const upload = multer(uploadConfig.MULTER)


const usersController = new UsersController
const userAvatarController = new UserAvatarController


/* function mymiddlewere(request, response, next){

    if (!request.body.isAdmin){
        return response.json({ message: "user unauthorized" })
    }

    next()
} */

usersRouters.post("/", usersController.create)
usersRouters.put("/", ensureAuth, usersController.update)
usersRouters.patch("/avatar", ensureAuth, upload.single("avatar"), userAvatarController.update)

module.exports = usersRouters