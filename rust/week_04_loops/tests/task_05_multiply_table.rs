use week_04_loops::*;

#[test]
fn test_multiply_table() {
    assert_eq!(multiply_table(3), vec![3, 6, 9, 12, 15, 18, 21, 24, 27, 30]);
    assert_eq!(multiply_table(1), vec![1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    assert_eq!(multiply_table(0), vec![0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
}
