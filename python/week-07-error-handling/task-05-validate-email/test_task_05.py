import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(__file__), "."))
if "solutions" in sys.modules:
    del sys.modules["solutions"]
from solutions import validate_email


def test_validate_email():
    assert validate_email("a@b") is True
    assert validate_email("test@example.com") is True
    assert validate_email("ab") is False
    assert validate_email("testexample.com") is False
    assert validate_email("") is False
