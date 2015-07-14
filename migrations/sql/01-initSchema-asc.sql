CREATE EXTENSION "uuid-ossp";

CREATE TABLE fetches (
	id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
	fetch_number BIGSERIAL,
	created_at TIMESTAMP DEFAULT current_timestamp
);

CREATE UNIQUE INDEX fetch_id_idx ON fetches(id);
CREATE UNIQUE INDEX fetch_number_idx ON fetches(fetch_number);

CREATE TABLE servers (
	id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
	fetch_id uuid REFERENCES fetches(id),
	url TEXT NOT NULL,
	version TEXT,
	folders TEXT[],
	attributes JSON DEFAULT '{}',
	created_at TIMESTAMP DEFAULT current_timestamp
);

CREATE UNIQUE INDEX server_id_idx ON servers(id);
CREATE INDEX server_fetch_id_idx ON servers(fetch_id);

CREATE TABLE endpoints (
	id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
	server_id uuid REFERENCES servers(id),
	fetch_id uuid REFERENCES fetches(id),
	url TEXT,
	description JSON DEFAULT '{}',
	created_at TIMESTAMP DEFAULT current_timestamp
);

CREATE UNIQUE INDEX endpoint_id_idx ON endpoints(id);
CREATE INDEX endpoint_fetch_id ON endpoints(fetch_id);
