CREATE TYPE transaction_type AS ENUM ('payment', 'deposit', 'refund', 'reimbursement');

CREATE TABLE transactions (
    id SERIAL PRIMARY KEY,
    sender_id INT REFERENCES users(id),
    receiver_id INT REFERENCES users(id),
    amount DECIMAL(10, 2) NOT NULL DEFAULT 0,
    type transaction_type NOT NULL DEFAULT 'payment',
    reference_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

--index
CREATE INDEX idx_transactions_sender_id ON transactions(sender_id);
CREATE INDEX idx_transactions_receiver_id ON transactions(receiver_id);
CREATE INDEX idx_transactions_reference_id ON transactions(reference_id);
