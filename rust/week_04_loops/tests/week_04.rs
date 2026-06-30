use week_04_loops::*;

#[test]
fn test_count_to() {
    assert_eq!(count_to(5), vec![1, 2, 3, 4, 5]);
    assert_eq!(count_to(1), vec![1]);
    assert_eq!(count_to(0), vec![]);
}

#[test]
fn test_sum_to() {
    assert_eq!(sum_to(5), 15);
    assert_eq!(sum_to(1), 1);
    assert_eq!(sum_to(0), 0);
    assert_eq!(sum_to(10), 55);
}

#[test]
fn test_countdown() {
    assert_eq!(countdown(5), vec![5, 4, 3, 2, 1]);
    assert_eq!(countdown(1), vec![1]);
    assert_eq!(countdown(0), vec![]);
}

#[test]
fn test_contains() {
    assert!(contains(&[1, 2, 3, 4, 5], 3));
    assert!(!contains(&[1, 2, 3], 5));
    assert!(!contains(&[], 1));
}

#[test]
fn test_multiply_table() {
    assert_eq!(multiply_table(3), vec![3, 6, 9, 12, 15, 18, 21, 24, 27, 30]);
    assert_eq!(multiply_table(1), vec![1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    assert_eq!(multiply_table(0), vec![0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
}
