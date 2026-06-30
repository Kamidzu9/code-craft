pub fn take_ownership(s: String) -> String { s }
pub fn borrow_length(s: &String) -> usize { s.len() }
pub fn append_world(s: &mut String) { s.push_str(" world"); }
pub fn sum_slice(nums: &[i32]) -> i32 { nums.iter().sum() }
pub fn first_word(s: &str) -> &str { s.split_whitespace().next().unwrap_or("") }
#[cfg(test)]
mod tests {
    use super::*;
    #[test] fn test_sum_slice() { assert_eq!(sum_slice(&[1,2,3]), 6); }
}
