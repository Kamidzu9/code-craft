# Task 2: add_todo(todos, text)

Erstelle ein neues Todo und hänge es an eine Kopie der Liste an.

```python
nächste_id = 1

def create_todo(text):
    global nächste_id
    todo = {"id": nächste_id, "text": text, "done": False}
    nächste_id += 1
    return todo

def add_todo(todos, text):
    return todos + [create_todo(text)]
```
