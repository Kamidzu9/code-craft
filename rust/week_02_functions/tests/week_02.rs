use week_02_functions::*;

#[test]
fn test_say_hello() {
    assert_eq!(say_hello("World"), "Hello, World!");
    assert_eq!(say_hello("Rust"), "Hello, Rust!");
}

#[test]
fn test_rectangle_area() {
    assert_eq!(rectangle_area(3.0, 4.0), 12.0);
    assert_eq!(rectangle_area(0.0, 5.0), 0.0);
    assert_eq!(rectangle_area(2.5, 2.0), 5.0);
}

#[test]
fn test_is_positive() {
    assert!(is_positive(5));
    assert!(!is_positive(0));
    assert!(!is_positive(-3));
}

#[test]
fn test_max_num() {
    assert_eq!(max_num(3, 5), 5);
    assert_eq!(max_num(-1, -5), -1);
    assert_eq!(max_num(7, 7), 7);
}

#[test]
fn test_describe_temperature() {
    assert_eq!(describe_temperature(35), "hot");
    assert_eq!(describe_temperature(20), "warm");
    assert_eq!(describe_temperature(10), "cold");
    assert_eq!(describe_temperature(30), "warm");
    assert_eq!(describe_temperature(31), "hot");
}
