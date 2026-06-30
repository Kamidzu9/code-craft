use week_01_basics::*;

#[test]
fn test_greet() {
    assert_eq!(greet("World"), "Hello, World!");
    assert_eq!(greet("Rust"), "Hello, Rust!");
}

#[test]
fn test_add() {
    assert_eq!(add(2, 3), 5);
    assert_eq!(add(-1, 1), 0);
    assert_eq!(add(0, 0), 0);
}

#[test]
fn test_is_even() {
    assert!(is_even(2));
    assert!(!is_even(3));
    assert!(is_even(0));
    assert!(!is_even(-1));
}

#[test]
fn test_factorial() {
    assert_eq!(factorial(5), 120);
    assert_eq!(factorial(0), 1);
    assert_eq!(factorial(1), 1);
}

#[test]
fn test_describe_option() {
    assert_eq!(describe_option(Some(42)), "Some(42)");
    assert_eq!(describe_option::<i32>(None), "None");
    assert_eq!(describe_option(Some("hi")), "Some(hi)");
}
