use week_04_traits_generics::*;

#[test]
fn test_summary() {
    let a = Article {
        title: "Rust".into(),
        author: "Alice".into(),
    };
    assert_eq!(a.summarize(), "Rust by Alice");
}

#[test]
fn test_largest() {
    assert_eq!(*largest(&[1, 3, 2]), 3);
    assert_eq!(*largest(&['a', 'c', 'b']), 'c');
    assert_eq!(*largest(&[5]), 5);
}

#[test]
fn test_person2_display() {
    let p = Person2 {
        name: "Bob".into(),
        age: 25,
    };
    assert_eq!(format!("{}", p), "Bob (25)");
}

#[test]
fn test_person2_debug() {
    let p = Person2 {
        name: "Bob".into(),
        age: 25,
    };
    assert_eq!(
        format!("{:?}", p),
        "Person2 { name: \"Bob\", age: 25 }"
    );
}
