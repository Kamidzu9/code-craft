pub fn take_ownership(s: String) -> String { s }
pub fn borrow_length(s: &String) -> usize { s.len() }
pub fn append_world(s: &mut String) { s.push_str(" world"); }
pub fn sum_slice(nums: &[i32]) -> i32 { nums.iter().sum() }
pub fn first_word(s: &str) -> &str { s.split_whitespace().next().unwrap_or("") }
#[cfg(test)]
mod tests {
    use super::*;
    #[test] fn test_take_ownership() {
        let s = String::from("hello");
        assert_eq!(take_ownership(s), "hello");
    }
    #[test] fn test_borrow_length() {
        let s = String::from("hello");
        assert_eq!(borrow_length(&s), 5);
        let empty = String::from("");
        assert_eq!(borrow_length(&empty), 0);
    }
    #[test] fn test_append_world() {
        let mut s = String::from("hello");
        append_world(&mut s);
        assert_eq!(s, "hello world");
        let mut s2 = String::from("");
        append_world(&mut s2);
        assert_eq!(s2, " world");
    }
    #[test] fn test_sum_slice() { assert_eq!(sum_slice(&[1, 2, 3]), 6); assert_eq!(sum_slice(&[]), 0); assert_eq!(sum_slice(&[-1, 1]), 0); }
    #[test] fn test_first_word() {
        assert_eq!(first_word("hello world"), "hello");
        assert_eq!(first_word("rust"), "rust");
        assert_eq!(first_word(""), "");
        assert_eq!(first_word("  "), "");
    }
}
