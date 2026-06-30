use week_04_loops::*;

#[test]
fn test_contains() {
    assert!(contains(&[1, 2, 3, 4, 5], 3));
    assert!(!contains(&[1, 2, 3], 5));
    assert!(!contains(&[], 1));
}
