# Notizen - Aufgabe 4: find_max

Maximum in einer Schleife finden:

```rust
fn find_max(arr: &[i32]) -> Option<i32> {
    if arr.is_empty() {
        return None;
    }
    let mut max = arr[0];
    for &x in arr {
        if x > max {
            max = x;
        }
    }
    Some(max)
}
```

`return None` bei leerem Array, sonst Schleife über alle Elemente und Vergleich.
