# Task 2: parse_age(input_str)

Fange `ValueError` bei `int()`-Umwandlung ab.

```python
def parse_age(input_str):
    try:
        return int(input_str)
    except ValueError:
        return "Fehler: Keine gültige Zahl"
```
