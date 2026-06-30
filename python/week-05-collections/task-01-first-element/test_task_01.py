import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(__file__), "."))
if "solutions" in sys.modules:
    del sys.modules["solutions"]
from solutions import first_element


def test_first_element():
    assert first_element([1, 2, 3]) == 1
    assert first_element(["a"]) == "a"
    assert first_element([]) is None
