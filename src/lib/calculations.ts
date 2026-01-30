import { Expense, Balance, Settlement } from './types';

/**
 * Calculate the balance for each member in a group
 * @param expenses - Array of expenses for the group
 * @returns Array of balances showing who owes or is owed money
 */
export function calculateBalances(expenses: Expense[]): Balance[] {
    const balances = new Map<string, { name: string; balance: number }>();

    expenses.forEach((expense) => {
        const splitAmount = expense.amount / expense.splitBetween.length;

        // The person who paid gets credited
        const payer = balances.get(expense.paidBy) || { name: '', balance: 0 };
        payer.balance += expense.amount;
        balances.set(expense.paidBy, payer);

        // Each person in the split gets debited
        expense.splitBetween.forEach((memberId) => {
            const member = balances.get(memberId) || { name: '', balance: 0 };
            member.balance -= splitAmount;
            balances.set(memberId, member);
        });
    });

    return Array.from(balances.entries()).map(([memberId, data]) => ({
        memberId,
        memberName: data.name,
        balance: Math.round(data.balance * 100) / 100, // Round to 2 decimals
    }));
}

/**
 * Calculate the minimum number of transactions needed to settle all debts
 * Uses a greedy algorithm to minimize transactions
 * @param balances - Array of member balances
 * @returns Array of settlements showing who should pay whom
 */
export function calculateSettlements(balances: Balance[]): Settlement[] {
    const settlements: Settlement[] = [];

    // Create working copy of balances
    const workingBalances = balances.map(b => ({ ...b }));

    // Sort: creditors (positive) descending, debtors (negative) ascending
    workingBalances.sort((a, b) => b.balance - a.balance);

    let i = 0; // creditors index
    let j = workingBalances.length - 1; // debtors index

    while (i < j) {
        const creditor = workingBalances[i];
        const debtor = workingBalances[j];

        // Skip if already settled
        if (Math.abs(creditor.balance) < 0.01) {
            i++;
            continue;
        }
        if (Math.abs(debtor.balance) < 0.01) {
            j--;
            continue;
        }

        // Calculate settlement amount
        const amount = Math.min(creditor.balance, Math.abs(debtor.balance));

        if (amount > 0.01) {
            settlements.push({
                from: debtor.memberId,
                to: creditor.memberId,
                amount: Math.round(amount * 100) / 100,
            });

            // Update balances
            creditor.balance -= amount;
            debtor.balance += amount;
        }

        // Move pointers
        if (Math.abs(creditor.balance) < 0.01) i++;
        if (Math.abs(debtor.balance) < 0.01) j--;
    }

    return settlements;
}
