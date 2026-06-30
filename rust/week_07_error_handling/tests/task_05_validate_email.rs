use week_07_error_handling::*;

#[test]
fn test_validate_email() {
    assert!(validate_email("a@b"));
    assert!(validate_email("test@example.com"));
    assert!(!validate_email("ab"));
    assert!(!validate_email("abc"));
    assert!(!validate_email("abcde"));
    assert!(!validate_email(""));
}
