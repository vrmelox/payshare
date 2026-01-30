CREATE TYPE groupmember_status AS ENUM ('invite', 'accepted', 'rejected', 'paid', 'debtor');

CREATE TABLE groupmembers (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL REFERENCES users(id),
    paymentgroup_id INT NOT NULL REFERENCES paymentgroups(id),
    status groupmember_status NOT NULL DEFAULT 'invite',
    percentage DECIMAL(10, 2) NOT NULL DEFAULT 0,
    contribution DECIMAL(10, 2) NOT NULL DEFAULT 0,
    notified_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    paid_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

--index
CREATE INDEX idx_groupmembers_user_id ON groupmembers(user_id);
CREATE INDEX idx_groupmembers_paymentgroup_id ON groupmembers(paymentgroup_id);
