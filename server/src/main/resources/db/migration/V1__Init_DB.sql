create sequence hibernate_sequence start 1 increment 1;

create table users (
    user_id serial not null,
    created_at timestamp(6),
    last_update_at timestamp(6),
    user_email varchar(50),
    user_login varchar(50) not null,
    user_password varchar(255) not null,
    primary key (user_id));

create table weather_reports (
    report_id bigserial not null,
    city varchar(255) not null,
    created_at timestamp(6),
    last_update_at timestamp(6),
    temperature integer not null,
    title varchar(50) not null,
    weather_description varchar(500),
    user_id integer not null, primary key (report_id));

alter table if exists weather_reports add constraint weather_reports_user_fk foreign key (user_id) references users;