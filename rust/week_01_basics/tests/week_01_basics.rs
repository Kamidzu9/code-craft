use week_01_basics::*;

#[test]
fn test_greet() {
    assert_eq!(greet(), "Hello, World!");
}

#[test]
fn test_create_name() {
    assert_eq!(create_name(), "Rust");
}

#[test]
fn test_add() {
    assert_eq!(add(2, 3), 5);
    assert_eq!(add(-1, 1), 0);
    assert_eq!(add(0, 0), 0);
}

#[test]
fn test_is_adult() {
    assert!(is_adult(18));
    assert!(is_adult(25));
    assert!(!is_adult(17));
    assert!(!is_adult(0));
}

#[test]
fn test_introduce() {
    assert_eq!(introduce("Alice", 30), "Hi, I'm Alice and I'm 30 years old!");
    assert_eq!(introduce("Bob", 25), "Hi, I'm Bob and I'm 25 years old!");
}
