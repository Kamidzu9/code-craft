use week_06_structs::*;

#[test]
fn test_birthday() {
    let mut p = Person::new("Charlie", 17);
    birthday(&mut p);
    assert_eq!(p.age, 18);
    birthday(&mut p);
    assert_eq!(p.age, 19);
}
