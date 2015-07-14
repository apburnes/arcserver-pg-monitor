INSERT INTO endpoints
	(server_id, fetch_id, url, description)
VALUES
	($1, $2, $3, $4)
RETURNING id AS endpoint_id, server_id, fetch_id;
