import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(__file__), "."))
if "solutions" in sys.modules:
    del sys.modules["solutions"]
from solutions import absolute


def test_absolute():
    assert absolute(5) == 5
    assert absolute(0) == 0
    assert absolute(-3) == 3
    assert absolute(-100) == 100
