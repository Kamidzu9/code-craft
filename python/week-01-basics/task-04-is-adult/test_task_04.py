import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(__file__), "."))
if "solutions" in sys.modules:
    del sys.modules["solutions"]
from solutions import is_adult


def test_is_adult():
    assert is_adult(18) is True
    assert is_adult(25) is True
    assert is_adult(99) is True
    assert is_adult(17) is False
    assert is_adult(0) is False
