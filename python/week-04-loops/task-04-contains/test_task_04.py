import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(__file__), "."))
if "solutions" in sys.modules:
    del sys.modules["solutions"]
from solutions import contains


def test_contains():
    assert contains([1, 2, 3], 2) is True
    assert contains([1, 2, 3], 5) is False
    assert contains([], 1) is False
    assert contains(["a", "b"], "a") is True
