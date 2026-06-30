use week_04_loops::*;

#[test]
fn test_countdown() {
    assert_eq!(countdown(5), vec![5, 4, 3, 2, 1]);
    assert_eq!(countdown(1), vec![1]);
    assert_eq!(countdown(0), vec![]);
}
