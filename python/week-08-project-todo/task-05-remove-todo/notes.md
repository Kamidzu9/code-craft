# Task 5: remove_todo(todos, id)

Erstelle eine neue Liste ohne das Todo mit der passenden id.

```python
def remove_todo(todos, id):
    neue_liste = []
    for todo in todos:
        if todo["id"] != id:
            neue_liste.append(todo)
    return neue_liste
```
