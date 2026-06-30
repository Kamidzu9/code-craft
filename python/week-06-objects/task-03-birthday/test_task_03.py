import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(__file__), "."))
if "solutions" in sys.modules:
    del sys.modules["solutions"]
from solutions import birthday


def test_birthday():
    p = {"name": "Anna", "age": 25}
    result = birthday(p)
    assert result["age"] == 26
    assert result["name"] == "Anna"
    assert p["age"] == 25
