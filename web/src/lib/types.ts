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
    email: string;
    firstName: string;
    lastName: string;
    phone: string;
    username: string;
    password: string;
    confirmPassword: string;
    gender: string;
    birthDate: string;
    cityOfBirth: string;
    countryOfBirth: string;
    address: string;
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
        birthDate: string;
        cityOfBirth: string;
        countryOfBirth: string;
        address: string;
        createdAt: Date;
        updatedAt: Date;
        amount: number;
        role: string;
        token: string;
    }
}
}
