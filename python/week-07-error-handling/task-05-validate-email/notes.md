# Task 5: validate_email(email)

Prüfe Länge und ob `"@"` mit `in` vorkommt.

```python
def validate_email(email):
    if len(email) < 3:
        return False
    if "@" not in email:
        return False
    return True
```
