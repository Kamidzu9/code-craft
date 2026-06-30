# Task 5: even_numbers(arr)

Mit `% 2 == 0` prüfst du, ob eine Zahl gerade ist.

```python
def even_numbers(arr):
    result = []
    for x in arr:
        if x % 2 == 0:
            result.append(x)
    return result
```
