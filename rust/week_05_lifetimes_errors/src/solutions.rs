// TODO: Gib den längeren der beiden Strings zurück
pub fn longest<'a>(_x: &'a str, _y: &'a str) -> &'a str {
    todo!()
}

// TODO: Definiere eine Excerpt-Struct, die einen Referenz auf einen String hält
pub struct Excerpt<'a>(pub &'a str);

// TODO: Parse einen String in i32, gib Result zurück
pub fn parse_num(_s: &str) -> Result<i32, std::num::ParseIntError> {
    todo!()
}

// TODO: Lese eine Datei und gib den Inhalt als String zurück
pub fn read_file_str(_path: &str) -> Result<String, std::io::Error> {
    todo!()
}

// TODO: Definiere einen eigenen Error-Typ MyError
#[derive(Debug)]
pub struct MyError(pub String);

impl std::fmt::Display for MyError {
    fn fmt(&self, _f: &mut std::fmt::Formatter) -> std::fmt::Result {
        todo!()
    }
}

impl std::error::Error for MyError {}
