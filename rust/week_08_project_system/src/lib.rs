use std::fs; use std::io;
pub fn count_lines(path: &str) -> io::Result<usize> { Ok(fs::read_to_string(path)?.lines().count()) }
pub struct CliArgs { pub path: String, pub verbose: bool }
pub fn handle_not_found(path: &str) -> String {
    match count_lines(path) { Ok(n) => format!("{} lines", n), Err(e) => format!("Error: {}", e) }
}
pub fn write_lines(path: &str, lines: &[&str]) -> io::Result<()> { fs::write(path, lines.join("\n")) }
use std::time::{Duration, Instant};
pub fn bench_fn<F: FnOnce()>(f: F) -> Duration { let s = Instant::now(); f(); s.elapsed() }
#[cfg(test)]
mod tests {
    use super::*;
    #[test] fn test_count_lines() {
        let n = count_lines("Cargo.toml").unwrap();
        assert!(n > 0);
    }
    #[test] fn test_handle_not_found() {
        let result = handle_not_found("Cargo.toml");
        assert!(result.contains("lines"));
        let err = handle_not_found("/nonexistent/xyz");
        assert!(err.starts_with("Error:"));
    }
    #[test] fn test_write_lines() {
        let path = "/tmp/rust_test_write.txt";
        let _ = write_lines(path, &["a", "b", "c"]);
        let content = fs::read_to_string(path).unwrap();
        assert_eq!(content, "a\nb\nc");
        let _ = fs::remove_file(path);
    }
    #[test] fn test_cli_args() {
        let args = CliArgs { path: "test.txt".into(), verbose: true };
        assert_eq!(args.path, "test.txt");
        assert!(args.verbose);
    }
    #[test] fn test_bench() { let _d = bench_fn(|| {}); }
}
