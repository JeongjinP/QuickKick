insert into Login values (201700309, 'wjdwlsl12!', '박정진','사상 최강의 팀');
insert into Login values (202101560, '12341234!', '조성현','사상 최강의 팀');
insert into Login values (202100836, '12341234!', '이근찬', '사상 최강의 팀');
insert into Login values (1234, '1234', '관리자', '사상 최강의 팀');

select * from Login where id = 201700309 and password = 'wjdwlsl12!';

select * from Login;

describe Login;
select * from member;
select * from team;
select * from member where teamName = '사상 최강의 팀';