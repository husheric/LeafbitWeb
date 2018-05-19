DROP DATABASE IF EXISTS leafbit;
CREATE DATABASE leafbit;

\c leafbit;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR UNIQUE NOT NULL,
  full_name VARCHAR NOT NULL
);

CREATE TABLE trees (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users (id) NOT NULL,
  tree VARCHAR NOT NULL,
  progress NUMERIC DEFAULT 0
);

CREATE TABLE tree_markers (
  id SERIAL PRIMARY KEY,
  planted_by INTEGER REFERENCES users (id),
  tree VARCHAR,
  latitude VARCHAR NOT NULL,
  longitude VARCHAR NOT NULL,
  timestamp timestamp DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users (email, full_name)
  VALUES ('ericliu93@gmail.com', 'Eric Liu');

INSERT INTO trees (user_id, tree)
  VALUES (1, 'cactus'),
    (1, 'pine_tree');

INSERT INTO tree_markers (planted_by, tree, latitude, longitude)
  VALUES (1, 'cactus', '40.7469446', '-73.951878'),
    (1, 'cactus', '40.7529446', '-73.944878'),
    (1, 'tree', '40.7349446', '-73.936878'),
    (1, 'tree', '40.7379446', '-73.948878'),
    (1, 'tall_tree', '40.7459446', '-73.953878'),
    (1, 'tall_tree', '40.8239597', '-73.941878'),
    (1, 'pine_tree', '40.8329446', '-73.944878'),
    (1, 'pine_tree', '40.8349446', '-73.936878'),
    (1, 'pine_tree', '40.8179446', '-73.948878'),
    (1, 'pine_tree', '40.8159446', '-73.953878');