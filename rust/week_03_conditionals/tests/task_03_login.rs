use week_03_conditionals::*;

#[test]
fn test_login() {
    assert!(login("admin", "secret"));
    assert!(!login("admin", "wrong"));
    assert!(!login("user", "secret"));
    assert!(!login("", ""));
}
