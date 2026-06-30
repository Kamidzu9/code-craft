from solutions import *

# Hilfsfunktion: Setze nächste_id zurück (für testbare IDs)
def setup_function():
    global nächste_id
    nächste_id = 1
    import solutions
    solutions.nächste_id = 1


def test_create_todo():
    setup_function()
    todo = create_todo("Python lernen")
    assert todo["id"] == 1
    assert todo["text"] == "Python lernen"
    assert todo["done"] is False

    todo2 = create_todo("Weiter lernen")
    assert todo2["id"] == 2
    assert todo2["text"] == "Weiter lernen"


def test_add_todo():
    setup_function()
    todos = []
    todos = add_todo(todos, "Aufgabe 1")
    assert len(todos) == 1
    assert todos[0]["text"] == "Aufgabe 1"
    assert todos[0]["id"] == 1

    todos = add_todo(todos, "Aufgabe 2")
    assert len(todos) == 2
    assert todos[1]["text"] == "Aufgabe 2"


def test_list_todos():
    setup_function()
    todos = []
    todos = add_todo(todos, "Einkaufen")
    todos = add_todo(todos, "Putzen")
    todos = add_todo(todos, "Lernen")

    texts = list_todos(todos)
    assert texts == ["Einkaufen", "Putzen", "Lernen"]


def test_mark_done():
    setup_function()
    todos = []
    todos = add_todo(todos, "Test")
    todo_id = todos[0]["id"]

    updated = mark_done(todos, todo_id)
    assert updated[0]["done"] is True
    # Original sollte unverändert sein
    assert todos[0]["done"] is False


def test_remove_todo():
    setup_function()
    todos = []
    todos = add_todo(todos, "Bleibt")
    todos = add_todo(todos, "Weg")
    todos = add_todo(todos, "Bleibt auch")

    entfernt_id = todos[1]["id"]
    result = remove_todo(todos, entfernt_id)

    assert len(result) == 2
    assert result[0]["text"] == "Bleibt"
    assert result[1]["text"] == "Bleibt auch"
    # Original sollte unverändert sein
    assert len(todos) == 3
