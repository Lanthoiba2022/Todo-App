

const { default: mongoose } = require("mongoose");
const moongoose = require("mongoose");
const { string } = require("zod");

mongoose.connect("mongodb+srv://username: password@cluster0.dr4e8gw.mongodb.net/todo-app");

const todoSchema = moongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = moongoose.model('todo-app',todoSchema);

module.exports = {
    todo
}
