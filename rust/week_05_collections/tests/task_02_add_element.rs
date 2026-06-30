use week_05_collections::*;

#[test]
fn test_add_element() {
    assert_eq!(add_element(&[1, 2, 3], 4), vec![1, 2, 3, 4]);
    assert_eq!(add_element(&[], 5), vec![5]);
}
