use week_05_collections::*;

#[test]
fn test_double() {
    assert_eq!(double(&[1, 2, 3]), vec![2, 4, 6]);
    assert_eq!(double(&[]), vec![]);
    assert_eq!(double(&[-1, 0, 3]), vec![-2, 0, 6]);
}
