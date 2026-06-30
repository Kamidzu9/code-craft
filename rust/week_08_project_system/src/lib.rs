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
    #[test] fn test_bench() { let d = bench_fn(|| {}); assert!(d.as_nanos() >= 0); }
}
