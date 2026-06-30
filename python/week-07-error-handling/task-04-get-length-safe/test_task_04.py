import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(__file__), "."))
if "solutions" in sys.modules:
    del sys.modules["solutions"]
from solutions import get_length_safe


def test_get_length_safe():
    assert get_length_safe("Hallo") == 5
    assert get_length_safe("") == 0
    assert get_length_safe(None) == 0
