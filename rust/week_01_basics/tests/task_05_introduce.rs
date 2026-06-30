use week_01_basics::*;

#[test]
fn test_introduce() {
    assert_eq!(introduce("Alice", 30), "Hi, I'm Alice and I'm 30 years old!");
    assert_eq!(introduce("Bob", 25), "Hi, I'm Bob and I'm 25 years old!");
}
