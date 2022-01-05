export class Duplicant {
    name: string;
    gender: "male" | "female";
    attributes: Attributes;
    conditions: Conditions;
    constructor(name: string, gender: "m" | "f") {
        this.name = name;
        this.gender = gender == "m" ? "male" : "female";
        this.attributes = new Attributes();
        this.conditions = new Conditions();
    }
}

class Attributes {
    agriculture: Attribute;
    athletics: Attribute;
    construction: Attribute;
    creativity: Attribute;
    cuisine: Attribute;
    excavation: Attribute;
    machinery: Attribute;
    medicine: Attribute;
    ranching: Attribute;
    science: Attribute;
    strength: Attribute;
    constructor() {
        this.agriculture = new Attribute("Agriculture", [
            "5% farmingSpeed",
            "2.5% tendingSpeed",
            "3.3% seedChance",
        ]);
        this.athletics = new Attribute("Athletics", ["10% runSpeed"]);
        this.construction = new Attribute("Construction", [
            "25% constructionSpeed",
        ]);
        this.creativity = new Attribute("Creativity", ["10% decorationSpeed"]);
        this.cuisine = new Attribute("Cuisine", ["5% cookingSpeed"]);
        this.excavation = new Attribute("Excavation", [
            "25% diggingSpeed",
            "5% attackDamage",
        ]);
        this.machinery = new Attribute("Machinery", ["10% tinkeringSpeed"]);
        this.medicine = new Attribute("Medicine", [
            "10% medicineFabricationSpeed",
            "20% treatmentSpeed",
        ]);
        this.ranching = new Attribute("Ranching", [
            "10% groomedEffectDuration",
        ]);
        this.science = new Attribute("Science", [
            "40% researchSpeed",
            "10% attributeLeveling",
        ]);
        this.strength = new Attribute("Strength", [
            "40 carryingCapacity",
            "25% tidyingSpeed",
        ]);
    }
}

class Attribute {
    name: string;
    effects: string[];
    value: number;
    constructor(name: string, effects: string[]) {
        this.name = name;
        this.effects = effects;
        this.value = 0;
    }
}

class Conditions {
    health: Condition;
    stress: Condition;
    morale: Condition;
    bladder: Condition;
    breath: Condition;
    stamina: Condition;
    calories: Condition;
    temperature: Condition;
    decor: Condition;
    constructor() {
        this.health = new Condition("Health", "value", "up", 0, 100, 100);
        this.stress = new Condition("Stress", "percent", "down", 0, 100, 5);
        this.morale = new Condition("Morale", "value", "up", 0, "unlimited", 2);
        this.bladder = new Condition("Bladder", "percent", "up", 0, 100, 5);
        this.breath = new Condition();
        this.stamina = new Condition();
        this.calories = new Condition();
        this.temperature = new Condition();
        this.decor = new Condition();
    }
}

class Condition {
    name: string;
    type: "value" | "percent" | "calories" | "temperature";
    tension: "up" | "down";
    min: number | "unlimited";
    max: number | "unlimited";
    value: number;
    constructor(
        name: string,
        type: "value" | "percent" | "calories" | "temperature",
        tension: "up" | "down",
        min: number | "unlimited",
        max: number | "unlimited",
        value: number
    ) {
        this.name = name;
        this.type = type;
        this.tension = tension;
        this.min = min;
        this.max = max;
        this.value = value;
    }
}
