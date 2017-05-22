-- Database generated with pgModeler (PostgreSQL Database Modeler).
-- pgModeler  version: 0.8.1
-- PostgreSQL version: 9.4
-- Project Site: pgmodeler.com.br
-- Model Author: ---


-- Database creation must be done outside an multicommand file.
-- These commands were put in this file only for convenience.
-- -- object: new_database | type: DATABASE --
-- -- DROP DATABASE IF EXISTS new_database;
-- CREATE DATABASE new_database
-- ;
-- -- ddl-end --
-- 

-- object: public.bill | type: TABLE --
-- DROP TABLE IF EXISTS public.bill CASCADE;
CREATE TABLE public.bill(
	bill_id integer NOT NULL,
	title varchar(256),
	bill_number varchar(20),
	CONSTRAINT bill_id_pk PRIMARY KEY (bill_id)

);
-- ddl-end --
ALTER TABLE public.bill OWNER TO postgres;
-- ddl-end --

-- object: public.bill_body | type: TABLE --
-- DROP TABLE IF EXISTS public.bill_body CASCADE;
CREATE TABLE public.bill_body(
	id integer,
	body text,
	revision timestamp
);
-- ddl-end --
ALTER TABLE public.bill_body OWNER TO postgres;
-- ddl-end --

-- object: public.bill_info | type: TABLE --
-- DROP TABLE IF EXISTS public.bill_info CASCADE;
CREATE TABLE public.bill_info(
	id integer,
	author integer,
	date_created integer
);
-- ddl-end --
ALTER TABLE public.bill_info OWNER TO postgres;
-- ddl-end --

-- object: public.comment | type: TABLE --
-- DROP TABLE IF EXISTS public.comment CASCADE;
CREATE TABLE public.comment(
	id integer NOT NULL,
	user_id integer,
	body varchar(700),
	date timestamp,
	revision smallint,
	bill_id integer,
	CONSTRAINT comment_pk PRIMARY KEY (id)

);
-- ddl-end --
ALTER TABLE public.comment OWNER TO postgres;
-- ddl-end --

-- object: public."user" | type: TABLE --
-- DROP TABLE IF EXISTS public."user" CASCADE;
CREATE TABLE public."user"(
	id integer NOT NULL,
	login varchar(50),
	email varchar(200),
	password varchar(256),
	CONSTRAINT user_pk PRIMARY KEY (id)

);
-- ddl-end --
ALTER TABLE public."user" OWNER TO postgres;
-- ddl-end --

-- object: public.user_info | type: TABLE --
-- DROP TABLE IF EXISTS public.user_info CASCADE;
CREATE TABLE public.user_info(
	id integer,
	first_name varchar(20),
	last_name varchar(50),
	rating smallint
);
-- ddl-end --
ALTER TABLE public.user_info OWNER TO postgres;
-- ddl-end --

-- object: public.bill_sponsors | type: TABLE --
-- DROP TABLE IF EXISTS public.bill_sponsors CASCADE;
CREATE TABLE public.bill_sponsors(
	bill_id integer,
	sponsor integer
);
-- ddl-end --
ALTER TABLE public.bill_sponsors OWNER TO postgres;
-- ddl-end --

-- object: public.votes | type: TABLE --
-- DROP TABLE IF EXISTS public.votes CASCADE;
CREATE TABLE public.votes(
	representative integer,
	bill_id integer
);
-- ddl-end --
ALTER TABLE public.votes OWNER TO postgres;
-- ddl-end --

-- object: public.representatives | type: TABLE --
-- DROP TABLE IF EXISTS public.representatives CASCADE;
CREATE TABLE public.representatives(
	id integer NOT NULL,
	instantiated timestamp,
	term_count smallint,
	first_name varchar(50),
	last_name varchar(50),
	party smallint,
	CONSTRAINT rep_id PRIMARY KEY (id)

);
-- ddl-end --
ALTER TABLE public.representatives OWNER TO postgres;
-- ddl-end --

-- object: public.party | type: TABLE --
-- DROP TABLE IF EXISTS public.party CASCADE;
CREATE TABLE public.party(
	name varchar(50),
	id smallint
);
-- ddl-end --
ALTER TABLE public.party OWNER TO postgres;
-- ddl-end --

