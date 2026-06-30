// TODO: Füge die Felder id: u32, text: String und done: bool hinzu
pub struct TodoItem {
    pub id: u32,
    pub text: String,
    pub done: bool,
}

// TODO: Füge ein neues Todo hinzu (id = todos.len() + 1, done = false)
pub fn add_todo(_todos: &mut Vec<TodoItem>, _text: &str) {
    todo!()
}

// TODO: Gib nur die text-Felder als Vec<&str> zurück
pub fn list_todos(_todos: &[TodoItem]) -> Vec<&str> {
    todo!()
}

// TODO: Setze done = true für das Todo mit der gegebenen id
pub fn mark_done(_todos: &mut [TodoItem], _id: u32) {
    todo!()
}

// TODO: Entferne das Todo mit der gegebenen id
pub fn remove_todo(_todos: &mut Vec<TodoItem>, _id: u32) {
    todo!()
}
