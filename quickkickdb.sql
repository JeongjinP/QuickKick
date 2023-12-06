-- Active: 1701816417194@@127.0.0.1@3306@quickkickdb
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

create table reservation (
    resNum int(20) primary key,
    resDate DATE not null,
    resTime TIME not null,
    useTime float(1) not null,
    groundType boolean not null,
    useGround varchar(20),
    responsibility int(9)
);

