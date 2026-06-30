use week_05_collections::*;

#[test]
fn test_find_max() {
    assert_eq!(find_max(&[3, 7, 2, 9, 1]), Some(9));
    assert_eq!(find_max(&[-5, -2, -8]), Some(-2));
    assert_eq!(find_max(&[42]), Some(42));
    assert_eq!(find_max(&[]), None);
}
