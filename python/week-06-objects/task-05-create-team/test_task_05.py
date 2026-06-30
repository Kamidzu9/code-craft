import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(__file__), "."))
if "solutions" in sys.modules:
    del sys.modules["solutions"]
from solutions import create_team


def test_create_team():
    team = create_team("Rot", ["Anna", "Bob"])
    assert team["name"] == "Rot"
    assert team["members"] == ["Anna", "Bob"]
    assert team["count"] == 2
    team2 = create_team("Blau", [])
    assert team2["count"] == 0
