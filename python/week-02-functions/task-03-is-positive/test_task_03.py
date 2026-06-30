import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(__file__), "."))
if "solutions" in sys.modules:
    del sys.modules["solutions"]
from solutions import is_positive


def test_is_positive():
    assert is_positive(5) is True
    assert is_positive(1) is True
    assert is_positive(0) is False
    assert is_positive(-1) is False
    assert is_positive(-100) is False
