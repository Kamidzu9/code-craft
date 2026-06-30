# Task 1: safe_divide(a, b)

Fange `ZeroDivisionError` mit `try`/`except` ab.

```python
def safe_divide(a, b):
    try:
        return a / b
    except ZeroDivisionError:
        return "Fehler: Division durch Null"
```
