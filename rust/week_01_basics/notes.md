# Notizen - Woche 1: Hallo Welt und Variablen

## Hallo Welt

Jedes Rust-Programm beginnt mit einer `main`-Funktion. `println!` ist ein Makro, das Text auf dem Bildschirm ausgibt:

```rust
fn main() {
    println!("Hallo, Welt!");
}
```

## Funktionen

Eine Funktion hat einen Namen, Parameter und einen Rückgabetyp:

```rust
fn add(a: i32, b: i32) -> i32 {
    a + b  // kein Semikolon = Rückgabewert
}
```

Der Rückgabewert ist der letzte Ausdruck ohne Semikolon. Mit `return` kann man auch früher zurückgeben.

## Variablen

Variablen werden mit `let` erstellt. Sie sind standardmäßig unveränderlich (immutable):

```rust
let x = 5;        // unveränderlich
let mut y = 10;   // veränderlich mit `mut`
y = 20;           // nur mit `mut` erlaubt
```

## Datentypen

Wichtige primitive Typen:
- `i32`: Ganze Zahl (32 Bit, positiv/negativ)
- `f64`: Gleitkommazahl (Dezimalzahl)
- `bool`: Wahrheitswert (`true` oder `false`)
- `String`: Veränderlicher Text
- `&str`: Text-Slice (Text-Referenz)

## Text formatieren

Mit `format!` oder `println!` kann man Werte in Text einfügen:

```rust
let name = "Rust";
let alter = 10;
println!("{name} ist {alter} Jahre alt");
// oder mit Platzhaltern:
println!("{} ist {} Jahre alt", name, alter);
```

## Wahrheitswerte

Vergleiche wie `>=`, `<=`, `==`, `!=` geben `bool` zurück:

```rust
let erwachsen = alter >= 18;  // true oder false
```
