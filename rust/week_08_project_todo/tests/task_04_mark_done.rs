use week_08_project_todo::*;

fn create_todos() -> Vec<TodoItem> {
    let mut todos = Vec::new();
    add_todo(&mut todos, "Rust lernen");
    add_todo(&mut todos, "Tests schreiben");
    add_todo(&mut todos, "Projekt abgeben");
    todos
}

#[test]
fn test_mark_done() {
    let mut todos = create_todos();
    mark_done(&mut todos, 1);
    assert!(todos[0].done);
    assert!(!todos[1].done);

    mark_done(&mut todos, 2);
    assert!(todos[1].done);
}
