use week_03_conditionals::*;

#[test]
fn test_can_vote() {
    assert!(can_vote(18));
    assert!(can_vote(99));
    assert!(!can_vote(17));
    assert!(!can_vote(0));
}

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

#[test]
fn test_login() {
    assert!(login("admin", "secret"));
    assert!(!login("admin", "wrong"));
    assert!(!login("user", "secret"));
    assert!(!login("", ""));
}

#[test]
fn test_absolute() {
    assert_eq!(absolute(5), 5);
    assert_eq!(absolute(-5), 5);
    assert_eq!(absolute(0), 0);
}

#[test]
fn test_animal_sound() {
    assert_eq!(animal_sound("dog"), "woof");
    assert_eq!(animal_sound("cat"), "meow");
    assert_eq!(animal_sound("cow"), "unknown");
    assert_eq!(animal_sound(""), "unknown");
}
