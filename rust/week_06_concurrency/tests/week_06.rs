use week_06_concurrency::*;

#[test]
fn test_spawn() {
    assert_eq!(spawn_join(), 42);
}

#[test]
fn test_channel() {
    assert_eq!(channel_example(), vec![1]);
}

#[test]
fn test_counter() {
    assert_eq!(shared_counter(), 10);
}

#[tokio::test]
async fn test_async_hello() {
    assert_eq!(async_hello().await, "hello");
}

#[tokio::test]
async fn test_run_tasks() {
    let (a, b) = run_tasks().await;
    assert_eq!(a, "hello");
    assert_eq!(b, "hello");
}
