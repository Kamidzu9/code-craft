# Aufgaben

1. Schreibe eine Funktion `safe_divide(a: f64, b: f64) -> Result<f64, String>`, die `Ok(a/b)` oder `Err("Division durch Null")` zurückgibt.
2. Schreibe eine Funktion `parse_age(input: &str) -> Result<i32, String>`, die einen Text in eine Zahl umwandelt oder `Err("Keine gültige Zahl")` zurückgibt.
3. Schreibe eine Funktion `get_first_char(s: &str) -> Option<char>`, die den ersten Buchstaben oder `None` bei leerem String zurückgibt.
4. Schreibe eine Funktion `get_length_safe(s: Option<&str>) -> usize`, die die Länge des Strings zurückgibt oder `0` bei `None`.
5. Schreibe eine Funktion `validate_email(email: &str) -> bool`, die prüft, ob die E-Mail "@" enthält und mindestens 3 Zeichen lang ist.
