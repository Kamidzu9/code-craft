use week_07_error_handling::*;

#[test]
fn test_safe_divide() {
    assert_eq!(safe_divide(6.0, 3.0), Ok(2.0));
    assert_eq!(safe_divide(10.0, 4.0), Ok(2.5));
    assert!(safe_divide(1.0, 0.0).is_err());
    assert_eq!(safe_divide(0.0, 5.0), Ok(0.0));
}
