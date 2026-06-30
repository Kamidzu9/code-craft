use week_02_functions::*;

#[test]
fn test_describe_temperature() {
    assert_eq!(describe_temperature(35), "hot");
    assert_eq!(describe_temperature(20), "warm");
    assert_eq!(describe_temperature(10), "cold");
    assert_eq!(describe_temperature(30), "warm");
    assert_eq!(describe_temperature(31), "hot");
}
