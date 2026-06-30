import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(__file__), "."))
if "solutions" in sys.modules:
    del sys.modules["solutions"]
from solutions import login


def test_login():
    assert login("admin", "secret") is True
    assert login("admin", "wrong") is False
    assert login("user", "secret") is False
    assert login("", "") is False
