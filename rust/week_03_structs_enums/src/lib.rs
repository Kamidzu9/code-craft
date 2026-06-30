pub struct Person { pub name: String, pub age: u8 }
impl Person {
    pub fn new(name: &str, age: u8) -> Self { Self { name: name.to_string(), age } }
    pub fn greet(&self) -> String { format!("Hi, I'm {}!", self.name) }
}
#[derive(Debug, PartialEq)]
pub enum Direction { North, South, East, West }
impl Direction {
    pub fn describe(&self) -> String {
        match self { Direction::North => "going north", Direction::South => "going south", Direction::East => "going east", Direction::West => "going west" }.to_string()
    }
}
pub struct Rectangle { pub width: f64, pub height: f64 }
impl Rectangle { pub fn area(&self) -> f64 { self.width * self.height } }
#[cfg(test)]
mod tests {
    use super::*;
    #[test] fn test_person() { let p = Person::new("Alice", 30); assert_eq!(p.greet(), "Hi, I'm Alice!"); }
    #[test] fn test_dir() { assert_eq!(Direction::North.describe(), "going north"); }
    #[test] fn test_area() { let r = Rectangle { width: 3.0, height: 4.0 }; assert_eq!(r.area(), 12.0); }
}
