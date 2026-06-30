use week_07_error_handling::*;

#[test]
fn test_parse_age() {
    assert_eq!(parse_age("25"), Ok(25));
    assert_eq!(parse_age("0"), Ok(0));
    assert_eq!(parse_age("-5"), Ok(-5));
    assert!(parse_age("abc").is_err());
    assert!(parse_age("").is_err());
}
