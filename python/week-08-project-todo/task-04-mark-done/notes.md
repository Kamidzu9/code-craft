# Task 4: mark_done(todos, id)

Erstelle eine neue Liste und ändere nur das Todo mit der passenden id.

```python
def mark_done(todos, id):
    neue_liste = []
    for todo in todos:
        if todo["id"] == id:
            neue_liste.append({"id": id, "text": todo["text"], "done": True})
        else:
            neue_liste.append(todo)
    return neue_liste
```
