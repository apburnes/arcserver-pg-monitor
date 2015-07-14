INSERT INTO servers
	(fetch_id, version, url, folders, attributes)
VALUES
	($1, $2, $3, $4, $5)
RETURNING id AS server_id, fetch_id;
