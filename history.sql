/* 2023-12-06 10:16:16 [3 ms] */ 
select * from member LIMIT 0,100;
/* 2023-12-06 10:28:01 [6 ms] */ 
describe member;
/* 2023-12-06 10:28:31 [3 ms] */ 
use quickKickdb;
/* 2023-12-06 10:28:41 [4 ms] */ 
describe member;
/* 2023-12-06 10:33:56 [54 ms] */ 
alter table member modify column stdName varchar(20) not null;
/* 2023-12-06 10:34:08 [6 ms] */ 
describe member;
/* 2023-12-06 10:34:29 [49 ms] */ 
alter table member modify column major varchar(20) not null;
/* 2023-12-06 10:34:31 [4 ms] */ 
describe member;
/* 2023-12-06 10:35:10 [80 ms] */ 
alter table member modify column hasTeam char(1) not null;
/* 2023-12-06 10:35:11 [50 ms] */ 
alter table member modify column isLeader char(1) not null;
/* 2023-12-06 10:35:14 [4 ms] */ 
describe member;
/* 2023-12-06 10:38:05 [37 ms] */ 
drop database QuickKickdb;
/* 2023-12-06 10:38:19 [6 ms] */ 
create database QuickKickdb;
/* 2023-12-06 10:38:31 [2 ms] */ 
use QuickKickdb;
/* 2023-12-06 10:43:42 [33 ms] */ 
create table member(
    stdNum int(9) primary key,
    stdName varchar(20) not null,
    Major varchar(20) not null,
    hasTeam boolean not null,
    teamName varchar(20),
    isLeader boolean not null
);
/* 2023-12-06 10:49:25 [38 ms] */ 
create table team(
    teamName varchar(20) primary key,
    win int(4),
    lose int(4),
    stdNum int(9),
    leaderStd int(9),
    foreign key (stdNum) references member (stdNum)
);
/* 2023-12-06 10:49:34 [5 ms] */ 
describe team;
/* 2023-12-06 10:49:59 [23 ms] */ 
drop table team;
/* 2023-12-06 10:50:14 [35 ms] */ 
create table team(
    teamName varchar(20) primary key,
    win int(4),
    lose int(4),
    stdNum int(9),
    leaderStd int(9),
    foreign key (stdNum) references member (stdNum)
);
/* 2023-12-06 10:50:16 [5 ms] */ 
describe team;
/* 2023-12-06 12:03:21 [22 ms] */ 
create table reservation (
    resNum int(20) primary key,
    resDate DATE not null,
    resTime TIME not null,
    useTime float(1) not null,
    groundType boolean not null,
    useGround varchar(20),
    responsibility int(9)
);
/* 2023-12-06 12:06:55 [4 ms] */ 
select * from member LIMIT 0,100;
/* 2023-12-06 12:29:51 [4 ms] */ 
describe member;
/* 2023-12-06 12:31:19 [10 ms] */ 
insert into member(stdNum, stdName, major, hasTeam, teamname, isleader)
values (201700309, '박정진', '물리학과', 0, null, 0);
/* 2023-12-06 12:31:30 [1 ms] */ 
select * from member LIMIT 0,100;
/* 2023-12-06 12:33:45 [9 ms] */ 
insert into member(stdNum, stdName, major, hasTeam, teamname, isleader)
values (202100836, '이근찬', '무역학부', 1, '사상 최강의 팀', 1);
/* 2023-12-06 12:34:43 [8 ms] */ 
insert into member(stdNum, stdName, major, hasTeam, teamname, isleader)
values (202101560, '조성현', '컴퓨터공학과', 1, '사상 최강의 팀', 0);
/* 2023-12-06 12:34:50 [1 ms] */ 
select * from member LIMIT 0,100;
/* 2023-12-06 12:35:10 [2 ms] */ 
select * from team LIMIT 0,100;
/* 2023-12-06 12:36:01 [4 ms] */ 
describe team;
/* 2023-12-06 12:37:16 [17 ms] */ 
drop table team;
/* 2023-12-06 12:38:01 [15 ms] */ 
create table team(
    teamName varchar(20) primary key,
    win int(4),
    lose int(4),
    memNum int(2),
    leaderStd int(9)
);
/* 2023-12-06 12:38:34 [8 ms] */ 
insert into team(teamname, win, lose, memNum, leaderStd)
values ('사상 최강의 팀', 10, 1, 2, 202100836);
/* 2023-12-06 12:38:39 [2 ms] */ 
select * from team LIMIT 0,100;
/* 2023-12-06 15:08:52 [29 ms] */ 
describe reservation;
/* 2023-12-06 15:11:35 [10 ms] */ 
select * from member LIMIT 0,100;
/* 2023-12-06 15:11:48 [6 ms] */ 
select * from team LIMIT 0,100;
/* 2023-12-06 15:13:00 [4 ms] */ 
select * from member LIMIT 0,100;
/* 2023-12-06 15:13:15 [3 ms] */ 
select * from team LIMIT 0,100;
/* 2023-12-06 15:13:45 [5 ms] */ 
describe reservation;
/* 2023-12-06 15:15:03 [15 ms] */ 
insert into reservation(resNum, resDate, resTime, useTime, groundType, useGround, responsibility)
values (1, '2023-12-07', '12:00:00', '2.0', 0, '동측',202100836);
/* 2023-12-06 15:15:14 [3 ms] */ 
select * from reservation LIMIT 0,100;
