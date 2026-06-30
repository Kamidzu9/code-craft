use week_07_error_handling::*;

#[test]
fn test_get_first_char() {
    assert_eq!(get_first_char("Hallo"), Some('H'));
    assert_eq!(get_first_char("Rust"), Some('R'));
    assert_eq!(get_first_char(""), None);
}
