use week_08_project_todo::*;

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
