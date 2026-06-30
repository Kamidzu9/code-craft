use week_07_error_handling::*;

#[test]
fn test_get_length_safe() {
    assert_eq!(get_length_safe(Some("Hallo")), 5);
    assert_eq!(get_length_safe(Some("")), 0);
    assert_eq!(get_length_safe(None), 0);
}
