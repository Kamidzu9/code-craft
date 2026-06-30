import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(__file__), "."))
if "solutions" in sys.modules:
    del sys.modules["solutions"]
from solutions import can_vote


def test_can_vote():
    assert can_vote(18) is True
    assert can_vote(30) is True
    assert can_vote(17) is False
    assert can_vote(0) is False
