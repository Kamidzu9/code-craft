use week_03_conditionals::*;

#[test]
fn test_animal_sound() {
    assert_eq!(animal_sound("dog"), "woof");
    assert_eq!(animal_sound("cat"), "meow");
    assert_eq!(animal_sound("cow"), "unknown");
    assert_eq!(animal_sound(""), "unknown");
}
