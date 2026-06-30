use week_02_functions::*;

#[test]
fn test_is_positive() {
    assert!(is_positive(5));
    assert!(!is_positive(0));
    assert!(!is_positive(-3));
}
