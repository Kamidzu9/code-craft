# Notizen - Woche 3: Bedingungen

## if / else if / else

```rust
fn note(score: i32) -> &str {
    if score >= 90 {
        "A"
    } else if score >= 80 {
        "B"
    } else if score >= 70 {
        "C"
    } else if score >= 60 {
        "D"
    } else {
        "F"
    }
}
```

`if` ist ein Ausdruck in Rust - es kann einen Wert zurückgeben!

## if als Ausdruck

```rust
let ergebnis = if x > 0 { "positiv" } else { "negativ" };
```

Beide Arme müssen den gleichen Typ zurückgeben.

## Vergleichsoperatoren

- `==`: gleich
- `!=`: ungleich
- `>`: größer
- `<`: kleiner
- `>=`: größer oder gleich
- `<=`: kleiner oder gleich

## match - der mächtige Kontrollfluss

`match` vergleicht einen Wert mit mehreren Mustern:

```rust
fn animal_sound(tier: &str) -> &str {
    match tier {
        "dog" => "woof",
        "cat" => "meow",
        "cow" => "moo",
        _ => "unknown",  // _ = alles andere
    }
}
```

`match` muss **alle** Möglichkeiten abdecken. `_` ist der "alles andere"-Fall.

## Logische Operatoren

```rust
let erlaubt = alter >= 18 && hat_ausweis;  // UND (beides muss stimmen)
let ok = ist_admin || ist_moderator;        // ODER (eines muss stimmen)
let nein = !ist_wahr;                        // NICHT (kehrt um)
```

## if in Kombination mit bool

```rust
fn is_even(n: i32) -> bool {
    n % 2 == 0  // n % 2 = Rest bei Division durch 2
}
```
