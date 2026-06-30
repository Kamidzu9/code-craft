use week_08_project_todo::*;

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
