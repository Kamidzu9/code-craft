use week_02_functions::*;

#[test]
fn test_rectangle_area() {
    assert_eq!(rectangle_area(3.0, 4.0), 12.0);
    assert_eq!(rectangle_area(0.0, 5.0), 0.0);
    assert_eq!(rectangle_area(2.5, 2.0), 5.0);
}
