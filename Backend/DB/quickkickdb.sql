create database QuickKickdb;

use QuickKickdb;

create table member(
	stdNum int(9) primary key,
    stdName varchar(20) not null,
    Major varchar(20) not null,
    hasTeam boolean not null,
    teamName varchar(20),
    isLeader boolean not null
);

create table team(
	teamName varchar(20) primary key,
    win int(4),
    lose int(4),
    memNum int(2),
    leaderStd int(9)
);

create table reservation(
	resNum int(20) primary key,
    resDate DATE not null,
    resTime TIME not null,
    useTime float(1) not null,
    groundType boolean not null,
    useGround varchar(20),
    responsibility int(9)
);

alter table reservation modify resNum int auto_increment;

drop table login;

create table login(
	id int(9) primary key,
    password varchar(20),
    std_name varchar(20),
    team_name varchar(20),
    Foreign key (team_name) references team (teamName)
);