-- object: bill_id_fk | type: CONSTRAINT --
-- ALTER TABLE public.bill_body DROP CONSTRAINT IF EXISTS bill_id_fk CASCADE;
ALTER TABLE public.bill_body ADD CONSTRAINT bill_id_fk FOREIGN KEY (id)
REFERENCES public.bill (bill_id) MATCH FULL
ON DELETE NO ACTION ON UPDATE NO ACTION;
-- ddl-end --

-- object: bill_id2_fk | type: CONSTRAINT --
-- ALTER TABLE public.bill_info DROP CONSTRAINT IF EXISTS bill_id2_fk CASCADE;
ALTER TABLE public.bill_info ADD CONSTRAINT bill_id2_fk FOREIGN KEY (id)
REFERENCES public.bill (bill_id) MATCH FULL
ON DELETE NO ACTION ON UPDATE NO ACTION;
-- ddl-end --

-- object: user_id_fk | type: CONSTRAINT --
-- ALTER TABLE public.comment DROP CONSTRAINT IF EXISTS user_id_fk CASCADE;
ALTER TABLE public.comment ADD CONSTRAINT user_id_fk FOREIGN KEY (user_id)
REFERENCES public."user" (id) MATCH FULL
ON DELETE NO ACTION ON UPDATE NO ACTION;
-- ddl-end --

-- object: comment_bill_fk | type: CONSTRAINT --
-- ALTER TABLE public.comment DROP CONSTRAINT IF EXISTS comment_bill_fk CASCADE;
ALTER TABLE public.comment ADD CONSTRAINT comment_bill_fk FOREIGN KEY (bill_id)
REFERENCES public.bill (bill_id) MATCH FULL
ON DELETE NO ACTION ON UPDATE NO ACTION;
-- ddl-end --

-- object: user_info_fk | type: CONSTRAINT --
-- ALTER TABLE public.user_info DROP CONSTRAINT IF EXISTS user_info_fk CASCADE;
ALTER TABLE public.user_info ADD CONSTRAINT user_info_fk FOREIGN KEY (id)
REFERENCES public."user" (id) MATCH FULL
ON DELETE NO ACTION ON UPDATE NO ACTION;
-- ddl-end --

-- object: sponsor_bill_id | type: CONSTRAINT --
-- ALTER TABLE public.bill_sponsors DROP CONSTRAINT IF EXISTS sponsor_bill_id CASCADE;
ALTER TABLE public.bill_sponsors ADD CONSTRAINT sponsor_bill_id FOREIGN KEY (bill_id)
REFERENCES public.bill (bill_id) MATCH FULL
ON DELETE NO ACTION ON UPDATE NO ACTION;
-- ddl-end --

-- object: sponsor_rep_id | type: CONSTRAINT --
-- ALTER TABLE public.bill_sponsors DROP CONSTRAINT IF EXISTS sponsor_rep_id CASCADE;
ALTER TABLE public.bill_sponsors ADD CONSTRAINT sponsor_rep_id FOREIGN KEY (sponsor)
REFERENCES public.representatives (id) MATCH FULL
ON DELETE NO ACTION ON UPDATE NO ACTION;
-- ddl-end --

-- object: bill_vote_fk | type: CONSTRAINT --
-- ALTER TABLE public.votes DROP CONSTRAINT IF EXISTS bill_vote_fk CASCADE;
ALTER TABLE public.votes ADD CONSTRAINT bill_vote_fk FOREIGN KEY (bill_id)
REFERENCES public.bill (bill_id) MATCH FULL
ON DELETE NO ACTION ON UPDATE NO ACTION;
-- ddl-end --

-- object: vote_rep_fk | type: CONSTRAINT --
-- ALTER TABLE public.votes DROP CONSTRAINT IF EXISTS vote_rep_fk CASCADE;
ALTER TABLE public.votes ADD CONSTRAINT vote_rep_fk FOREIGN KEY (representative)
REFERENCES public.representatives (id) MATCH FULL
ON DELETE NO ACTION ON UPDATE NO ACTION;
-- ddl-end --

-- object: rep_party_fk | type: CONSTRAINT --
-- ALTER TABLE public.party DROP CONSTRAINT IF EXISTS rep_party_fk CASCADE;
ALTER TABLE public.party ADD CONSTRAINT rep_party_fk FOREIGN KEY (id)
REFERENCES public.representatives (party) MATCH FULL
ON DELETE NO ACTION ON UPDATE NO ACTION;
-- ddl-end --


