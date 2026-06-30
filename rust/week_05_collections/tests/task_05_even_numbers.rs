use week_05_collections::*;

#[test]
fn test_even_numbers() {
    assert_eq!(even_numbers(&[1, 2, 3, 4, 5, 6]), vec![2, 4, 6]);
    assert_eq!(even_numbers(&[1, 3, 5]), vec![]);
    assert_eq!(even_numbers(&[]), vec![]);
    assert_eq!(even_numbers(&[0, -2, -3]), vec![0, -2]);
}
