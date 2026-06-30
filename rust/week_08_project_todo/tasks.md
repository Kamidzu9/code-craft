# Aufgaben - Mini Todo-Projekt

1. Erstelle ein `TodoItem`-Struct mit `id: u32`, `text: String` und `done: bool`.
2. Schreibe eine Funktion `add_todo(todos: &mut Vec<TodoItem>, text: &str)`, die ein neues Todo hinzufügt (id = todos.len() + 1).
3. Schreibe eine Funktion `list_todos(todos: &[TodoItem]) -> Vec<&str>`, die nur die `text`-Felder zurückgibt.
4. Schreibe eine Funktion `mark_done(todos: &mut [TodoItem], id: u32)`, die `done` auf `true` setzt.
5. Schreibe eine Funktion `remove_todo(todos: &mut Vec<TodoItem>, id: u32)`, die ein Todo entfernt.
