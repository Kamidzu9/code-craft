import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(__file__), "."))
if "solutions" in sys.modules:
    del sys.modules["solutions"]
from solutions import list_todos


def test_list_todos():
    todos = [
        {"id": 1, "text": "Einkaufen", "done": False},
        {"id": 2, "text": "Putzen", "done": False},
        {"id": 3, "text": "Lernen", "done": False},
    ]
    texts = list_todos(todos)
    assert texts == ["Einkaufen", "Putzen", "Lernen"]
