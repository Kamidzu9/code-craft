use week_04_loops::*;

#[test]
fn test_count_to() {
    assert_eq!(count_to(5), vec![1, 2, 3, 4, 5]);
    assert_eq!(count_to(1), vec![1]);
    assert_eq!(count_to(0), vec![]);
}
