describe("Person", () => {
    it("should show Joseph's details", () => {
        let answer = new Person ("Joseph", 25, "male", ["drawing", "coding", "reading", "playing FIFA"]);
        let helloo = answer.hello();
        expect(helloo).toBe("Hello, my name is Joseph and I am 25 years old. My interests are drawing,coding,reading,playing FIFA.")
    });

    it("should show Mary's details", () => {
        let answer = new Person("Mary", 15, "female", ["singing", "acting", "reading", "playing dolls"]);
        let helloo = answer.hello();
        expect(helloo).toBe("Hello, my name is Mary and I am 15 years old. My interests are singing,acting,reading,playing dolls.")
    });
});