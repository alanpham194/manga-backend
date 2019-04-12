create table manga_settings(
	ID SERIAL PRIMARY KEY,
	key VARCHAR(30),
	value varchar(50)
);
create sequence manga_settings_id_seq;
alter table manga_settings
   alter column id set default nextval('manga_settings_id_seq');

commit;

insert into manga_settings values(DEFAULT,'ACTIVATE_SERVICE',false);