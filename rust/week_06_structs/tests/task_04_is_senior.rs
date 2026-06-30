use week_06_structs::*;

#[test]
fn test_is_senior() {
    let p1 = Person::new("Senior", 65);
    assert!(is_senior(&p1));
    let p2 = Person::new("Junior", 64);
    assert!(!is_senior(&p2));
    let p3 = Person::new("Very Old", 100);
    assert!(is_senior(&p3));
}
