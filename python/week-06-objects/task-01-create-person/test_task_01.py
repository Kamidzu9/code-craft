import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(__file__), "."))
if "solutions" in sys.modules:
    del sys.modules["solutions"]
from solutions import create_person


def test_create_person():
    p = create_person("Anna", 25)
    assert p == {"name": "Anna", "age": 25}
    assert p["name"] == "Anna"
    assert p["age"] == 25
