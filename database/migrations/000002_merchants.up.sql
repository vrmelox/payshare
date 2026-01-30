CREATE TYPE merchant_status AS ENUM ('pending', 'active', 'suspended', 'inactive', 'rejected');

CREATE TABLE merchants (
    id SERIAL PRIMARY KEY,
    external_api_id VARCHAR(100) NOT NULL,
    trading_name VARCHAR(100) NOT NULL,
    description TEXT,
    country VARCHAR(100) NOT NULL,
    currency VARCHAR(10) NOT NULL,
    amount DECIMAL(10, 2) NOT NULL DEFAULT 0,
    status merchant_status NOT NULL DEFAULT 'pending',
    user_id_owner INT NOT NULL REFERENCES users(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

--index
CREATE INDEX idx_merchants_user_id_owner ON merchants(user_id_owner);
CREATE INDEX idx_merchants_external_api_id ON merchants(external_api_id);