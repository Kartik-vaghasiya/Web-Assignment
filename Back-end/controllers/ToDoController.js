const ToDoModel = require("../models/ToDoModel");

module.exports.get_Todo_list = async (req, res) => {
    const todo = await ToDoModel.find();
    res.send(todo);
}

module.exports.save_Todo = (req, res) => {
    const { text } = req.body;

    ToDoModel
        .create({ text })
        .then((data) =>{ 
            console.log("To-Do Added Successfully !!")
            console.log(data)
            res.send(data)
        })
        .catch((err) => console.log(err));
}

module.exports.delete_Todo = (req, res) => {
    const { _id } = req.body;

    console.log('id ---> ', _id);

    ToDoModel
        .findByIdAndDelete(_id)
        .then(() => res.set(201).send("To-Do Deleted Successfully !!"))
        .catch((err) => console.log(err));
}

module.exports.update_Todo = (req, res) => {
    const { _id, text } = req.body;

    ToDoModel
        .findByIdAndUpdate(_id, { text })
        .then(() => res.set(201).send("To-Do Updated Successfully !!"))
        .catch((err) => console.log(err));
}