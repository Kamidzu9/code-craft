pub fn greet(name: &str) -> String { format!("Hello, {}!", name) }
pub fn add(a: i32, b: i32) -> i32 { todo!() }
pub fn is_even(n: i32) -> bool { n % 2 == 0 }
pub fn factorial(n: u64) -> u64 { (1..=n).product() }
pub fn describe_option<T: std::fmt::Display>(opt: Option<T>) -> String {
    match opt { Some(v) => format!("Some({})", v), None => "None".to_string() }
}
#[cfg(test)]
mod tests {
    use super::*;
    #[test] fn test_add() { assert_eq!(add(2, 3), 5); }
    #[test] fn test_is_even() { assert!(is_even(2)); assert!(!is_even(3)); }
}
