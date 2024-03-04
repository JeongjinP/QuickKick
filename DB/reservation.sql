describe reservation;

insert into reservation values (1, '2024-01-23', '12:00:00', '2.0', 0, '동측', 201700309);
insert into reservation (resDate, resTime, useTime, groundType, useGround, responsibility)
	values ('2024-01-24', '14:00:00', '1.5', 0, '동측', 202100836),
		   ('2024-01-24', '14:00:00', '2.0', 1, null, 202100001),
           ('2024-01-25', '10:00:00', '2.0', 0, '서측', 201700326);

select * from reservation;