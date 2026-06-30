use week_03_conditionals::*;

#[test]
fn test_grade() {
    assert_eq!(grade(95), "A");
    assert_eq!(grade(85), "B");
    assert_eq!(grade(75), "C");
    assert_eq!(grade(65), "D");
    assert_eq!(grade(50), "F");
    assert_eq!(grade(90), "A");
    assert_eq!(grade(80), "B");
    assert_eq!(grade(70), "C");
    assert_eq!(grade(60), "D");
}
