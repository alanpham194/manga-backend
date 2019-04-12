create table manga_sessions(
	ID SERIAL PRIMARY KEY,
	device_token VARCHAR(30),
	country varchar(50),
	ip varchar(50),
	join_date date,
	blackip boolean
);

create sequence sessions_id_seq;
alter table manga_sessions
   alter column id set default nextval('sessions_id_seq');

commit;