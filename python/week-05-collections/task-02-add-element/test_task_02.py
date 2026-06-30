import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(__file__), "."))
if "solutions" in sys.modules:
    del sys.modules["solutions"]
from solutions import add_element


def test_add_element():
    assert add_element([1, 2], 3) == [1, 2, 3]
    assert add_element([], 1) == [1]
    assert add_element(["a"], "b") == ["a", "b"]
    original = [1, 2]
    add_element(original, 3)
    assert original == [1, 2]
