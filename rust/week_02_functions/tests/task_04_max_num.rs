use week_02_functions::*;

#[test]
fn test_max_num() {
    assert_eq!(max_num(3, 5), 5);
    assert_eq!(max_num(-1, -5), -1);
    assert_eq!(max_num(7, 7), 7);
}
