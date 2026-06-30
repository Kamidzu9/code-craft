import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(__file__), "."))
if "solutions" in sys.modules:
    del sys.modules["solutions"]
from solutions import add_todo


def setup_function():
    import solutions
    solutions.nächste_id = 1


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
