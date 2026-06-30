use week_08_project_todo::*;

fn create_todos() -> Vec<TodoItem> {
    let mut todos = Vec::new();
    add_todo(&mut todos, "Rust lernen");
    add_todo(&mut todos, "Tests schreiben");
    add_todo(&mut todos, "Projekt abgeben");
    todos
}

#[test]
fn test_list_todos() {
    let todos = create_todos();
    let texte = list_todos(&todos);
    assert_eq!(texte, vec!["Rust lernen", "Tests schreiben", "Projekt abgeben"]);
}
