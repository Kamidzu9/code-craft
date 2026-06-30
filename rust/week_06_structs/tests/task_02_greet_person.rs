use week_06_structs::*;

#[test]
fn test_greet_person() {
    let p = Person::new("Bob", 25);
    assert_eq!(greet_person(&p), "Hello, Bob!");
}
