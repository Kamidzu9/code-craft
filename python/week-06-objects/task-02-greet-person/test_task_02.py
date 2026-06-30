import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(__file__), "."))
if "solutions" in sys.modules:
    del sys.modules["solutions"]
from solutions import greet_person


def test_greet_person():
    p = {"name": "Bob", "age": 30}
    assert greet_person(p) == "Hello, Bob!"
    assert greet_person({"name": "Python"}) == "Hello, Python!"
