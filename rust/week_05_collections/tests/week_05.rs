use week_05_collections::*;

#[test]
fn test_first_element() {
    assert_eq!(first_element(&[1, 2, 3]), Some(1));
    assert_eq!(first_element(&[42]), Some(42));
    assert_eq!(first_element(&[]), None);
}

#[test]
fn test_add_element() {
    assert_eq!(add_element(&[1, 2, 3], 4), vec![1, 2, 3, 4]);
    assert_eq!(add_element(&[], 5), vec![5]);
}

#[test]
fn test_double() {
    assert_eq!(double(&[1, 2, 3]), vec![2, 4, 6]);
    assert_eq!(double(&[]), vec![]);
    assert_eq!(double(&[-1, 0, 3]), vec![-2, 0, 6]);
}

#[test]
fn test_find_max() {
    assert_eq!(find_max(&[3, 7, 2, 9, 1]), Some(9));
    assert_eq!(find_max(&[-5, -2, -8]), Some(-2));
    assert_eq!(find_max(&[42]), Some(42));
    assert_eq!(find_max(&[]), None);
}

#[test]
fn test_even_numbers() {
    assert_eq!(even_numbers(&[1, 2, 3, 4, 5, 6]), vec![2, 4, 6]);
    assert_eq!(even_numbers(&[1, 3, 5]), vec![]);
    assert_eq!(even_numbers(&[]), vec![]);
    assert_eq!(even_numbers(&[0, -2, -3]), vec![0, -2]);
}
