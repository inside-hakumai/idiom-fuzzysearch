CREATE role admin login password 'adminpass';
CREATE database ifs_db;
GRANT ALL PRIVILEGES ON database ifs_db TO admin;
