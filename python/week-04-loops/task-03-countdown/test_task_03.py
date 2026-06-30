import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(__file__), "."))
if "solutions" in sys.modules:
    del sys.modules["solutions"]
from solutions import countdown


def test_countdown():
    assert countdown(5) == [5, 4, 3, 2, 1]
    assert countdown(1) == [1]
    assert countdown(0) == []
