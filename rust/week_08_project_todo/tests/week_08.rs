use week_08_project_todo::*;

fn create_todos() -> Vec<TodoItem> {
    let mut todos = Vec::new();
    add_todo(&mut todos, "Rust lernen");
    add_todo(&mut todos, "Tests schreiben");
    add_todo(&mut todos, "Projekt abgeben");
    todos
}

#[test]
fn test_add_todo() {
    let mut todos = Vec::new();
    add_todo(&mut todos, "Aufgabe 1");
    assert_eq!(todos.len(), 1);
    assert_eq!(todos[0].text, "Aufgabe 1");
    assert!(!todos[0].done);

    add_todo(&mut todos, "Aufgabe 2");
    assert_eq!(todos.len(), 2);
    assert_eq!(todos[1].id, 2);
}

#[test]
fn test_list_todos() {
    let todos = create_todos();
    let texte = list_todos(&todos);
    assert_eq!(texte, vec!["Rust lernen", "Tests schreiben", "Projekt abgeben"]);
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

#[test]
fn test_todo_item_struct() {
    let item = TodoItem {
        id: 42,
        text: String::from("Test"),
        done: true,
    };
    assert_eq!(item.id, 42);
    assert_eq!(item.text, "Test");
    assert!(item.done);
}
