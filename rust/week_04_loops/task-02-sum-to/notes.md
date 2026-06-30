# Notizen - Aufgabe 2: sum_to

Werte in einer Schleife akkumulieren:

```rust
fn sum_to(n: i32) -> i32 {
    let mut sum = 0;
    for i in 1..=n {
        sum += i;
    }
    sum
}
```

`sum += i` ist Kurzschreibweise für `sum = sum + i`. Die `mut`-Variable kann verändert werden.
