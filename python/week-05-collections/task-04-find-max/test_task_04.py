import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(__file__), "."))
if "solutions" in sys.modules:
    del sys.modules["solutions"]
from solutions import find_max


def test_find_max():
    assert find_max([1, 5, 3]) == 5
    assert find_max([-10, -3, -7]) == -3
    assert find_max([100]) == 100
    assert find_max([]) is None
