import { describe, it, expect } from "vitest";
import { createTeam } from "./solutions";

describe("createTeam", () => {
  it("should create a team object with exact shape { name, members, count }", () => {
    expect(createTeam("Devs", ["Anna", "Bob"])).toEqual({
      name: "Devs",
      members: ["Anna", "Bob"],
      count: 2,
    });
    expect(createTeam("Solo", [])).toEqual({
      name: "Solo",
      members: [],
      count: 0,
    });
  });
});
