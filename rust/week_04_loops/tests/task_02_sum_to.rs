use week_04_loops::*;

#[test]
fn test_sum_to() {
    assert_eq!(sum_to(5), 15);
    assert_eq!(sum_to(1), 1);
    assert_eq!(sum_to(0), 0);
    assert_eq!(sum_to(10), 55);
}
