import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(__file__), "."))
if "solutions" in sys.modules:
    del sys.modules["solutions"]
from solutions import is_senior


def test_is_senior():
    assert is_senior({"name": "Opa", "age": 70}) is True
    assert is_senior({"name": "Oma", "age": 65}) is True
    assert is_senior({"name": "Kind", "age": 10}) is False
    assert is_senior({"name": "Erw", "age": 30}) is False
