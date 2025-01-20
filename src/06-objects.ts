// Object type annotation
let user: {name: string; age: number; email: string} = {
    name: "John",
    age: 30,
    email: "john@example.com",
};

// Interface untuk object
interface Employee {
    id: number;
    name: string;
    department: string;
    readonly salary: number;
    contact?: string;
}

// Implementasi interface
let employee: Employee = {
    id: 1,
    name: "Jane Doe",
    department: "IT",
    salary: 50,
    contact: "john@example.com"
}

// Nested objects
interface Company {
    name: string;
    address: {
        street: string;
        city: string;
        country: string;
    },
    employees: Employee[];
}

let company: Company = {
    name: "Tech Corp",
    address: {
        street: "123 Main St",
        city: "Tech City",
        country: " Techland",
    },
    employees: [employee],
};

console.log("User : ", user);
console.log("Employee : ", employee);
console.log("Company : ", company);

export {};