use week_07_error_handling::*;

#[test]
fn test_safe_divide() {
    assert_eq!(safe_divide(6.0, 3.0), Ok(2.0));
    assert_eq!(safe_divide(10.0, 4.0), Ok(2.5));
    assert!(safe_divide(1.0, 0.0).is_err());
    assert_eq!(safe_divide(0.0, 5.0), Ok(0.0));
}

#[test]
fn test_parse_age() {
    assert_eq!(parse_age("25"), Ok(25));
    assert_eq!(parse_age("0"), Ok(0));
    assert_eq!(parse_age("-5"), Ok(-5));
    assert!(parse_age("abc").is_err());
    assert!(parse_age("").is_err());
}

#[test]
fn test_get_first_char() {
    assert_eq!(get_first_char("Hallo"), Some('H'));
    assert_eq!(get_first_char("Rust"), Some('R'));
    assert_eq!(get_first_char(""), None);
}

#[test]
fn test_get_length_safe() {
    assert_eq!(get_length_safe(Some("Hallo")), 5);
    assert_eq!(get_length_safe(Some("")), 0);
    assert_eq!(get_length_safe(None), 0);
}

#[test]
fn test_validate_email() {
    assert!(validate_email("a@b"));
    assert!(validate_email("test@example.com"));
    assert!(!validate_email("ab"));
    assert!(!validate_email("abc"));
    assert!(!validate_email("abcde"));
    assert!(!validate_email(""));
}
