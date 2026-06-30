import { describe, it, expect } from "vitest";
import { createTeam } from "./solutions";

describe("createTeam", () => {
  it("should create a team object with count", () => {
    const t = createTeam("Devs", ["Anna", "Bob"]);
    expect(t.name).toBe("Devs");
    expect(t.members).toEqual(["Anna", "Bob"]);
    expect(t.count).toBe(2);
  });
});
