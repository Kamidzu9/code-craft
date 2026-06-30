use week_03_conditionals::*;

#[test]
fn test_absolute() {
    assert_eq!(absolute(5), 5);
    assert_eq!(absolute(-5), 5);
    assert_eq!(absolute(0), 0);
}
