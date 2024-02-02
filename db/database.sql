create database if not exists b74l2ilqg8dyheq5tdny;

use b74l2ilqg8dyheq5tdny;

create table if not exists employee (
  id int auto_increment primary key not null,
  name varchar(255) default null,
  salary int default null,
  created_at timestamp default current_timestamp
);

describe employee;

insert into employee (name, salary) values ('John', 1000);
insert into employee (name, salary) values ('Jane', 2000);
insert into employee (name, salary) values ('Doe', 3000);
insert into employee (name, salary) values ('Smith', 4000);

select * from employee where id=1;

delete from employee where id=1;

update employee set name="John Doe" where id=2;