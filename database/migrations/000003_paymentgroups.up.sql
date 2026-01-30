CREATE TYPE paymentgroup_status AS ENUM ('pending', 'paid', 'cancelled');

CREATE TABLE paymentgroups (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    bill_total DECIMAL(10, 2) NOT NULL DEFAULT 0,   
    bill_currency VARCHAR(10) NOT NULL,
    status paymentgroup_status NOT NULL DEFAULT 'pending',
    creator_id INT NOT NULL REFERENCES users(id),
    merchant_id INT NOT NULL REFERENCES merchants(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

--index
CREATE INDEX idx_paymentgroups_creator_id ON paymentgroups(creator_id);
CREATE INDEX idx_paymentgroups_merchant_id ON paymentgroups(merchant_id);
