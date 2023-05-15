const { Router } = require("express");

const { get_Todo_list, save_Todo, update_Todo, delete_Todo } = require("../controllers/ToDoController");

const router = Router();

router.get("/", get_Todo_list); 

router.post("/save", save_Todo);

router.post("/update", update_Todo);

router.post("/delete", delete_Todo);

module.exports = router;