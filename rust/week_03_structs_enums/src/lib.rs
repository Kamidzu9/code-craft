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
    #[test] fn test_person_new() {
        let p = Person::new("Alice", 30);
        assert_eq!(p.name, "Alice");
        assert_eq!(p.age, 30);
    }
    #[test] fn test_person_greet() { let p = Person::new("Alice", 30); assert_eq!(p.greet(), "Hi, I'm Alice!"); }
    #[test] fn test_direction_describe() {
        assert_eq!(Direction::North.describe(), "going north");
        assert_eq!(Direction::South.describe(), "going south");
        assert_eq!(Direction::East.describe(), "going east");
        assert_eq!(Direction::West.describe(), "going west");
    }
    #[test] fn test_direction_debug() {
        assert_eq!(format!("{:?}", Direction::North), "North");
    }
    #[test] fn test_rectangle_area() {
        let r = Rectangle { width: 3.0, height: 4.0 };
        assert_eq!(r.area(), 12.0);
        assert_eq!(Rectangle { width: 0.0, height: 5.0 }.area(), 0.0);
    }
}
