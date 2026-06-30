pub fn longest<'a>(x: &'a str, y: &'a str) -> &'a str { if x.len() > y.len() { x } else { y } }
pub struct Excerpt<'a>(pub &'a str);
pub fn parse_num(s: &str) -> Result<i32, std::num::ParseIntError> { s.parse() }
pub fn read_file_str(path: &str) -> Result<String, std::io::Error> { std::fs::read_to_string(path) }
#[derive(Debug)]
pub struct MyError(pub String);
impl std::fmt::Display for MyError {
    fn fmt(&self, f: &mut std::fmt::Formatter) -> std::fmt::Result { write!(f, "MyError: {}", self.0) }
}
impl std::error::Error for MyError {}
#[cfg(test)]
mod tests {
    use super::*;
    #[test] fn test_longest() { assert_eq!(longest("ab", "xyz"), "xyz"); }
    #[test] fn test_parse() { assert_eq!(parse_num("42"), Ok(42)); }
}
