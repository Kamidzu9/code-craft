# Notizen - Woche 5: Sammlungen

## Option<T>

`Option<T`> ist ein Typ, der entweder einen Wert (`Some`) oder nichts (`None`) enthalten kann:

```rust
fn first_element(arr: &[i32]) -> Option<i32> {
    if arr.is_empty() {
        None
    } else {
        Some(arr[0])
    }
}
```

Das ist nützlich, um "kein Wert" auszudrücken, ohne `null` zu verwenden.

## Vektoren erzeugen und befüllen

```rust
fn add_element(arr: &[i32], val: i32) -> Vec<i32> {
    let mut neu = arr.to_vec();  // kopiert den Slice in einen neuen Vec
    neu.push(val);
    neu
}
```

`to_vec()` erstellt aus einem Slice einen neuen Vektor mit denselben Werten.

## Vektoren durchlaufen und verändern

```rust
fn double(arr: &[i32]) -> Vec<i32> {
    let mut ergebnis = Vec::new();
    for &x in arr {
        ergebnis.push(x * 2);
    }
    ergebnis
}
```

`&x` in der for-Schleife: Da `arr` ein Slice ist (`&[i32]`), entpacken wir die Referenz mit `&x`.

## Maximum finden

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

## Filtern mit if

```rust
fn even_numbers(arr: &[i32]) -> Vec<i32> {
    let mut ergebnis = Vec::new();
    for &x in arr {
        if x % 2 == 0 {
            ergebnis.push(x);
        }
    }
    ergebnis
}
```

`x % 2 == 0` prüft, ob `x` gerade ist (ohne Rest durch 2 teilbar).
