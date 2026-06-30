pub fn deref_raw() -> i32 { let x = 42; let r = &x as *const i32; unsafe { *r } }
extern "C" { fn c_add(a: i32, b: i32) -> i32; }
pub fn call_c_add(a: i32, b: i32) -> i32 { unsafe { c_add(a, b) } }
#[macro_export] macro_rules! say_hello { () => { println!("Hello!"); }; }
pub fn use_macro() { say_hello!(); }
static mut COUNTER: u32 = 0;
pub fn static_mut_inc() -> u32 { unsafe { COUNTER += 1; COUNTER } }
pub fn safe_divide(a: i32, b: i32) -> Option<i32> { if b == 0 { None } else { Some(a / b) } }
#[cfg(test)]
mod tests {
    use super::*;
    #[test] fn test_deref() { assert_eq!(deref_raw(), 42); }
    #[test] fn test_static_mut_inc() {
        let a = static_mut_inc();
        let b = static_mut_inc();
        assert!(b > a);
    }
    #[test] fn test_use_macro() { use_macro(); }
    #[test] fn test_divide() {
        assert_eq!(safe_divide(6, 3), Some(2));
        assert_eq!(safe_divide(1, 0), None);
        assert_eq!(safe_divide(-6, 3), Some(-2));
    }
}
