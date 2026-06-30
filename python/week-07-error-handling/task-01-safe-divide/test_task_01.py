import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(__file__), "."))
if "solutions" in sys.modules:
    del sys.modules["solutions"]
from solutions import safe_divide


def test_safe_divide():
    assert safe_divide(10, 2) == 5.0
    assert safe_divide(3, 2) == 1.5
    assert safe_divide(10, 0) == "Fehler: Division durch Null"
    assert safe_divide(0, 5) == 0.0
