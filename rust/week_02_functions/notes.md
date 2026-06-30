# Notizen - Woche 2: Funktionen

## Funktionen mit Parametern

Funktionen können Werte entgegennehmen und verarbeiten:

```rust
fn say_hello(name: &str) -> String {
    format!("Hello, {name}!")
}
```

`&str` ist eine Text-Referenz. Man benutzt sie, wenn man einer Funktion einen Text geben will, ohne ihn zu kopieren.

## Rückgabewerte

Der Rückgabetyp steht nach `->`. Der letzte Ausdruck in der Funktion (ohne Semikolon) ist der Rückgabewert:

```rust
fn add(a: i32, b: i32) -> i32 {
    a + b  // <- das ist der Rückgabewert
}
```

Frühes Zurückgeben mit `return`:

```rust
fn max_num(a: i32, b: i32) -> i32 {
    if a > b {
        return a;
    }
    b
}
```

## if-else in Funktionen

```rust
fn is_positive(num: i32) -> bool {
    if num > 0 {
        true
    } else {
        false
    }
}
```

Das kann man auch kürzer schreiben: `num > 0` gibt bereits `bool` zurück.

## if-else if-else

```rust
fn describe_temperature(temp: i32) -> String {
    if temp > 30 {
        String::from("hot")
    } else if temp > 15 {
        String::from("warm")
    } else {
        String::from("cold")
    }
}
```

## Gleitkommazahlen

`f64` ist der Typ für Dezimalzahlen. Man kann sie normal addieren, subtrahieren, multiplizieren und dividieren:

```rust
fn rectangle_area(width: f64, height: f64) -> f64 {
    width * height
}
```
