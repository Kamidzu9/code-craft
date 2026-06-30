pub trait Summary { fn summarize(&self) -> String; }
pub struct Article { pub title: String, pub author: String }
impl Summary for Article {
    fn summarize(&self) -> String { format!("{} by {}", self.title, self.author) }
}
pub fn largest<T: PartialOrd>(list: &[T]) -> &T { &list[0] }
use std::fmt;
pub struct Person2 { pub name: String, pub age: u8 }
impl fmt::Display for Person2 {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result { write!(f, "{} ({})", self.name, self.age) }
}
impl fmt::Debug for Person2 {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        f.debug_struct("Person2").field("name", &self.name).field("age", &self.age).finish()
    }
}
#[cfg(test)]
mod tests {
    use super::*;
    #[test] fn test_summary() {
        let a = Article { title: "Rust".into(), author: "Alice".into() };
        assert_eq!(a.summarize(), "Rust by Alice");
    }
    #[test] fn test_largest() {
        assert_eq!(*largest(&[1, 3, 2]), 3);
        assert_eq!(*largest(&['a', 'c', 'b']), 'c');
        assert_eq!(*largest(&[5]), 5);
    }
    #[test] fn test_person2_display() {
        let p = Person2 { name: "Bob".into(), age: 25 };
        assert_eq!(format!("{}", p), "Bob (25)");
    }
    #[test] fn test_person2_debug() {
        let p = Person2 { name: "Bob".into(), age: 25 };
        assert_eq!(format!("{:?}", p), "Person2 { name: \"Bob\", age: 25 }");
    }
}
