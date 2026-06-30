import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(__file__), "."))
if "solutions" in sys.modules:
    del sys.modules["solutions"]
from solutions import max_num


def test_max_num():
    assert max_num(3, 7) == 7
    assert max_num(10, 2) == 10
    assert max_num(5, 5) == 5
    assert max_num(-5, 1) == 1
    assert max_num(-10, -3) == -3
