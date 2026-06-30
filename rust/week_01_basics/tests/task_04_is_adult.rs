use week_01_basics::*;

#[test]
fn test_is_adult() {
    assert!(is_adult(18));
    assert!(is_adult(25));
    assert!(!is_adult(17));
    assert!(!is_adult(0));
}
