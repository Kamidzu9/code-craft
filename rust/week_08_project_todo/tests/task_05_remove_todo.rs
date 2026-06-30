use week_08_project_todo::*;

fn create_todos() -> Vec<TodoItem> {
    let mut todos = Vec::new();
    add_todo(&mut todos, "Rust lernen");
    add_todo(&mut todos, "Tests schreiben");
    add_todo(&mut todos, "Projekt abgeben");
    todos
}

#[test]
fn test_remove_todo() {
    let mut todos = create_todos();
    assert_eq!(todos.len(), 3);

    remove_todo(&mut todos, 2);
    assert_eq!(todos.len(), 2);
    assert_eq!(todos[0].text, "Rust lernen");
    assert_eq!(todos[1].text, "Projekt abgeben");

    remove_todo(&mut todos, 1);
    assert_eq!(todos.len(), 1);
    assert_eq!(todos[0].text, "Projekt abgeben");
}
