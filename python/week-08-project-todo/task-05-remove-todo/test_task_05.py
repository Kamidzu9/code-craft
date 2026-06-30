import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(__file__), "."))
if "solutions" in sys.modules:
    del sys.modules["solutions"]
from solutions import remove_todo


def test_remove_todo():
    todos = [
        {"id": 1, "text": "Bleibt", "done": False},
        {"id": 2, "text": "Weg", "done": False},
        {"id": 3, "text": "Bleibt auch", "done": False},
    ]
    result = remove_todo(todos, 2)

    assert len(result) == 2
    assert result[0]["text"] == "Bleibt"
    assert result[1]["text"] == "Bleibt auch"
    assert len(todos) == 3
