export interface Group {
    id: string;
    name: string;
    description?: string;
    members: Member[];
    createdAt: Date;
    updatedAt: Date;
}

export interface Member {
    id: string;
    name: string;
    email?: string;
}

export interface Expense {
    id: string;
    groupId: string;
    description: string;
    amount: number;
    paidBy: string; // Member ID
    splitBetween: string[]; // Member IDs
    date: Date;
    createdAt: Date;
}

export interface Balance {
    memberId: string;
    memberName: string;
    balance: number; // positive = owed to them, negative = they owe
}

export interface Settlement {
    from: string; // Member ID
    to: string; // Member ID
    amount: number;
}

export interface RegisterUser {
    Email: string;
    FirstName: string;
    LastName: string;
    Phone: string;
    Username: string;
    Password: string;
    ConfirmPassword: string;
    Gender: string;
    BirthDate: string;
    CityOfBirth: string;
    CountryOfBirth: string;
    Address: string;
    City: string;
    State: string;
    ZipCode: string;
    Country: string;
}

export interface RegisterUserResponse {
    status: string;
    data: {
        user: {
            id: string;
            username: string;
            email: string;
            phone: string;
            gender: string;
            birth_date: string;
            city_of_birth: string;
            country_of_birth: string;
            address: string;
            created_at: Date;
            updated_at: Date;
            amount: number;
            role: string;
            token: string;
        }
    }
}
