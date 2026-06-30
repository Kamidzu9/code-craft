nächste_id = 1


def create_todo(text):
    """Gib ein Dictionary {"id": id, "text": text, "done": False} zurück."""
    ...


def add_todo(todos, text):
    """Gib eine neue Liste mit einem neuen Todo am Ende zurück."""
    ...


def list_todos(todos):
    """Gib eine Liste nur mit den text-Werten zurück."""
    ...


def mark_done(todos, id):
    """Gib eine neue Liste zurück, bei dem das Todo mit der id done=True hat."""
    ...


def remove_todo(todos, id):
    """Gib eine neue Liste ohne das Todo mit der id zurück."""
    ...
