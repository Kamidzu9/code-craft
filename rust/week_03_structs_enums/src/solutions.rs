// TODO: Definiere eine Person-Struct mit name: String und age: u8
pub struct Person {
    pub name: String,
    pub age: u8,
}

impl Person {
    // TODO: Erstelle eine neue Person
    pub fn new(_name: &str, _age: u8) -> Self {
        todo!()
    }

    // TODO: Gib "Hi, I'm {name}!" zurück
    pub fn greet(&self) -> String {
        todo!()
    }
}

// TODO: Definiere ein Direction-Enum mit North, South, East, West
#[derive(Debug, PartialEq)]
pub enum Direction {
    North,
    South,
    East,
    West,
}

impl Direction {
    // TODO: Beschreibe die Richtung als String
    pub fn describe(&self) -> String {
        todo!()
    }
}

// TODO: Definiere ein Rectangle-Struct mit width: f64 und height: f64
pub struct Rectangle {
    pub width: f64,
    pub height: f64,
}

impl Rectangle {
    // TODO: Berechne die Fläche (width * height)
    pub fn area(&self) -> f64 {
        todo!()
    }
}
