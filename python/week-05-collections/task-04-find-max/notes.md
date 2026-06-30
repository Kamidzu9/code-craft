# Task 4: find_max(arr)

Setze das erste Element als Maximum und aktualisiere es in der Schleife.

```python
def find_max(arr):
    if len(arr) == 0:
        return None
    max_val = arr[0]
    for x in arr:
        if x > max_val:
            max_val = x
    return max_val
```
