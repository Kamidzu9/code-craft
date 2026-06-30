use std::thread;
pub fn spawn_join() -> i32 { let h = thread::spawn(|| 42); h.join().unwrap() }
use std::sync::mpsc;
pub fn channel_example() -> Vec<i32> { let (tx, rx) = mpsc::channel(); tx.send(1).unwrap(); drop(tx); rx.iter().collect() }
use std::sync::{Arc, Mutex};
pub fn shared_counter() -> i32 {
    let counter = Arc::new(Mutex::new(0)); let mut hs = vec![];
    for _ in 0..10 { let c = Arc::clone(&counter); hs.push(thread::spawn(move || *c.lock().unwrap() += 1)); }
    for h in hs { h.join().unwrap(); } let result = *counter.lock().unwrap(); result
}
pub async fn async_hello() -> String { "hello".to_string() }
pub async fn run_tasks() -> (String, String) { tokio::join!(async_hello(), async_hello()) }
#[cfg(test)]
mod tests {
    use super::*;
    #[test] fn test_spawn() { assert_eq!(spawn_join(), 42); }
    #[test] fn test_channel() { assert_eq!(channel_example(), vec![1]); }
    #[test] fn test_counter() { assert_eq!(shared_counter(), 10); }
}
