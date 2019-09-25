describe("Person", () => {
    it("should show person's details", () => {
        let answer = new Person ("Leo", 25, "male", ["drawing", "coding", "reading", "playing FIFA"]);
        let helloo = answer.hello();
        expect(helloo).toBe("Hello, my name is Leo and I am 25 years old. My interests are drawing,coding,reading,playing FIFA.")
    });
})