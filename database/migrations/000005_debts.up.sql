CREATE TYPE debt_status AS ENUM ('pending', 'closed');

CREATE TABLE debts (
    id SERIAL PRIMARY KEY,
    user_debtor_id INT NOT NULL REFERENCES users(id),
    user_creditor_id INT NOT NULL REFERENCES users(id),
    paymentgroup_id INT NOT NULL REFERENCES paymentgroups(id),
    amount DECIMAL(10, 2) NOT NULL DEFAULT 0,
    status debt_status NOT NULL DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    paid_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

--index
CREATE INDEX idx_debts_user_debtor_id ON debts(user_debtor_id);
CREATE INDEX idx_debts_user_creditor_id ON debts(user_creditor_id);
CREATE INDEX idx_debts_paymentgroup_id ON debts(paymentgroup_id);