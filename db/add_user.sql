insert into username(username)
values (${username})
returning username;

-- insert into password (password)
-- values (${password})