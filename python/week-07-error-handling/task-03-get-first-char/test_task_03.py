import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(__file__), "."))
if "solutions" in sys.modules:
    del sys.modules["solutions"]
from solutions import get_first_char


def test_get_first_char():
    assert get_first_char("Hallo") == "H"
    assert get_first_char("A") == "A"
    assert get_first_char("") is None
