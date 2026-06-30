# Notizen - Woche 7: Fehlerbehandlung

## Result<T, E>

`Result` ist ein Enum für Operationen, die fehlschlagen können:

```rust
enum Result<T, E> {
    Ok(T),   // Erfolg mit Wert
    Err(E),  // Fehler mit Fehlerwert
}
```

```rust
fn safe_divide(a: f64, b: f64) -> Result<f64, String> {
    if b == 0.0 {
        Err(String::from("Division durch Null"))
    } else {
        Ok(a / b)
    }
}
```

## String parsen

`parse()` wandelt einen String in eine Zahl um. Es gibt `Result` zurück:

```rust
fn parse_age(input: &str) -> Result<i32, String> {
    match input.trim().parse::<i32>() {
        Ok(zahl) => Ok(zahl),
        Err(_) => Err(String::from("Keine gültige Zahl")),
    }
}
```

## Option<T>

`Option` ist ähnlich wie `Result`, aber ohne Fehlerinformation:

```rust
fn get_first_char(s: &str) -> Option<char> {
    s.chars().next()  // gibt Some(ch) oder None bei leerem String
}
```

Alternative: `if s.is_empty() { None } else { s.chars().next() }`

## Option als Parameter

```rust
fn get_length_safe(s: Option<&str>) -> usize {
    match s {
        Some(text) => text.len(),
        None => 0,
    }
}
```

Kürzer mit `unwrap_or`:

```rust
s.unwrap_or("").len()
```

## Einfache Validierung

```rust
fn validate_email(email: &str) -> bool {
    email.len() >= 3 && email.contains('@')
}
```

`.contains()` prüft, ob ein String einen Teilstring enthält.
