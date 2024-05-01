insert into member values (201700309, '박정진', '물리학과', 0, null, 0);

insert into member values (202100836, '이근찬', '무역학부', 1, '사상 최강의 팀', 1),
						  (202101560, '조성현', '컴퓨터공학과', 1, '사상 최강의 팀', 0),
                          (201700326, '좌의정', '전자공학과', 0, null, 0),
                          (202100001, '강감찬', '국어국문학과', 1, '초비상', 1);
                          
insert into team values ('사상 최강의 팀', 10, 1, 2, 202100836),
						('초비상', 0, 5, 1, 202100001);
                        
select * from member where hasTeam = 0;

select * from team;