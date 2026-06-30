// TODO: Dereferenziere einen Raw Pointer auf i32 (unsafe)
pub fn deref_raw() -> i32 {
    todo!()
}

// TODO: Rufe die externe C-Funktion c_add auf (unsafe)
pub fn call_c_add(_a: i32, _b: i32) -> i32 {
    todo!()
}

// TODO: Definiere ein Makro say_hello!, das "Hello!" ausgibt
#[macro_export]
macro_rules! say_hello {
    () => {
        todo!()
    };
}

// TODO: Rufe das say_hello!-Makro auf
pub fn use_macro() {
    todo!()
}

#[allow(dead_code)]
static mut COUNTER: u32 = 0;

// TODO: Inkrementiere die statische mutable Variable COUNTER (unsafe)
pub fn static_mut_inc() -> u32 {
    todo!()
}

// TODO: Teile a durch b, gib None bei Division durch 0
pub fn safe_divide(_a: i32, _b: i32) -> Option<i32> {
    todo!()
}
