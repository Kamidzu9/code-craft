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
    #[test] fn test_longest() {
        assert_eq!(longest("ab", "xyz"), "xyz");
        assert_eq!(longest("hello", "hi"), "hello");
        assert_eq!(longest("same", "same"), "same");
    }
    #[test] fn test_excerpt() {
        let s = String::from("hello world");
        let e = Excerpt(&s);
        assert_eq!(e.0, "hello world");
    }
    #[test] fn test_parse_num() {
        assert_eq!(parse_num("42"), Ok(42));
        assert_eq!(parse_num("-5"), Ok(-5));
        assert!(parse_num("abc").is_err());
    }
    #[test] fn test_read_file_str() {
        let result = read_file_str("Cargo.toml");
        assert!(result.is_ok());
        let content = result.unwrap();
        assert!(content.contains("week_05_lifetimes_errors"));
        let err = read_file_str("/nonexistent/file");
        assert!(err.is_err());
    }
    #[test] fn test_my_error() {
        let e = MyError("oops".into());
        assert_eq!(format!("{}", e), "MyError: oops");
        assert_eq!(format!("{:?}", e), "MyError(\"oops\")");
    }
}
