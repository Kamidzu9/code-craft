# Notizen - Aufgabe 4: contains

Über einen Slice iterieren:

```rust
fn contains(arr: &[i32], val: i32) -> bool {
    for &x in arr {
        if x == val {
            return true;
        }
    }
    false
}
```

`&[i32]` ist ein Slice. `for &x in arr` entpackt jede Referenz. `return` beendet die Funktion frühzeitig.
