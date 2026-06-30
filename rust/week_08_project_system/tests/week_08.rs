use std::fs;
use week_08_project_system::*;

#[test]
fn test_count_lines() {
    let n = count_lines("Cargo.toml").unwrap();
    assert!(n > 0);
}

#[test]
fn test_handle_not_found() {
    let result = handle_not_found("Cargo.toml");
    assert!(result.contains("lines"));
    let err = handle_not_found("/nonexistent/xyz");
    assert!(err.starts_with("Error:"));
}

#[test]
fn test_write_lines() {
    let path = "/tmp/rust_test_write.txt";
    let _ = write_lines(path, &["a", "b", "c"]);
    let content = fs::read_to_string(path).unwrap();
    assert_eq!(content, "a\nb\nc");
    let _ = fs::remove_file(path);
}

#[test]
fn test_cli_args() {
    let args = CliArgs {
        path: "test.txt".into(),
        verbose: true,
    };
    assert_eq!(args.path, "test.txt");
    assert!(args.verbose);
}

#[test]
fn test_bench() {
    let _d = bench_fn(|| {});
}
