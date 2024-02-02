create database if not exists b74l2ilqg8dyheq5tdny;

use b74l2ilqg8dyheq5tdny;

create table if not exists employee (
  id int auto_increment primary key not null,
  name varchar(255) default null,
  salary int default null,
  created_at timestamp default current_timestamp
);

describe employee;
```