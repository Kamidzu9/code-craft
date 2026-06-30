import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(__file__), "."))
if "solutions" in sys.modules:
    del sys.modules["solutions"]
from solutions import mark_done


def test_mark_done():
    todos = [
        {"id": 1, "text": "Test", "done": False},
    ]
    updated = mark_done(todos, 1)
    assert updated[0]["done"] is True
    assert todos[0]["done"] is False
