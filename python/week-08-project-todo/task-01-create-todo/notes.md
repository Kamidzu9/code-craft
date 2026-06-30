# Task 1: create_todo(text)

Ein Todo ist ein Dictionary mit id, text und done. Die id muss hochgezählt werden.

```python
nächste_id = 1

def create_todo(text):
    global nächste_id
    todo = {"id": nächste_id, "text": text, "done": False}
    nächste_id += 1
    return todo
```
