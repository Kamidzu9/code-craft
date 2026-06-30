use week_07_unsafe_macros::*;

#[test]
fn test_deref() {
    assert_eq!(deref_raw(), 42);
}

#[test]
fn test_static_mut_inc() {
    let a = static_mut_inc();
    let b = static_mut_inc();
    assert!(b > a);
}

#[test]
fn test_use_macro() {
    use_macro();
}

#[test]
fn test_divide() {
    assert_eq!(safe_divide(6, 3), Some(2));
    assert_eq!(safe_divide(1, 0), None);
    assert_eq!(safe_divide(-6, 3), Some(-2));
}
