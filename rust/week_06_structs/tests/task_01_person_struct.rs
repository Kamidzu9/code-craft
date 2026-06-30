use week_06_structs::*;

#[test]
fn test_person_new() {
    let p = Person::new("Alice", 30);
    assert_eq!(p.name, "Alice");
    assert_eq!(p.age, 30);
}
