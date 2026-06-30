// TODO: Füge die Felder name: String und age: u8 hinzu
pub struct Person {
    pub name: String,
    pub age: u8,
}

impl Person {
    // TODO: Erstelle eine neue Person mit name und age
    pub fn new(_name: &str, _age: u8) -> Person {
        todo!()
    }
}

// TODO: Gib "Hello, {name}!" zurück
pub fn greet_person(_person: &Person) -> String {
    todo!()
}

// TODO: Erhöhe age um 1
pub fn birthday(_person: &mut Person) {
    todo!()
}

// TODO: Gib true zurück, wenn age >= 65
pub fn is_senior(_person: &Person) -> bool {
    todo!()
}

// TODO: Füge die Felder name: String, members: Vec<String> und count: usize hinzu
pub struct Team {
    pub name: String,
    pub members: Vec<String>,
    pub count: usize,
}

impl Team {
    // TODO: Erstelle ein neues Team (count = members.len())
    pub fn new(_name: &str, _members: Vec<String>) -> Team {
        todo!()
    }
}
