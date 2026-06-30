use week_05_collections::*;

#[test]
fn test_first_element() {
    assert_eq!(first_element(&[1, 2, 3]), Some(1));
    assert_eq!(first_element(&[42]), Some(42));
    assert_eq!(first_element(&[]), None);
}
