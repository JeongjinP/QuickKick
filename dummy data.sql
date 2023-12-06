describe member;
insert into member(stdNum, stdName, major, hasTeam, teamname, isleader)
values (201700309, '박정진', '물리학과', 0, null, 0);

insert into member(stdNum, stdName, major, hasTeam, teamname, isleader)
values (202100836, '이근찬', '무역학부', 1, '사상 최강의 팀', 1);

insert into member(stdNum, stdName, major, hasTeam, teamname, isleader)
values (202101560, '조성현', '컴퓨터공학과', 1, '사상 최강의 팀', 0);

insert into team(teamname, win, lose, memNum, leaderStd)
values ('사상 최강의 팀', 10, 1, 2, 202100836);
select * from member;
select * from team;