use std::io;

// TODO: Zähle die Zeilen einer Datei
pub fn count_lines(_path: &str) -> io::Result<usize> {
    todo!()
}

// TODO: Definiere CliArgs-Struct
pub struct CliArgs {
    pub path: String,
    pub verbose: bool,
}

// TODO: Gib "N lines" bei Erfolg oder "Error: ..." bei Fehler zurück
pub fn handle_not_found(_path: &str) -> String {
    todo!()
}

// TODO: Schreibe mehrere Zeilen in eine Datei (mit \n getrennt)
pub fn write_lines(_path: &str, _lines: &[&str]) -> io::Result<()> {
    todo!()
}

use std::time::Duration;

// TODO: Messe die Ausführungszeit einer Funktion
pub fn bench_fn<F: FnOnce()>(_f: F) -> Duration {
    todo!()
}
