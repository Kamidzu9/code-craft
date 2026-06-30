use week_03_structs_enums::*;

#[test]
fn test_person_new() {
    let p = Person::new("Alice", 30);
    assert_eq!(p.name, "Alice");
    assert_eq!(p.age, 30);
}

#[test]
fn test_person_greet() {
    let p = Person::new("Alice", 30);
    assert_eq!(p.greet(), "Hi, I'm Alice!");
}

#[test]
fn test_direction_describe() {
    assert_eq!(Direction::North.describe(), "going north");
    assert_eq!(Direction::South.describe(), "going south");
    assert_eq!(Direction::East.describe(), "going east");
    assert_eq!(Direction::West.describe(), "going west");
}

#[test]
fn test_direction_debug() {
    assert_eq!(format!("{:?}", Direction::North), "North");
}

#[test]
fn test_rectangle_area() {
    let r = Rectangle {
        width: 3.0,
        height: 4.0,
    };
    assert_eq!(r.area(), 12.0);
    assert_eq!(Rectangle {
        width: 0.0,
        height: 5.0,
    }
    .area(), 0.0);
}
