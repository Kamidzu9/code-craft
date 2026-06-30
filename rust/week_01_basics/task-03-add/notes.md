# Notizen - Aufgabe 3: add

Funktionen können Parameter haben. Jeder Parameter hat einen Namen und einen Typ:

```rust
fn add(a: i32, b: i32) -> i32 {
    a + b
}
```

`i32` ist der Typ für ganze Zahlen (32 Bit, positiv und negativ). `a + b` addiert zwei Zahlen – und weil es ohne Semikolon dasteht, ist es der Rückgabewert.
