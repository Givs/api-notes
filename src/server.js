require("express-async-errors")

const { json } = require("express")
const express = require("express")

const migrationsRun = require("./database/sqlite/migrations")
const AppError = require("./utils/AppError")
const routes = require("./routes")

const app = express()

//tell to express that we will receive json on request
app.use(express.json())
app.use(routes)

migrationsRun()

/* //router params
app.get("/message/:id/:name", (req, res) => {
    const { id, name } = req.params
    
    res.send(`Id passado: ${id}
        Nome passado: ${name}
    `)
})

//query params
app.get("/new", (req, res) => {
    const { page, limit } = req.query

    res.send(`Page ${page} - Limit: ${limit}`)
}) */

app.use((error, request, response, next) => {
    if (error instanceof AppError){
        return response.status(error.statusCode).json({
            status: "error",
            message: error.message
        })
    }

    console.log(error);

    return response.status(500).json({
        status: "error",
        message: "Internal server error"
    })
})


const PORT = 3000
app.listen(PORT, () => {
    console.log(`Server up on port ${PORT}`);
})