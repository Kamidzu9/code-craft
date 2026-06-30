use week_02_functions::*;

#[test]
fn test_say_hello() {
    assert_eq!(say_hello("World"), "Hello, World!");
    assert_eq!(say_hello("Rust"), "Hello, Rust!");
}
