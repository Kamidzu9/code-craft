import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(__file__), "."))
if "solutions" in sys.modules:
    del sys.modules["solutions"]
from solutions import create_todo, nächste_id


def setup_function():
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
