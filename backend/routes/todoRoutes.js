const express = require("express");
const router = express.Router();


router.get("/todos", getTodos);
router.post("/todos",createToDos);
router.put("/todos/:id",updateTodo);
router.delete("/todos/:id",deleteTodo);

module.exports = router;