--
-- PostgreSQL database cluster dump
--

\restrict SbVzpxh8AJiJOkWOKF94cvDusOnpau5ZsU7vyhMLSSiRfmIKpEYqaGEvy5DQx5g

SET default_transaction_read_only = off;

SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;

--
-- Roles
--

CREATE ROLE fractal;
ALTER ROLE fractal WITH SUPERUSER INHERIT CREATEROLE CREATEDB LOGIN NOREPLICATION NOBYPASSRLS PASSWORD 'SCRAM-SHA-256$4096:+jD6w+6kJ5ZMnaIVIPmN8g==$0my2k+PdlN0WenXLyMkYKyHRUX2YxxWJ/VAflAew8BM=:i4xVBhhLpykq9NmUCK3P5cHuocipZXPyBqP0Q7WAZis=';
CREATE ROLE "fractal ";
ALTER ROLE "fractal " WITH SUPERUSER INHERIT CREATEROLE CREATEDB LOGIN NOREPLICATION NOBYPASSRLS;
CREATE ROLE postgres;
ALTER ROLE postgres WITH SUPERUSER INHERIT CREATEROLE CREATEDB LOGIN REPLICATION BYPASSRLS;

--
-- User Configurations
--








\unrestrict SbVzpxh8AJiJOkWOKF94cvDusOnpau5ZsU7vyhMLSSiRfmIKpEYqaGEvy5DQx5g

--
-- Databases
--

--
-- Database "template1" dump
--

\connect template1

--
-- PostgreSQL database dump
--

\restrict XfP5GvdAJ5zy2ohHQDHplD7FtzTDmhThkig1KnV07UJPVqHwlpbD8nECt1NFBeZ

-- Dumped from database version 16.11 (Ubuntu 16.11-0ubuntu0.24.04.1)
-- Dumped by pg_dump version 16.11 (Ubuntu 16.11-0ubuntu0.24.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- PostgreSQL database dump complete
--

\unrestrict XfP5GvdAJ5zy2ohHQDHplD7FtzTDmhThkig1KnV07UJPVqHwlpbD8nECt1NFBeZ

--
-- Database "postgres" dump
--

\connect postgres

--
-- PostgreSQL database dump
--

\restrict XxBqn7lSKSXLZbxpMcvrwIUrHoSShYFn5PFYnGUYn02CitIQ7YgwmVY8fuYkLbD

-- Dumped from database version 16.11 (Ubuntu 16.11-0ubuntu0.24.04.1)
-- Dumped by pg_dump version 16.11 (Ubuntu 16.11-0ubuntu0.24.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- PostgreSQL database dump complete
--

\unrestrict XxBqn7lSKSXLZbxpMcvrwIUrHoSShYFn5PFYnGUYn02CitIQ7YgwmVY8fuYkLbD

--
-- Database "strapi" dump
--

--
-- PostgreSQL database dump
--

\restrict TmYysordyu2ih3pkMPfD4dOqMbdUUaFgYS48XANsiRLd1OgRfP76yVoDcld9qMN

-- Dumped from database version 16.11 (Ubuntu 16.11-0ubuntu0.24.04.1)
-- Dumped by pg_dump version 16.11 (Ubuntu 16.11-0ubuntu0.24.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: strapi; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE strapi WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'en_US.UTF-8';


ALTER DATABASE strapi OWNER TO postgres;

\unrestrict TmYysordyu2ih3pkMPfD4dOqMbdUUaFgYS48XANsiRLd1OgRfP76yVoDcld9qMN
\connect strapi
\restrict TmYysordyu2ih3pkMPfD4dOqMbdUUaFgYS48XANsiRLd1OgRfP76yVoDcld9qMN

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: admin_permissions; Type: TABLE; Schema: public; Owner: fractal
--

CREATE TABLE public.admin_permissions (
    id integer NOT NULL,
    action character varying(255),
    action_parameters jsonb,
    subject character varying(255),
    properties jsonb,
    conditions jsonb,
    created_at timestamp(6) without time zone,
    updated_at timestamp(6) without time zone,
    created_by_id integer,
    updated_by_id integer
);


ALTER TABLE public.admin_permissions OWNER TO fractal;

--
-- Name: admin_permissions_id_seq; Type: SEQUENCE; Schema: public; Owner: fractal
--

CREATE SEQUENCE public.admin_permissions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.admin_permissions_id_seq OWNER TO fractal;

--
-- Name: admin_permissions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: fractal
--

ALTER SEQUENCE public.admin_permissions_id_seq OWNED BY public.admin_permissions.id;


--
-- Name: admin_permissions_role_links; Type: TABLE; Schema: public; Owner: fractal
--

CREATE TABLE public.admin_permissions_role_links (
    id integer NOT NULL,
    permission_id integer,
    role_id integer,
    permission_order double precision
);


ALTER TABLE public.admin_permissions_role_links OWNER TO fractal;

--
-- Name: admin_permissions_role_links_id_seq; Type: SEQUENCE; Schema: public; Owner: fractal
--

CREATE SEQUENCE public.admin_permissions_role_links_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.admin_permissions_role_links_id_seq OWNER TO fractal;

--
-- Name: admin_permissions_role_links_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: fractal
--

ALTER SEQUENCE public.admin_permissions_role_links_id_seq OWNED BY public.admin_permissions_role_links.id;


--
-- Name: admin_roles; Type: TABLE; Schema: public; Owner: fractal
--

CREATE TABLE public.admin_roles (
    id integer NOT NULL,
    name character varying(255),
    code character varying(255),
    description character varying(255),
    created_at timestamp(6) without time zone,
    updated_at timestamp(6) without time zone,
    created_by_id integer,
    updated_by_id integer
);


ALTER TABLE public.admin_roles OWNER TO fractal;

--
-- Name: admin_roles_id_seq; Type: SEQUENCE; Schema: public; Owner: fractal
--

CREATE SEQUENCE public.admin_roles_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.admin_roles_id_seq OWNER TO fractal;

--
-- Name: admin_roles_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: fractal
--

ALTER SEQUENCE public.admin_roles_id_seq OWNED BY public.admin_roles.id;


--
-- Name: admin_users; Type: TABLE; Schema: public; Owner: fractal
--

CREATE TABLE public.admin_users (
    id integer NOT NULL,
    firstname character varying(255),
    lastname character varying(255),
    username character varying(255),
    email character varying(255),
    password character varying(255),
    reset_password_token character varying(255),
    registration_token character varying(255),
    is_active boolean,
    blocked boolean,
    prefered_language character varying(255),
    created_at timestamp(6) without time zone,
    updated_at timestamp(6) without time zone,
    created_by_id integer,
    updated_by_id integer
);


ALTER TABLE public.admin_users OWNER TO fractal;

--
-- Name: admin_users_id_seq; Type: SEQUENCE; Schema: public; Owner: fractal
--

CREATE SEQUENCE public.admin_users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.admin_users_id_seq OWNER TO fractal;

--
-- Name: admin_users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: fractal
--

ALTER SEQUENCE public.admin_users_id_seq OWNED BY public.admin_users.id;


--
-- Name: admin_users_roles_links; Type: TABLE; Schema: public; Owner: fractal
--

CREATE TABLE public.admin_users_roles_links (
    id integer NOT NULL,
    user_id integer,
    role_id integer,
    role_order double precision,
    user_order double precision
);


ALTER TABLE public.admin_users_roles_links OWNER TO fractal;

--
-- Name: admin_users_roles_links_id_seq; Type: SEQUENCE; Schema: public; Owner: fractal
--

CREATE SEQUENCE public.admin_users_roles_links_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.admin_users_roles_links_id_seq OWNER TO fractal;

--
-- Name: admin_users_roles_links_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: fractal
--

ALTER SEQUENCE public.admin_users_roles_links_id_seq OWNED BY public.admin_users_roles_links.id;


--
-- Name: components_main_galleries; Type: TABLE; Schema: public; Owner: fractal
--

CREATE TABLE public.components_main_galleries (
    id integer NOT NULL
);


ALTER TABLE public.components_main_galleries OWNER TO fractal;

--
-- Name: components_main_galleries_id_seq; Type: SEQUENCE; Schema: public; Owner: fractal
--

CREATE SEQUENCE public.components_main_galleries_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.components_main_galleries_id_seq OWNER TO fractal;

--
-- Name: components_main_galleries_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: fractal
--

ALTER SEQUENCE public.components_main_galleries_id_seq OWNED BY public.components_main_galleries.id;


--
-- Name: components_main_letters; Type: TABLE; Schema: public; Owner: fractal
--

CREATE TABLE public.components_main_letters (
    id integer NOT NULL,
    title character varying(255)
);


ALTER TABLE public.components_main_letters OWNER TO fractal;

--
-- Name: components_main_letters_id_seq; Type: SEQUENCE; Schema: public; Owner: fractal
--

CREATE SEQUENCE public.components_main_letters_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.components_main_letters_id_seq OWNER TO fractal;

--
-- Name: components_main_letters_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: fractal
--

ALTER SEQUENCE public.components_main_letters_id_seq OWNED BY public.components_main_letters.id;


--
-- Name: components_main_swipers; Type: TABLE; Schema: public; Owner: fractal
--

CREATE TABLE public.components_main_swipers (
    id integer NOT NULL,
    title character varying(255),
    text text
);


ALTER TABLE public.components_main_swipers OWNER TO fractal;

--
-- Name: components_main_swipers_id_seq; Type: SEQUENCE; Schema: public; Owner: fractal
--

CREATE SEQUENCE public.components_main_swipers_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.components_main_swipers_id_seq OWNER TO fractal;

--
-- Name: components_main_swipers_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: fractal
--

ALTER SEQUENCE public.components_main_swipers_id_seq OWNED BY public.components_main_swipers.id;


--
-- Name: files; Type: TABLE; Schema: public; Owner: fractal
--

CREATE TABLE public.files (
    id integer NOT NULL,
    name character varying(255),
    alternative_text character varying(255),
    caption character varying(255),
    width integer,
    height integer,
    formats jsonb,
    hash character varying(255),
    ext character varying(255),
    mime character varying(255),
    size numeric(10,2),
    url character varying(255),
    preview_url character varying(255),
    provider character varying(255),
    provider_metadata jsonb,
    folder_path character varying(255),
    created_at timestamp(6) without time zone,
    updated_at timestamp(6) without time zone,
    created_by_id integer,
    updated_by_id integer
);


ALTER TABLE public.files OWNER TO fractal;

--
-- Name: files_folder_links; Type: TABLE; Schema: public; Owner: fractal
--

CREATE TABLE public.files_folder_links (
    id integer NOT NULL,
    file_id integer,
    folder_id integer,
    file_order double precision
);


ALTER TABLE public.files_folder_links OWNER TO fractal;

--
-- Name: files_folder_links_id_seq; Type: SEQUENCE; Schema: public; Owner: fractal
--

CREATE SEQUENCE public.files_folder_links_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.files_folder_links_id_seq OWNER TO fractal;

--
-- Name: files_folder_links_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: fractal
--

ALTER SEQUENCE public.files_folder_links_id_seq OWNED BY public.files_folder_links.id;


--
-- Name: files_id_seq; Type: SEQUENCE; Schema: public; Owner: fractal
--

CREATE SEQUENCE public.files_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.files_id_seq OWNER TO fractal;

--
-- Name: files_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: fractal
--

ALTER SEQUENCE public.files_id_seq OWNED BY public.files.id;


--
-- Name: files_related_morphs; Type: TABLE; Schema: public; Owner: fractal
--

CREATE TABLE public.files_related_morphs (
    id integer NOT NULL,
    file_id integer,
    related_id integer,
    related_type character varying(255),
    field character varying(255),
    "order" double precision
);


ALTER TABLE public.files_related_morphs OWNER TO fractal;

--
-- Name: files_related_morphs_id_seq; Type: SEQUENCE; Schema: public; Owner: fractal
--

CREATE SEQUENCE public.files_related_morphs_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.files_related_morphs_id_seq OWNER TO fractal;

--
-- Name: files_related_morphs_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: fractal
--

ALTER SEQUENCE public.files_related_morphs_id_seq OWNED BY public.files_related_morphs.id;


--
-- Name: i18n_locale; Type: TABLE; Schema: public; Owner: fractal
--

CREATE TABLE public.i18n_locale (
    id integer NOT NULL,
    name character varying(255),
    code character varying(255),
    created_at timestamp(6) without time zone,
    updated_at timestamp(6) without time zone,
    created_by_id integer,
    updated_by_id integer
);


ALTER TABLE public.i18n_locale OWNER TO fractal;

--
-- Name: i18n_locale_id_seq; Type: SEQUENCE; Schema: public; Owner: fractal
--

CREATE SEQUENCE public.i18n_locale_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.i18n_locale_id_seq OWNER TO fractal;

--
-- Name: i18n_locale_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: fractal
--

ALTER SEQUENCE public.i18n_locale_id_seq OWNED BY public.i18n_locale.id;


--
-- Name: mains; Type: TABLE; Schema: public; Owner: fractal
--

CREATE TABLE public.mains (
    id integer NOT NULL,
    created_at timestamp(6) without time zone,
    updated_at timestamp(6) without time zone,
    published_at timestamp(6) without time zone,
    created_by_id integer,
    updated_by_id integer,
    locale character varying(255)
);


ALTER TABLE public.mains OWNER TO fractal;

--
-- Name: mains_components; Type: TABLE; Schema: public; Owner: fractal
--

CREATE TABLE public.mains_components (
    id integer NOT NULL,
    entity_id integer,
    component_id integer,
    component_type character varying(255),
    field character varying(255),
    "order" double precision
);


ALTER TABLE public.mains_components OWNER TO fractal;

--
-- Name: mains_components_id_seq; Type: SEQUENCE; Schema: public; Owner: fractal
--

CREATE SEQUENCE public.mains_components_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.mains_components_id_seq OWNER TO fractal;

--
-- Name: mains_components_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: fractal
--

ALTER SEQUENCE public.mains_components_id_seq OWNED BY public.mains_components.id;


--
-- Name: mains_id_seq; Type: SEQUENCE; Schema: public; Owner: fractal
--

CREATE SEQUENCE public.mains_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.mains_id_seq OWNER TO fractal;

--
-- Name: mains_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: fractal
--

ALTER SEQUENCE public.mains_id_seq OWNED BY public.mains.id;


--
-- Name: mains_localizations_links; Type: TABLE; Schema: public; Owner: fractal
--

CREATE TABLE public.mains_localizations_links (
    id integer NOT NULL,
    main_id integer,
    inv_main_id integer,
    main_order double precision
);


ALTER TABLE public.mains_localizations_links OWNER TO fractal;

--
-- Name: mains_localizations_links_id_seq; Type: SEQUENCE; Schema: public; Owner: fractal
--

CREATE SEQUENCE public.mains_localizations_links_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.mains_localizations_links_id_seq OWNER TO fractal;

--
-- Name: mains_localizations_links_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: fractal
--

ALTER SEQUENCE public.mains_localizations_links_id_seq OWNED BY public.mains_localizations_links.id;


--
-- Name: strapi_api_token_permissions; Type: TABLE; Schema: public; Owner: fractal
--

CREATE TABLE public.strapi_api_token_permissions (
    id integer NOT NULL,
    action character varying(255),
    created_at timestamp(6) without time zone,
    updated_at timestamp(6) without time zone,
    created_by_id integer,
    updated_by_id integer
);


ALTER TABLE public.strapi_api_token_permissions OWNER TO fractal;

--
-- Name: strapi_api_token_permissions_id_seq; Type: SEQUENCE; Schema: public; Owner: fractal
--

CREATE SEQUENCE public.strapi_api_token_permissions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.strapi_api_token_permissions_id_seq OWNER TO fractal;

--
-- Name: strapi_api_token_permissions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: fractal
--

ALTER SEQUENCE public.strapi_api_token_permissions_id_seq OWNED BY public.strapi_api_token_permissions.id;


--
-- Name: strapi_api_token_permissions_token_links; Type: TABLE; Schema: public; Owner: fractal
--

CREATE TABLE public.strapi_api_token_permissions_token_links (
    id integer NOT NULL,
    api_token_permission_id integer,
    api_token_id integer,
    api_token_permission_order double precision
);


ALTER TABLE public.strapi_api_token_permissions_token_links OWNER TO fractal;

--
-- Name: strapi_api_token_permissions_token_links_id_seq; Type: SEQUENCE; Schema: public; Owner: fractal
--

CREATE SEQUENCE public.strapi_api_token_permissions_token_links_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.strapi_api_token_permissions_token_links_id_seq OWNER TO fractal;

--
-- Name: strapi_api_token_permissions_token_links_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: fractal
--

ALTER SEQUENCE public.strapi_api_token_permissions_token_links_id_seq OWNED BY public.strapi_api_token_permissions_token_links.id;


--
-- Name: strapi_api_tokens; Type: TABLE; Schema: public; Owner: fractal
--

CREATE TABLE public.strapi_api_tokens (
    id integer NOT NULL,
    name character varying(255),
    description character varying(255),
    type character varying(255),
    access_key character varying(255),
    last_used_at timestamp(6) without time zone,
    expires_at timestamp(6) without time zone,
    lifespan bigint,
    created_at timestamp(6) without time zone,
    updated_at timestamp(6) without time zone,
    created_by_id integer,
    updated_by_id integer
);


ALTER TABLE public.strapi_api_tokens OWNER TO fractal;

--
-- Name: strapi_api_tokens_id_seq; Type: SEQUENCE; Schema: public; Owner: fractal
--

CREATE SEQUENCE public.strapi_api_tokens_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.strapi_api_tokens_id_seq OWNER TO fractal;

--
-- Name: strapi_api_tokens_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: fractal
--

ALTER SEQUENCE public.strapi_api_tokens_id_seq OWNED BY public.strapi_api_tokens.id;


--
-- Name: strapi_core_store_settings; Type: TABLE; Schema: public; Owner: fractal
--

CREATE TABLE public.strapi_core_store_settings (
    id integer NOT NULL,
    key character varying(255),
    value text,
    type character varying(255),
    environment character varying(255),
    tag character varying(255)
);


ALTER TABLE public.strapi_core_store_settings OWNER TO fractal;

--
-- Name: strapi_core_store_settings_id_seq; Type: SEQUENCE; Schema: public; Owner: fractal
--

CREATE SEQUENCE public.strapi_core_store_settings_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.strapi_core_store_settings_id_seq OWNER TO fractal;

--
-- Name: strapi_core_store_settings_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: fractal
--

ALTER SEQUENCE public.strapi_core_store_settings_id_seq OWNED BY public.strapi_core_store_settings.id;


--
-- Name: strapi_database_schema; Type: TABLE; Schema: public; Owner: fractal
--

CREATE TABLE public.strapi_database_schema (
    id integer NOT NULL,
    schema json,
    "time" timestamp without time zone,
    hash character varying(255)
);


ALTER TABLE public.strapi_database_schema OWNER TO fractal;

--
-- Name: strapi_database_schema_id_seq; Type: SEQUENCE; Schema: public; Owner: fractal
--

CREATE SEQUENCE public.strapi_database_schema_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.strapi_database_schema_id_seq OWNER TO fractal;

--
-- Name: strapi_database_schema_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: fractal
--

ALTER SEQUENCE public.strapi_database_schema_id_seq OWNED BY public.strapi_database_schema.id;


--
-- Name: strapi_migrations; Type: TABLE; Schema: public; Owner: fractal
--

CREATE TABLE public.strapi_migrations (
    id integer NOT NULL,
    name character varying(255),
    "time" timestamp without time zone
);


ALTER TABLE public.strapi_migrations OWNER TO fractal;

--
-- Name: strapi_migrations_id_seq; Type: SEQUENCE; Schema: public; Owner: fractal
--

CREATE SEQUENCE public.strapi_migrations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.strapi_migrations_id_seq OWNER TO fractal;

--
-- Name: strapi_migrations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: fractal
--

ALTER SEQUENCE public.strapi_migrations_id_seq OWNED BY public.strapi_migrations.id;


--
-- Name: strapi_release_actions; Type: TABLE; Schema: public; Owner: fractal
--

CREATE TABLE public.strapi_release_actions (
    id integer NOT NULL,
    type character varying(255),
    target_id integer,
    target_type character varying(255),
    content_type character varying(255),
    locale character varying(255),
    is_entry_valid boolean,
    created_at timestamp(6) without time zone,
    updated_at timestamp(6) without time zone,
    created_by_id integer,
    updated_by_id integer
);


ALTER TABLE public.strapi_release_actions OWNER TO fractal;

--
-- Name: strapi_release_actions_id_seq; Type: SEQUENCE; Schema: public; Owner: fractal
--

CREATE SEQUENCE public.strapi_release_actions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.strapi_release_actions_id_seq OWNER TO fractal;

--
-- Name: strapi_release_actions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: fractal
--

ALTER SEQUENCE public.strapi_release_actions_id_seq OWNED BY public.strapi_release_actions.id;


--
-- Name: strapi_release_actions_release_links; Type: TABLE; Schema: public; Owner: fractal
--

CREATE TABLE public.strapi_release_actions_release_links (
    id integer NOT NULL,
    release_action_id integer,
    release_id integer,
    release_action_order double precision
);


ALTER TABLE public.strapi_release_actions_release_links OWNER TO fractal;

--
-- Name: strapi_release_actions_release_links_id_seq; Type: SEQUENCE; Schema: public; Owner: fractal
--

CREATE SEQUENCE public.strapi_release_actions_release_links_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.strapi_release_actions_release_links_id_seq OWNER TO fractal;

--
-- Name: strapi_release_actions_release_links_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: fractal
--

ALTER SEQUENCE public.strapi_release_actions_release_links_id_seq OWNED BY public.strapi_release_actions_release_links.id;


--
-- Name: strapi_releases; Type: TABLE; Schema: public; Owner: fractal
--

CREATE TABLE public.strapi_releases (
    id integer NOT NULL,
    name character varying(255),
    released_at timestamp(6) without time zone,
    scheduled_at timestamp(6) without time zone,
    timezone character varying(255),
    status character varying(255),
    created_at timestamp(6) without time zone,
    updated_at timestamp(6) without time zone,
    created_by_id integer,
    updated_by_id integer
);


ALTER TABLE public.strapi_releases OWNER TO fractal;

--
-- Name: strapi_releases_id_seq; Type: SEQUENCE; Schema: public; Owner: fractal
--

CREATE SEQUENCE public.strapi_releases_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.strapi_releases_id_seq OWNER TO fractal;

--
-- Name: strapi_releases_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: fractal
--

ALTER SEQUENCE public.strapi_releases_id_seq OWNED BY public.strapi_releases.id;


--
-- Name: strapi_transfer_token_permissions; Type: TABLE; Schema: public; Owner: fractal
--

CREATE TABLE public.strapi_transfer_token_permissions (
    id integer NOT NULL,
    action character varying(255),
    created_at timestamp(6) without time zone,
    updated_at timestamp(6) without time zone,
    created_by_id integer,
    updated_by_id integer
);


ALTER TABLE public.strapi_transfer_token_permissions OWNER TO fractal;

--
-- Name: strapi_transfer_token_permissions_id_seq; Type: SEQUENCE; Schema: public; Owner: fractal
--

CREATE SEQUENCE public.strapi_transfer_token_permissions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.strapi_transfer_token_permissions_id_seq OWNER TO fractal;

--
-- Name: strapi_transfer_token_permissions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: fractal
--

ALTER SEQUENCE public.strapi_transfer_token_permissions_id_seq OWNED BY public.strapi_transfer_token_permissions.id;


--
-- Name: strapi_transfer_token_permissions_token_links; Type: TABLE; Schema: public; Owner: fractal
--

CREATE TABLE public.strapi_transfer_token_permissions_token_links (
    id integer NOT NULL,
    transfer_token_permission_id integer,
    transfer_token_id integer,
    transfer_token_permission_order double precision
);


ALTER TABLE public.strapi_transfer_token_permissions_token_links OWNER TO fractal;

--
-- Name: strapi_transfer_token_permissions_token_links_id_seq; Type: SEQUENCE; Schema: public; Owner: fractal
--

CREATE SEQUENCE public.strapi_transfer_token_permissions_token_links_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.strapi_transfer_token_permissions_token_links_id_seq OWNER TO fractal;

--
-- Name: strapi_transfer_token_permissions_token_links_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: fractal
--

ALTER SEQUENCE public.strapi_transfer_token_permissions_token_links_id_seq OWNED BY public.strapi_transfer_token_permissions_token_links.id;


--
-- Name: strapi_transfer_tokens; Type: TABLE; Schema: public; Owner: fractal
--

CREATE TABLE public.strapi_transfer_tokens (
    id integer NOT NULL,
    name character varying(255),
    description character varying(255),
    access_key character varying(255),
    last_used_at timestamp(6) without time zone,
    expires_at timestamp(6) without time zone,
    lifespan bigint,
    created_at timestamp(6) without time zone,
    updated_at timestamp(6) without time zone,
    created_by_id integer,
    updated_by_id integer
);


ALTER TABLE public.strapi_transfer_tokens OWNER TO fractal;

--
-- Name: strapi_transfer_tokens_id_seq; Type: SEQUENCE; Schema: public; Owner: fractal
--

CREATE SEQUENCE public.strapi_transfer_tokens_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.strapi_transfer_tokens_id_seq OWNER TO fractal;

--
-- Name: strapi_transfer_tokens_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: fractal
--

ALTER SEQUENCE public.strapi_transfer_tokens_id_seq OWNED BY public.strapi_transfer_tokens.id;


--
-- Name: strapi_webhooks; Type: TABLE; Schema: public; Owner: fractal
--

CREATE TABLE public.strapi_webhooks (
    id integer NOT NULL,
    name character varying(255),
    url text,
    headers jsonb,
    events jsonb,
    enabled boolean
);


ALTER TABLE public.strapi_webhooks OWNER TO fractal;

--
-- Name: strapi_webhooks_id_seq; Type: SEQUENCE; Schema: public; Owner: fractal
--

CREATE SEQUENCE public.strapi_webhooks_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.strapi_webhooks_id_seq OWNER TO fractal;

--
-- Name: strapi_webhooks_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: fractal
--

ALTER SEQUENCE public.strapi_webhooks_id_seq OWNED BY public.strapi_webhooks.id;


--
-- Name: up_permissions; Type: TABLE; Schema: public; Owner: fractal
--

CREATE TABLE public.up_permissions (
    id integer NOT NULL,
    action character varying(255),
    created_at timestamp(6) without time zone,
    updated_at timestamp(6) without time zone,
    created_by_id integer,
    updated_by_id integer
);


ALTER TABLE public.up_permissions OWNER TO fractal;

--
-- Name: up_permissions_id_seq; Type: SEQUENCE; Schema: public; Owner: fractal
--

CREATE SEQUENCE public.up_permissions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.up_permissions_id_seq OWNER TO fractal;

--
-- Name: up_permissions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: fractal
--

ALTER SEQUENCE public.up_permissions_id_seq OWNED BY public.up_permissions.id;


--
-- Name: up_permissions_role_links; Type: TABLE; Schema: public; Owner: fractal
--

CREATE TABLE public.up_permissions_role_links (
    id integer NOT NULL,
    permission_id integer,
    role_id integer,
    permission_order double precision
);


ALTER TABLE public.up_permissions_role_links OWNER TO fractal;

--
-- Name: up_permissions_role_links_id_seq; Type: SEQUENCE; Schema: public; Owner: fractal
--

CREATE SEQUENCE public.up_permissions_role_links_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.up_permissions_role_links_id_seq OWNER TO fractal;

--
-- Name: up_permissions_role_links_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: fractal
--

ALTER SEQUENCE public.up_permissions_role_links_id_seq OWNED BY public.up_permissions_role_links.id;


--
-- Name: up_roles; Type: TABLE; Schema: public; Owner: fractal
--

CREATE TABLE public.up_roles (
    id integer NOT NULL,
    name character varying(255),
    description character varying(255),
    type character varying(255),
    created_at timestamp(6) without time zone,
    updated_at timestamp(6) without time zone,
    created_by_id integer,
    updated_by_id integer
);


ALTER TABLE public.up_roles OWNER TO fractal;

--
-- Name: up_roles_id_seq; Type: SEQUENCE; Schema: public; Owner: fractal
--

CREATE SEQUENCE public.up_roles_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.up_roles_id_seq OWNER TO fractal;

--
-- Name: up_roles_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: fractal
--

ALTER SEQUENCE public.up_roles_id_seq OWNED BY public.up_roles.id;


--
-- Name: up_users; Type: TABLE; Schema: public; Owner: fractal
--

CREATE TABLE public.up_users (
    id integer NOT NULL,
    username character varying(255),
    email character varying(255),
    provider character varying(255),
    password character varying(255),
    reset_password_token character varying(255),
    confirmation_token character varying(255),
    confirmed boolean,
    blocked boolean,
    created_at timestamp(6) without time zone,
    updated_at timestamp(6) without time zone,
    created_by_id integer,
    updated_by_id integer
);


ALTER TABLE public.up_users OWNER TO fractal;

--
-- Name: up_users_id_seq; Type: SEQUENCE; Schema: public; Owner: fractal
--

CREATE SEQUENCE public.up_users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.up_users_id_seq OWNER TO fractal;

--
-- Name: up_users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: fractal
--

ALTER SEQUENCE public.up_users_id_seq OWNED BY public.up_users.id;


--
-- Name: up_users_role_links; Type: TABLE; Schema: public; Owner: fractal
--

CREATE TABLE public.up_users_role_links (
    id integer NOT NULL,
    user_id integer,
    role_id integer,
    user_order double precision
);


ALTER TABLE public.up_users_role_links OWNER TO fractal;

--
-- Name: up_users_role_links_id_seq; Type: SEQUENCE; Schema: public; Owner: fractal
--

CREATE SEQUENCE public.up_users_role_links_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.up_users_role_links_id_seq OWNER TO fractal;

--
-- Name: up_users_role_links_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: fractal
--

ALTER SEQUENCE public.up_users_role_links_id_seq OWNED BY public.up_users_role_links.id;


--
-- Name: upload_folders; Type: TABLE; Schema: public; Owner: fractal
--

CREATE TABLE public.upload_folders (
    id integer NOT NULL,
    name character varying(255),
    path_id integer,
    path character varying(255),
    created_at timestamp(6) without time zone,
    updated_at timestamp(6) without time zone,
    created_by_id integer,
    updated_by_id integer
);


ALTER TABLE public.upload_folders OWNER TO fractal;

--
-- Name: upload_folders_id_seq; Type: SEQUENCE; Schema: public; Owner: fractal
--

CREATE SEQUENCE public.upload_folders_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.upload_folders_id_seq OWNER TO fractal;

--
-- Name: upload_folders_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: fractal
--

ALTER SEQUENCE public.upload_folders_id_seq OWNED BY public.upload_folders.id;


--
-- Name: upload_folders_parent_links; Type: TABLE; Schema: public; Owner: fractal
--

CREATE TABLE public.upload_folders_parent_links (
    id integer NOT NULL,
    folder_id integer,
    inv_folder_id integer,
    folder_order double precision
);


ALTER TABLE public.upload_folders_parent_links OWNER TO fractal;

--
-- Name: upload_folders_parent_links_id_seq; Type: SEQUENCE; Schema: public; Owner: fractal
--

CREATE SEQUENCE public.upload_folders_parent_links_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.upload_folders_parent_links_id_seq OWNER TO fractal;

--
-- Name: upload_folders_parent_links_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: fractal
--

ALTER SEQUENCE public.upload_folders_parent_links_id_seq OWNED BY public.upload_folders_parent_links.id;


--
-- Name: admin_permissions id; Type: DEFAULT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.admin_permissions ALTER COLUMN id SET DEFAULT nextval('public.admin_permissions_id_seq'::regclass);


--
-- Name: admin_permissions_role_links id; Type: DEFAULT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.admin_permissions_role_links ALTER COLUMN id SET DEFAULT nextval('public.admin_permissions_role_links_id_seq'::regclass);


--
-- Name: admin_roles id; Type: DEFAULT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.admin_roles ALTER COLUMN id SET DEFAULT nextval('public.admin_roles_id_seq'::regclass);


--
-- Name: admin_users id; Type: DEFAULT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.admin_users ALTER COLUMN id SET DEFAULT nextval('public.admin_users_id_seq'::regclass);


--
-- Name: admin_users_roles_links id; Type: DEFAULT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.admin_users_roles_links ALTER COLUMN id SET DEFAULT nextval('public.admin_users_roles_links_id_seq'::regclass);


--
-- Name: components_main_galleries id; Type: DEFAULT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.components_main_galleries ALTER COLUMN id SET DEFAULT nextval('public.components_main_galleries_id_seq'::regclass);


--
-- Name: components_main_letters id; Type: DEFAULT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.components_main_letters ALTER COLUMN id SET DEFAULT nextval('public.components_main_letters_id_seq'::regclass);


--
-- Name: components_main_swipers id; Type: DEFAULT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.components_main_swipers ALTER COLUMN id SET DEFAULT nextval('public.components_main_swipers_id_seq'::regclass);


--
-- Name: files id; Type: DEFAULT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.files ALTER COLUMN id SET DEFAULT nextval('public.files_id_seq'::regclass);


--
-- Name: files_folder_links id; Type: DEFAULT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.files_folder_links ALTER COLUMN id SET DEFAULT nextval('public.files_folder_links_id_seq'::regclass);


--
-- Name: files_related_morphs id; Type: DEFAULT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.files_related_morphs ALTER COLUMN id SET DEFAULT nextval('public.files_related_morphs_id_seq'::regclass);


--
-- Name: i18n_locale id; Type: DEFAULT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.i18n_locale ALTER COLUMN id SET DEFAULT nextval('public.i18n_locale_id_seq'::regclass);


--
-- Name: mains id; Type: DEFAULT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.mains ALTER COLUMN id SET DEFAULT nextval('public.mains_id_seq'::regclass);


--
-- Name: mains_components id; Type: DEFAULT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.mains_components ALTER COLUMN id SET DEFAULT nextval('public.mains_components_id_seq'::regclass);


--
-- Name: mains_localizations_links id; Type: DEFAULT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.mains_localizations_links ALTER COLUMN id SET DEFAULT nextval('public.mains_localizations_links_id_seq'::regclass);


--
-- Name: strapi_api_token_permissions id; Type: DEFAULT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.strapi_api_token_permissions ALTER COLUMN id SET DEFAULT nextval('public.strapi_api_token_permissions_id_seq'::regclass);


--
-- Name: strapi_api_token_permissions_token_links id; Type: DEFAULT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.strapi_api_token_permissions_token_links ALTER COLUMN id SET DEFAULT nextval('public.strapi_api_token_permissions_token_links_id_seq'::regclass);


--
-- Name: strapi_api_tokens id; Type: DEFAULT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.strapi_api_tokens ALTER COLUMN id SET DEFAULT nextval('public.strapi_api_tokens_id_seq'::regclass);


--
-- Name: strapi_core_store_settings id; Type: DEFAULT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.strapi_core_store_settings ALTER COLUMN id SET DEFAULT nextval('public.strapi_core_store_settings_id_seq'::regclass);


--
-- Name: strapi_database_schema id; Type: DEFAULT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.strapi_database_schema ALTER COLUMN id SET DEFAULT nextval('public.strapi_database_schema_id_seq'::regclass);


--
-- Name: strapi_migrations id; Type: DEFAULT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.strapi_migrations ALTER COLUMN id SET DEFAULT nextval('public.strapi_migrations_id_seq'::regclass);


--
-- Name: strapi_release_actions id; Type: DEFAULT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.strapi_release_actions ALTER COLUMN id SET DEFAULT nextval('public.strapi_release_actions_id_seq'::regclass);


--
-- Name: strapi_release_actions_release_links id; Type: DEFAULT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.strapi_release_actions_release_links ALTER COLUMN id SET DEFAULT nextval('public.strapi_release_actions_release_links_id_seq'::regclass);


--
-- Name: strapi_releases id; Type: DEFAULT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.strapi_releases ALTER COLUMN id SET DEFAULT nextval('public.strapi_releases_id_seq'::regclass);


--
-- Name: strapi_transfer_token_permissions id; Type: DEFAULT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.strapi_transfer_token_permissions ALTER COLUMN id SET DEFAULT nextval('public.strapi_transfer_token_permissions_id_seq'::regclass);


--
-- Name: strapi_transfer_token_permissions_token_links id; Type: DEFAULT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.strapi_transfer_token_permissions_token_links ALTER COLUMN id SET DEFAULT nextval('public.strapi_transfer_token_permissions_token_links_id_seq'::regclass);


--
-- Name: strapi_transfer_tokens id; Type: DEFAULT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.strapi_transfer_tokens ALTER COLUMN id SET DEFAULT nextval('public.strapi_transfer_tokens_id_seq'::regclass);


--
-- Name: strapi_webhooks id; Type: DEFAULT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.strapi_webhooks ALTER COLUMN id SET DEFAULT nextval('public.strapi_webhooks_id_seq'::regclass);


--
-- Name: up_permissions id; Type: DEFAULT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.up_permissions ALTER COLUMN id SET DEFAULT nextval('public.up_permissions_id_seq'::regclass);


--
-- Name: up_permissions_role_links id; Type: DEFAULT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.up_permissions_role_links ALTER COLUMN id SET DEFAULT nextval('public.up_permissions_role_links_id_seq'::regclass);


--
-- Name: up_roles id; Type: DEFAULT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.up_roles ALTER COLUMN id SET DEFAULT nextval('public.up_roles_id_seq'::regclass);


--
-- Name: up_users id; Type: DEFAULT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.up_users ALTER COLUMN id SET DEFAULT nextval('public.up_users_id_seq'::regclass);


--
-- Name: up_users_role_links id; Type: DEFAULT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.up_users_role_links ALTER COLUMN id SET DEFAULT nextval('public.up_users_role_links_id_seq'::regclass);


--
-- Name: upload_folders id; Type: DEFAULT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.upload_folders ALTER COLUMN id SET DEFAULT nextval('public.upload_folders_id_seq'::regclass);


--
-- Name: upload_folders_parent_links id; Type: DEFAULT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.upload_folders_parent_links ALTER COLUMN id SET DEFAULT nextval('public.upload_folders_parent_links_id_seq'::regclass);


--
-- Data for Name: admin_permissions; Type: TABLE DATA; Schema: public; Owner: fractal
--

COPY public.admin_permissions (id, action, action_parameters, subject, properties, conditions, created_at, updated_at, created_by_id, updated_by_id) FROM stdin;
1	plugin::upload.read	{}	\N	{}	[]	2024-06-22 11:32:31.126	2024-06-22 11:32:31.126	\N	\N
2	plugin::upload.configure-view	{}	\N	{}	[]	2024-06-22 11:32:31.143	2024-06-22 11:32:31.143	\N	\N
3	plugin::upload.assets.create	{}	\N	{}	[]	2024-06-22 11:32:31.153	2024-06-22 11:32:31.153	\N	\N
4	plugin::upload.assets.update	{}	\N	{}	[]	2024-06-22 11:32:31.162	2024-06-22 11:32:31.162	\N	\N
5	plugin::upload.assets.download	{}	\N	{}	[]	2024-06-22 11:32:31.173	2024-06-22 11:32:31.173	\N	\N
6	plugin::upload.assets.copy-link	{}	\N	{}	[]	2024-06-22 11:32:31.181	2024-06-22 11:32:31.181	\N	\N
7	plugin::upload.read	{}	\N	{}	["admin::is-creator"]	2024-06-22 11:32:31.189	2024-06-22 11:32:31.189	\N	\N
8	plugin::upload.configure-view	{}	\N	{}	[]	2024-06-22 11:32:31.213	2024-06-22 11:32:31.213	\N	\N
9	plugin::upload.assets.create	{}	\N	{}	[]	2024-06-22 11:32:31.225	2024-06-22 11:32:31.225	\N	\N
10	plugin::upload.assets.update	{}	\N	{}	["admin::is-creator"]	2024-06-22 11:32:31.235	2024-06-22 11:32:31.235	\N	\N
11	plugin::upload.assets.download	{}	\N	{}	[]	2024-06-22 11:32:31.242	2024-06-22 11:32:31.242	\N	\N
12	plugin::upload.assets.copy-link	{}	\N	{}	[]	2024-06-22 11:32:31.248	2024-06-22 11:32:31.248	\N	\N
13	plugin::content-manager.explorer.create	{}	plugin::users-permissions.user	{"fields": ["username", "email", "provider", "password", "resetPasswordToken", "confirmationToken", "confirmed", "blocked", "role"]}	[]	2024-06-22 11:32:31.285	2024-06-22 11:32:31.285	\N	\N
14	plugin::content-manager.explorer.read	{}	plugin::users-permissions.user	{"fields": ["username", "email", "provider", "password", "resetPasswordToken", "confirmationToken", "confirmed", "blocked", "role"]}	[]	2024-06-22 11:32:31.297	2024-06-22 11:32:31.297	\N	\N
15	plugin::content-manager.explorer.update	{}	plugin::users-permissions.user	{"fields": ["username", "email", "provider", "password", "resetPasswordToken", "confirmationToken", "confirmed", "blocked", "role"]}	[]	2024-06-22 11:32:31.307	2024-06-22 11:32:31.307	\N	\N
16	plugin::content-manager.explorer.delete	{}	plugin::users-permissions.user	{}	[]	2024-06-22 11:32:31.322	2024-06-22 11:32:31.322	\N	\N
17	plugin::content-manager.single-types.configure-view	{}	\N	{}	[]	2024-06-22 11:32:31.331	2024-06-22 11:32:31.331	\N	\N
18	plugin::content-manager.collection-types.configure-view	{}	\N	{}	[]	2024-06-22 11:32:31.337	2024-06-22 11:32:31.337	\N	\N
19	plugin::content-manager.components.configure-layout	{}	\N	{}	[]	2024-06-22 11:32:31.341	2024-06-22 11:32:31.341	\N	\N
20	plugin::content-type-builder.read	{}	\N	{}	[]	2024-06-22 11:32:31.347	2024-06-22 11:32:31.347	\N	\N
21	plugin::email.settings.read	{}	\N	{}	[]	2024-06-22 11:32:31.352	2024-06-22 11:32:31.352	\N	\N
22	plugin::upload.read	{}	\N	{}	[]	2024-06-22 11:32:31.357	2024-06-22 11:32:31.357	\N	\N
23	plugin::upload.assets.create	{}	\N	{}	[]	2024-06-22 11:32:31.363	2024-06-22 11:32:31.363	\N	\N
24	plugin::upload.assets.update	{}	\N	{}	[]	2024-06-22 11:32:31.368	2024-06-22 11:32:31.368	\N	\N
25	plugin::upload.assets.download	{}	\N	{}	[]	2024-06-22 11:32:31.374	2024-06-22 11:32:31.374	\N	\N
26	plugin::upload.assets.copy-link	{}	\N	{}	[]	2024-06-22 11:32:31.381	2024-06-22 11:32:31.381	\N	\N
27	plugin::upload.configure-view	{}	\N	{}	[]	2024-06-22 11:32:31.388	2024-06-22 11:32:31.388	\N	\N
28	plugin::upload.settings.read	{}	\N	{}	[]	2024-06-22 11:32:31.398	2024-06-22 11:32:31.398	\N	\N
29	plugin::users-permissions.roles.create	{}	\N	{}	[]	2024-06-22 11:32:31.403	2024-06-22 11:32:31.403	\N	\N
30	plugin::users-permissions.roles.read	{}	\N	{}	[]	2024-06-22 11:32:31.408	2024-06-22 11:32:31.408	\N	\N
31	plugin::users-permissions.roles.update	{}	\N	{}	[]	2024-06-22 11:32:31.414	2024-06-22 11:32:31.414	\N	\N
32	plugin::users-permissions.roles.delete	{}	\N	{}	[]	2024-06-22 11:32:31.422	2024-06-22 11:32:31.422	\N	\N
33	plugin::users-permissions.providers.read	{}	\N	{}	[]	2024-06-22 11:32:31.43	2024-06-22 11:32:31.43	\N	\N
34	plugin::users-permissions.providers.update	{}	\N	{}	[]	2024-06-22 11:32:31.443	2024-06-22 11:32:31.443	\N	\N
35	plugin::users-permissions.email-templates.read	{}	\N	{}	[]	2024-06-22 11:32:31.452	2024-06-22 11:32:31.452	\N	\N
36	plugin::users-permissions.email-templates.update	{}	\N	{}	[]	2024-06-22 11:32:31.461	2024-06-22 11:32:31.461	\N	\N
37	plugin::users-permissions.advanced-settings.read	{}	\N	{}	[]	2024-06-22 11:32:31.467	2024-06-22 11:32:31.467	\N	\N
38	plugin::users-permissions.advanced-settings.update	{}	\N	{}	[]	2024-06-22 11:32:31.473	2024-06-22 11:32:31.473	\N	\N
39	plugin::i18n.locale.create	{}	\N	{}	[]	2024-06-22 11:32:31.479	2024-06-22 11:32:31.479	\N	\N
40	plugin::i18n.locale.read	{}	\N	{}	[]	2024-06-22 11:32:31.485	2024-06-22 11:32:31.485	\N	\N
41	plugin::i18n.locale.update	{}	\N	{}	[]	2024-06-22 11:32:31.491	2024-06-22 11:32:31.491	\N	\N
42	plugin::i18n.locale.delete	{}	\N	{}	[]	2024-06-22 11:32:31.497	2024-06-22 11:32:31.497	\N	\N
43	admin::marketplace.read	{}	\N	{}	[]	2024-06-22 11:32:31.503	2024-06-22 11:32:31.503	\N	\N
44	admin::webhooks.create	{}	\N	{}	[]	2024-06-22 11:32:31.508	2024-06-22 11:32:31.508	\N	\N
45	admin::webhooks.read	{}	\N	{}	[]	2024-06-22 11:32:31.514	2024-06-22 11:32:31.514	\N	\N
46	admin::webhooks.update	{}	\N	{}	[]	2024-06-22 11:32:31.522	2024-06-22 11:32:31.522	\N	\N
47	admin::webhooks.delete	{}	\N	{}	[]	2024-06-22 11:32:31.534	2024-06-22 11:32:31.534	\N	\N
48	admin::users.create	{}	\N	{}	[]	2024-06-22 11:32:31.543	2024-06-22 11:32:31.543	\N	\N
49	admin::users.read	{}	\N	{}	[]	2024-06-22 11:32:31.55	2024-06-22 11:32:31.55	\N	\N
50	admin::users.update	{}	\N	{}	[]	2024-06-22 11:32:31.559	2024-06-22 11:32:31.559	\N	\N
51	admin::users.delete	{}	\N	{}	[]	2024-06-22 11:32:31.565	2024-06-22 11:32:31.565	\N	\N
52	admin::roles.create	{}	\N	{}	[]	2024-06-22 11:32:31.57	2024-06-22 11:32:31.57	\N	\N
53	admin::roles.read	{}	\N	{}	[]	2024-06-22 11:32:31.575	2024-06-22 11:32:31.575	\N	\N
54	admin::roles.update	{}	\N	{}	[]	2024-06-22 11:32:31.586	2024-06-22 11:32:31.586	\N	\N
55	admin::roles.delete	{}	\N	{}	[]	2024-06-22 11:32:31.597	2024-06-22 11:32:31.597	\N	\N
56	admin::api-tokens.access	{}	\N	{}	[]	2024-06-22 11:32:31.607	2024-06-22 11:32:31.607	\N	\N
57	admin::api-tokens.create	{}	\N	{}	[]	2024-06-22 11:32:31.621	2024-06-22 11:32:31.621	\N	\N
58	admin::api-tokens.read	{}	\N	{}	[]	2024-06-22 11:32:31.629	2024-06-22 11:32:31.629	\N	\N
59	admin::api-tokens.update	{}	\N	{}	[]	2024-06-22 11:32:31.635	2024-06-22 11:32:31.635	\N	\N
60	admin::api-tokens.regenerate	{}	\N	{}	[]	2024-06-22 11:32:31.645	2024-06-22 11:32:31.645	\N	\N
61	admin::api-tokens.delete	{}	\N	{}	[]	2024-06-22 11:32:31.654	2024-06-22 11:32:31.654	\N	\N
62	admin::project-settings.update	{}	\N	{}	[]	2024-06-22 11:32:31.662	2024-06-22 11:32:31.662	\N	\N
63	admin::project-settings.read	{}	\N	{}	[]	2024-06-22 11:32:31.67	2024-06-22 11:32:31.67	\N	\N
64	admin::transfer.tokens.access	{}	\N	{}	[]	2024-06-22 11:32:31.678	2024-06-22 11:32:31.678	\N	\N
65	admin::transfer.tokens.create	{}	\N	{}	[]	2024-06-22 11:32:31.688	2024-06-22 11:32:31.688	\N	\N
66	admin::transfer.tokens.read	{}	\N	{}	[]	2024-06-22 11:32:31.699	2024-06-22 11:32:31.699	\N	\N
67	admin::transfer.tokens.update	{}	\N	{}	[]	2024-06-22 11:32:31.71	2024-06-22 11:32:31.71	\N	\N
68	admin::transfer.tokens.regenerate	{}	\N	{}	[]	2024-06-22 11:32:31.72	2024-06-22 11:32:31.72	\N	\N
69	admin::transfer.tokens.delete	{}	\N	{}	[]	2024-06-22 11:32:31.731	2024-06-22 11:32:31.731	\N	\N
74	plugin::content-manager.explorer.publish	{}	api::main.main	{"locales": ["en", "ru"]}	[]	2024-06-24 11:25:14.418	2024-06-24 11:25:14.418	\N	\N
73	plugin::content-manager.explorer.delete	{}	api::main.main	{"locales": ["en", "ru"]}	[]	2024-06-24 11:25:14.464	2024-06-24 11:25:14.464	\N	\N
99	plugin::content-manager.explorer.create	{}	api::main.main	{"fields": ["Projects.banner", "Projects.title", "Projects.text", "Projects.gallery", "Letters.title", "Letters.banner", "Letters.file"], "locales": ["en", "ru"]}	[]	2024-07-02 10:51:19.645	2024-07-02 10:51:19.645	\N	\N
100	plugin::content-manager.explorer.read	{}	api::main.main	{"fields": ["Projects.banner", "Projects.title", "Projects.text", "Projects.gallery", "Letters.title", "Letters.banner", "Letters.file"], "locales": ["en", "ru"]}	[]	2024-07-02 10:51:19.655	2024-07-02 10:51:19.655	\N	\N
101	plugin::content-manager.explorer.update	{}	api::main.main	{"fields": ["Projects.banner", "Projects.title", "Projects.text", "Projects.gallery", "Letters.title", "Letters.banner", "Letters.file"], "locales": ["en", "ru"]}	[]	2024-07-02 10:51:19.661	2024-07-02 10:51:19.661	\N	\N
102	plugin::content-manager.explorer.create	{}	api::main.main	{"fields": ["Projects.banner", "Projects.title", "Projects.text", "Projects.gallery", "Letters.title", "Letters.banner", "Letters.file"], "locales": ["en", "ru"]}	[]	2024-07-09 23:57:34.425	2024-07-09 23:57:34.425	\N	\N
103	plugin::content-manager.explorer.read	{}	api::main.main	{"fields": ["Projects.banner", "Projects.title", "Projects.text", "Projects.gallery", "Letters.title", "Letters.banner", "Letters.file"], "locales": ["en", "ru"]}	[]	2024-07-09 23:57:34.435	2024-07-09 23:57:34.435	\N	\N
104	plugin::content-manager.explorer.update	{}	api::main.main	{"fields": ["Projects.banner", "Projects.title", "Projects.text", "Projects.gallery", "Letters.title", "Letters.banner", "Letters.file"], "locales": ["en", "ru"]}	[]	2024-07-09 23:57:34.456	2024-07-09 23:57:34.456	\N	\N
105	plugin::content-manager.explorer.delete	{}	api::main.main	{"locales": ["en", "ru"]}	[]	2024-07-09 23:57:34.466	2024-07-09 23:57:34.466	\N	\N
106	plugin::content-manager.explorer.publish	{}	api::main.main	{"locales": ["en", "ru"]}	[]	2024-07-09 23:57:34.476	2024-07-09 23:57:34.476	\N	\N
107	plugin::content-manager.explorer.create	{}	api::main.main	{"fields": ["Projects.banner", "Projects.title", "Projects.text", "Projects.gallery", "Letters.title", "Letters.banner", "Letters.file"], "locales": ["en", "ru"]}	[]	2024-07-09 23:58:00.029	2024-07-09 23:58:00.029	\N	\N
108	plugin::content-manager.explorer.read	{}	api::main.main	{"fields": ["Projects.banner", "Projects.title", "Projects.text", "Projects.gallery", "Letters.title", "Letters.banner", "Letters.file"], "locales": ["en", "ru"]}	[]	2024-07-09 23:58:00.037	2024-07-09 23:58:00.037	\N	\N
109	plugin::content-manager.explorer.update	{}	api::main.main	{"fields": ["Projects.banner", "Projects.title", "Projects.text", "Projects.gallery", "Letters.title", "Letters.banner", "Letters.file"], "locales": ["en", "ru"]}	[]	2024-07-09 23:58:00.045	2024-07-09 23:58:00.045	\N	\N
110	plugin::content-manager.explorer.delete	{}	api::main.main	{"locales": ["en", "ru"]}	[]	2024-07-09 23:58:00.054	2024-07-09 23:58:00.054	\N	\N
111	plugin::content-manager.explorer.publish	{}	api::main.main	{"locales": ["en", "ru"]}	[]	2024-07-09 23:58:00.06	2024-07-09 23:58:00.06	\N	\N
\.


--
-- Data for Name: admin_permissions_role_links; Type: TABLE DATA; Schema: public; Owner: fractal
--

COPY public.admin_permissions_role_links (id, permission_id, role_id, permission_order) FROM stdin;
1	1	2	1
2	2	2	2
3	3	2	3
4	4	2	4
5	5	2	5
6	6	2	6
7	7	3	1
8	8	3	2
9	9	3	3
10	10	3	4
11	11	3	5
12	12	3	6
13	13	1	1
14	14	1	2
15	15	1	3
16	16	1	4
17	17	1	5
18	18	1	6
19	19	1	7
20	20	1	8
21	21	1	9
22	22	1	10
23	23	1	11
24	24	1	12
25	25	1	13
26	26	1	14
27	27	1	15
28	28	1	16
29	29	1	17
30	30	1	18
31	31	1	19
32	32	1	20
33	33	1	21
34	34	1	22
35	35	1	23
36	36	1	24
37	37	1	25
38	38	1	26
39	39	1	27
40	40	1	28
41	41	1	29
42	42	1	30
43	43	1	31
44	44	1	32
45	45	1	33
46	46	1	34
47	47	1	35
48	48	1	36
49	49	1	37
50	50	1	38
51	51	1	39
52	52	1	40
53	53	1	41
54	54	1	42
55	55	1	43
56	56	1	44
57	57	1	45
58	58	1	46
59	59	1	47
60	60	1	48
61	61	1	49
62	62	1	50
63	63	1	51
64	64	1	52
65	65	1	53
66	66	1	54
67	67	1	55
68	68	1	56
69	69	1	57
78	74	1	58
82	73	1	62
104	99	1	63
105	100	1	64
106	101	1	65
107	102	2	7
108	103	2	8
109	104	2	9
110	105	2	10
111	106	2	11
112	107	3	7
113	108	3	8
114	109	3	9
115	110	3	10
116	111	3	11
\.


--
-- Data for Name: admin_roles; Type: TABLE DATA; Schema: public; Owner: fractal
--

COPY public.admin_roles (id, name, code, description, created_at, updated_at, created_by_id, updated_by_id) FROM stdin;
1	Super Admin	strapi-super-admin	Super Admins can access and manage all features and settings.	2024-06-22 11:32:31.101	2024-06-22 11:32:31.101	\N	\N
2	Editor	strapi-editor	Editors can manage and publish contents including those of other users.	2024-06-22 11:32:31.112	2024-07-09 23:57:34.212	\N	\N
3	Author	strapi-author	Authors can manage the content they have created.	2024-06-22 11:32:31.118	2024-07-09 23:57:59.771	\N	\N
\.


--
-- Data for Name: admin_users; Type: TABLE DATA; Schema: public; Owner: fractal
--

COPY public.admin_users (id, firstname, lastname, username, email, password, reset_password_token, registration_token, is_active, blocked, prefered_language, created_at, updated_at, created_by_id, updated_by_id) FROM stdin;
1	Fractal	\N	\N	webstudio.fractal@gmail.com	$2a$10$c8IIDdwp5fTLLMuOjXMYs.OFOghR/IdUTwgEF5sjhf81PGDg.wGYa	\N	\N	t	f	\N	2024-06-22 11:34:16.745	2024-06-22 11:34:16.745	\N	\N
2	Anna	Peshkina	\N	anna.peshkina@hms-expo.ru	$2a$10$YoFhyI/jJMbifUT/F3h3yO9mwBUMT.odQpTzrNy9i9DRfJmuHXDdO	\N	\N	t	f	\N	2024-07-09 23:52:21.713	2024-07-09 23:53:38.821	\N	\N
3	Anna	Akimova	\N	anna.akimova@hms-expo.ru	$2a$10$sKnhdXqveMr.dLYRQgZZ9e5XZqO8W8JLh8qMs31mMQ4vBbJ9nlUmC	\N	\N	t	f	\N	2024-07-10 00:01:10.83	2024-07-10 00:01:27.22	\N	\N
4	Vasily	Surkov	\N	vasiliy.surkov@hms-expo.ru	$2a$10$rxw0vKTTtf2a4mS0rmEcMOw.ta0us2WiSFUdCoifsjEzMdv95W4Ii	\N	\N	t	f	\N	2024-07-11 20:43:52.182	2024-07-11 20:44:30.705	\N	\N
\.


--
-- Data for Name: admin_users_roles_links; Type: TABLE DATA; Schema: public; Owner: fractal
--

COPY public.admin_users_roles_links (id, user_id, role_id, role_order, user_order) FROM stdin;
1	1	1	1	1
2	2	2	1	1
3	2	3	2	1
4	3	3	1	2
5	3	2	2	2
6	4	3	1	3
7	4	2	2	3
\.


--
-- Data for Name: components_main_galleries; Type: TABLE DATA; Schema: public; Owner: fractal
--

COPY public.components_main_galleries (id) FROM stdin;
1
2
3
4
5
6
8
7
\.


--
-- Data for Name: components_main_letters; Type: TABLE DATA; Schema: public; Owner: fractal
--

COPY public.components_main_letters (id, title) FROM stdin;
9	ООО «ВАЙТ ЭКСПО»
1	АО «Экспоцентр»
3	ООО «Гранат»
10	EXPO-ONE
5	Expocentre JSC
8	WHITE EXPO, LLC
6	LLC "Granat"
7	EXPO-ONE
\.


--
-- Data for Name: components_main_swipers; Type: TABLE DATA; Schema: public; Owner: fractal
--

COPY public.components_main_swipers (id, title, text) FROM stdin;
21	Vietfood & Beverage 2024 (Ho Chi Minh, Vietnam)	In August 2024 HMS Expo team has sucessfully arranged delivery of 920 kg of various foodstuff to Ho Chi Minh (Vietnam)
3	ROSUPACK 2024 (Crocus Expo, Moscow, RF)	HMC Expo, being the official forwarder of the Crocus Expo IEC, provided unloading and delivery to the stand of more than 16 tons of equipment from foreign exhibitors at the ROSUPAK 2024 exhibition (International Exhibition of the Packaging Industry).  We are always interested in working with large exhibits and complex unloading and installation schemes.
1	Gulfood 2024 (Dubai, UAE)	Every year in our team starts the same way. For many years in a row, we have been organizing the shipment of goods from Russian manufacturers to the GULFOOD exhibition. 2024 was no exception. We provided delivery of 4 tons of products for 26 participants of the REC exhibition.
22	Vietfood & Beverage 2024 (Хошимин, Вьетнам)	В августе 2024 команда ХМС Экспо организовала доставку 920 кг разнообразной пищевой продукции на выставку в Хошимине (Вьетнам).
10	ROSUPACK 2024  (Крокус Экспо, Москва, РФ)	ХМС Экспо, являясь официальным экспедитором МВЦ Крокус Экспо, обеспечил выгрузку и доставку на стенд более 16 тонн оборудования зарубежных экспонентов на выставке РОСУПАК 2024 (Международная выставка упаковочной индустрии).  Нам всегда интересно работать с большими экспонатами и сложными схемами разгрузки и монтажа.
9	Gulfood 2024 (Дубай, ОАЭ)	Каждый год в нашем коллективе начинается одинаково. Уже много лет подряд мы организовываем отправку грузов Российских производителей на выставку GULFOOD. 2024 год не стал исключением. Мы обеспечили доставку 4 тонн продукции для 26 участников экспозиции РЭЦ.
2	\N	\N
6	\N	\N
7	\N	\N
8	\N	\N
13	\N	\N
14	\N	\N
15	\N	\N
16	\N	\N
18	\N	\N
19	\N	\N
20	\N	\N
17	\N	\N
\.


--
-- Data for Name: files; Type: TABLE DATA; Schema: public; Owner: fractal
--

COPY public.files (id, name, alternative_text, caption, width, height, formats, hash, ext, mime, size, url, preview_url, provider, provider_metadata, folder_path, created_at, updated_at, created_by_id, updated_by_id) FROM stdin;
6	Благодарственное_письмо_от_ООО_ВАЙТ_ЭКСПО.pdf	\N	\N	\N	\N	\N	Blagodarstvennoe_pismo_ot_OOO_VAJT_EKSPO_f1e1e5f818	.pdf	application/pdf	204.17	/uploads/Blagodarstvennoe_pismo_ot_OOO_VAJT_EKSPO_f1e1e5f818.pdf	\N	local	\N	/1/3	2024-06-25 12:13:51.923	2024-06-25 12:13:51.923	1	1
7	Благодарственное_письмо_АО_Экспоцентр_001486.pdf	\N	\N	\N	\N	\N	Blagodarstvennoe_pismo_AO_Ekspoczentr_001486_923e50e651	.pdf	application/pdf	431.09	/uploads/Blagodarstvennoe_pismo_AO_Ekspoczentr_001486_923e50e651.pdf	\N	local	\N	/1/3	2024-06-25 12:13:52.068	2024-06-25 12:13:52.068	1	1
8	EXPO-ONE - Благодарственное письмо.pdf	\N	\N	\N	\N	\N	EXPO_ONE_Blagodarstvennoe_pismo_1e9e39ddf7	.pdf	application/pdf	532.50	/uploads/EXPO_ONE_Blagodarstvennoe_pismo_1e9e39ddf7.pdf	\N	local	\N	/1/3	2024-06-25 12:13:52.07	2024-06-25 12:29:45.901	1	1
2	Благодарственное_письмо_АО_Экспоцентр_001486 1 (2).webp	\N	\N	1653	2338	{"large": {"ext": ".webp", "url": "/uploads/large_Blagodarstvennoe_pismo_AO_Ekspoczentr_001486_1_2_fa5fe75123.webp", "hash": "large_Blagodarstvennoe_pismo_AO_Ekspoczentr_001486_1_2_fa5fe75123", "mime": "image/webp", "name": "large_Благодарственное_письмо_АО_Экспоцентр_001486 1 (2).webp", "path": null, "size": 41.97, "width": 707, "height": 1000, "sizeInBytes": 41972}, "small": {"ext": ".webp", "url": "/uploads/small_Blagodarstvennoe_pismo_AO_Ekspoczentr_001486_1_2_fa5fe75123.webp", "hash": "small_Blagodarstvennoe_pismo_AO_Ekspoczentr_001486_1_2_fa5fe75123", "mime": "image/webp", "name": "small_Благодарственное_письмо_АО_Экспоцентр_001486 1 (2).webp", "path": null, "size": 14.13, "width": 354, "height": 500, "sizeInBytes": 14130}, "medium": {"ext": ".webp", "url": "/uploads/medium_Blagodarstvennoe_pismo_AO_Ekspoczentr_001486_1_2_fa5fe75123.webp", "hash": "medium_Blagodarstvennoe_pismo_AO_Ekspoczentr_001486_1_2_fa5fe75123", "mime": "image/webp", "name": "medium_Благодарственное_письмо_АО_Экспоцентр_001486 1 (2).webp", "path": null, "size": 27.29, "width": 530, "height": 750, "sizeInBytes": 27288}, "thumbnail": {"ext": ".webp", "url": "/uploads/thumbnail_Blagodarstvennoe_pismo_AO_Ekspoczentr_001486_1_2_fa5fe75123.webp", "hash": "thumbnail_Blagodarstvennoe_pismo_AO_Ekspoczentr_001486_1_2_fa5fe75123", "mime": "image/webp", "name": "thumbnail_Благодарственное_письмо_АО_Экспоцентр_001486 1 (2).webp", "path": null, "size": 2.01, "width": 110, "height": 156, "sizeInBytes": 2014}}	Blagodarstvennoe_pismo_AO_Ekspoczentr_001486_1_2_fa5fe75123	.webp	image/webp	152.67	/uploads/Blagodarstvennoe_pismo_AO_Ekspoczentr_001486_1_2_fa5fe75123.webp	\N	local	\N	/1/2	2024-06-24 01:53:16.213	2024-06-24 01:53:16.213	1	1
3	Благодарственное_письмо_АО_Экспоцентр_001486 1 (1).webp	\N	\N	2066	3157	{"large": {"ext": ".webp", "url": "/uploads/large_Blagodarstvennoe_pismo_AO_Ekspoczentr_001486_1_1_2fb665389f.webp", "hash": "large_Blagodarstvennoe_pismo_AO_Ekspoczentr_001486_1_1_2fb665389f", "mime": "image/webp", "name": "large_Благодарственное_письмо_АО_Экспоцентр_001486 1 (1).webp", "path": null, "size": 43.38, "width": 654, "height": 1000, "sizeInBytes": 43380}, "small": {"ext": ".webp", "url": "/uploads/small_Blagodarstvennoe_pismo_AO_Ekspoczentr_001486_1_1_2fb665389f.webp", "hash": "small_Blagodarstvennoe_pismo_AO_Ekspoczentr_001486_1_1_2fb665389f", "mime": "image/webp", "name": "small_Благодарственное_письмо_АО_Экспоцентр_001486 1 (1).webp", "path": null, "size": 15.14, "width": 327, "height": 500, "sizeInBytes": 15142}, "medium": {"ext": ".webp", "url": "/uploads/medium_Blagodarstvennoe_pismo_AO_Ekspoczentr_001486_1_1_2fb665389f.webp", "hash": "medium_Blagodarstvennoe_pismo_AO_Ekspoczentr_001486_1_1_2fb665389f", "mime": "image/webp", "name": "medium_Благодарственное_письмо_АО_Экспоцентр_001486 1 (1).webp", "path": null, "size": 28.92, "width": 491, "height": 750, "sizeInBytes": 28918}, "thumbnail": {"ext": ".webp", "url": "/uploads/thumbnail_Blagodarstvennoe_pismo_AO_Ekspoczentr_001486_1_1_2fb665389f.webp", "hash": "thumbnail_Blagodarstvennoe_pismo_AO_Ekspoczentr_001486_1_1_2fb665389f", "mime": "image/webp", "name": "thumbnail_Благодарственное_письмо_АО_Экспоцентр_001486 1 (1).webp", "path": null, "size": 1.8, "width": 102, "height": 156, "sizeInBytes": 1796}}	Blagodarstvennoe_pismo_AO_Ekspoczentr_001486_1_1_2fb665389f	.webp	image/webp	171.68	/uploads/Blagodarstvennoe_pismo_AO_Ekspoczentr_001486_1_1_2fb665389f.webp	\N	local	\N	/1/2	2024-06-24 01:53:17.184	2024-06-24 01:53:17.184	1	1
1	case_1.webp	\N	\N	900	600	{"small": {"ext": ".webp", "url": "/uploads/small_case_1_b398d9103c.webp", "hash": "small_case_1_b398d9103c", "mime": "image/webp", "name": "small_case_1.webp", "path": null, "size": 47.84, "width": 500, "height": 333, "sizeInBytes": 47844}, "medium": {"ext": ".webp", "url": "/uploads/medium_case_1_b398d9103c.webp", "hash": "medium_case_1_b398d9103c", "mime": "image/webp", "name": "medium_case_1.webp", "path": null, "size": 89.52, "width": 750, "height": 500, "sizeInBytes": 89520}, "thumbnail": {"ext": ".webp", "url": "/uploads/thumbnail_case_1_b398d9103c.webp", "hash": "thumbnail_case_1_b398d9103c", "mime": "image/webp", "name": "thumbnail_case_1.webp", "path": null, "size": 13.22, "width": 234, "height": 156, "sizeInBytes": 13218}}	case_1_b398d9103c	.webp	image/webp	139.34	/uploads/case_1_b398d9103c.webp	\N	local	\N	/	2024-06-23 16:48:56.246	2024-07-02 09:56:40.737	1	1
5	Благодарственное_письмо_от_ООО_Гранат.pdf	\N	\N	\N	\N	\N	Blagodarstvennoe_pismo_ot_OOO_Granat_a696ebee43	.pdf	application/pdf	160.91	/uploads/Blagodarstvennoe_pismo_ot_OOO_Granat_a696ebee43.pdf	\N	local	\N	/1/3	2024-06-25 12:13:51.915	2024-07-02 09:57:56.88	1	1
4	Благодарственное_письмо_АО_Экспоцентр_001486 1.webp	\N	\N	2457	3484	{"large": {"ext": ".webp", "url": "/uploads/large_Blagodarstvennoe_pismo_AO_Ekspoczentr_001486_1_af0892e74f.webp", "hash": "large_Blagodarstvennoe_pismo_AO_Ekspoczentr_001486_1_af0892e74f", "mime": "image/webp", "name": "large_Благодарственное_письмо_АО_Экспоцентр_001486 1.webp", "path": null, "size": 51.69, "width": 705, "height": 1000, "sizeInBytes": 51692}, "small": {"ext": ".webp", "url": "/uploads/small_Blagodarstvennoe_pismo_AO_Ekspoczentr_001486_1_af0892e74f.webp", "hash": "small_Blagodarstvennoe_pismo_AO_Ekspoczentr_001486_1_af0892e74f", "mime": "image/webp", "name": "small_Благодарственное_письмо_АО_Экспоцентр_001486 1.webp", "path": null, "size": 17.54, "width": 353, "height": 500, "sizeInBytes": 17544}, "medium": {"ext": ".webp", "url": "/uploads/medium_Blagodarstvennoe_pismo_AO_Ekspoczentr_001486_1_af0892e74f.webp", "hash": "medium_Blagodarstvennoe_pismo_AO_Ekspoczentr_001486_1_af0892e74f", "mime": "image/webp", "name": "medium_Благодарственное_письмо_АО_Экспоцентр_001486 1.webp", "path": null, "size": 34.77, "width": 529, "height": 750, "sizeInBytes": 34766}, "thumbnail": {"ext": ".webp", "url": "/uploads/thumbnail_Blagodarstvennoe_pismo_AO_Ekspoczentr_001486_1_af0892e74f.webp", "hash": "thumbnail_Blagodarstvennoe_pismo_AO_Ekspoczentr_001486_1_af0892e74f", "mime": "image/webp", "name": "thumbnail_Благодарственное_письмо_АО_Экспоцентр_001486 1.webp", "path": null, "size": 2.26, "width": 110, "height": 156, "sizeInBytes": 2260}}	Blagodarstvennoe_pismo_AO_Ekspoczentr_001486_1_af0892e74f	.webp	image/webp	324.64	/uploads/Blagodarstvennoe_pismo_AO_Ekspoczentr_001486_1_af0892e74f.webp	\N	local	\N	/1/2	2024-06-24 01:53:17.805	2024-06-24 01:53:17.805	1	1
9	EXPO-ONE-Благодарственное-письмо.webp	\N	\N	1654	2339	{"large": {"ext": ".webp", "url": "/uploads/large_EXPO_ONE_Blagodarstvennoe_pismo_3a91ca6b9d.webp", "hash": "large_EXPO_ONE_Blagodarstvennoe_pismo_3a91ca6b9d", "mime": "image/webp", "name": "large_EXPO-ONE-Благодарственное-письмо.webp", "path": null, "size": 45.15, "width": 707, "height": 1000, "sizeInBytes": 45154}, "small": {"ext": ".webp", "url": "/uploads/small_EXPO_ONE_Blagodarstvennoe_pismo_3a91ca6b9d.webp", "hash": "small_EXPO_ONE_Blagodarstvennoe_pismo_3a91ca6b9d", "mime": "image/webp", "name": "small_EXPO-ONE-Благодарственное-письмо.webp", "path": null, "size": 15.1, "width": 354, "height": 500, "sizeInBytes": 15102}, "medium": {"ext": ".webp", "url": "/uploads/medium_EXPO_ONE_Blagodarstvennoe_pismo_3a91ca6b9d.webp", "hash": "medium_EXPO_ONE_Blagodarstvennoe_pismo_3a91ca6b9d", "mime": "image/webp", "name": "medium_EXPO-ONE-Благодарственное-письмо.webp", "path": null, "size": 28.61, "width": 530, "height": 750, "sizeInBytes": 28610}, "thumbnail": {"ext": ".webp", "url": "/uploads/thumbnail_EXPO_ONE_Blagodarstvennoe_pismo_3a91ca6b9d.webp", "hash": "thumbnail_EXPO_ONE_Blagodarstvennoe_pismo_3a91ca6b9d", "mime": "image/webp", "name": "thumbnail_EXPO-ONE-Благодарственное-письмо.webp", "path": null, "size": 1.93, "width": 110, "height": 156, "sizeInBytes": 1934}}	EXPO_ONE_Blagodarstvennoe_pismo_3a91ca6b9d	.webp	image/webp	159.67	/uploads/EXPO_ONE_Blagodarstvennoe_pismo_3a91ca6b9d.webp	\N	local	\N	/1/2	2024-06-25 15:13:30.926	2024-06-25 15:13:30.926	1	1
13	5.png	\N	\N	960	1280	{"large": {"ext": ".png", "url": "/uploads/large_5_103aa7afd9.png", "hash": "large_5_103aa7afd9", "mime": "image/png", "name": "large_5.png", "path": null, "size": 1656.23, "width": 750, "height": 1000, "sizeInBytes": 1656228}, "small": {"ext": ".png", "url": "/uploads/small_5_103aa7afd9.png", "hash": "small_5_103aa7afd9", "mime": "image/png", "name": "small_5.png", "path": null, "size": 431.68, "width": 375, "height": 500, "sizeInBytes": 431676}, "medium": {"ext": ".png", "url": "/uploads/medium_5_103aa7afd9.png", "hash": "medium_5_103aa7afd9", "mime": "image/png", "name": "medium_5.png", "path": null, "size": 948.47, "width": 563, "height": 750, "sizeInBytes": 948474}, "thumbnail": {"ext": ".png", "url": "/uploads/thumbnail_5_103aa7afd9.png", "hash": "thumbnail_5_103aa7afd9", "mime": "image/png", "name": "thumbnail_5.png", "path": null, "size": 48.04, "width": 117, "height": 156, "sizeInBytes": 48043}}	5_103aa7afd9	.png	image/png	668.89	/uploads/5_103aa7afd9.png	\N	local	\N	/4/5	2024-07-02 10:45:11.621	2024-07-02 10:45:11.621	1	1
14	3.png	\N	\N	1280	960	{"large": {"ext": ".png", "url": "/uploads/large_3_ca88ce4e94.png", "hash": "large_3_ca88ce4e94", "mime": "image/png", "name": "large_3.png", "path": null, "size": 1416.14, "width": 1000, "height": 750, "sizeInBytes": 1416141}, "small": {"ext": ".png", "url": "/uploads/small_3_ca88ce4e94.png", "hash": "small_3_ca88ce4e94", "mime": "image/png", "name": "small_3.png", "path": null, "size": 378.82, "width": 500, "height": 375, "sizeInBytes": 378822}, "medium": {"ext": ".png", "url": "/uploads/medium_3_ca88ce4e94.png", "hash": "medium_3_ca88ce4e94", "mime": "image/png", "name": "medium_3.png", "path": null, "size": 817.73, "width": 750, "height": 563, "sizeInBytes": 817727}, "thumbnail": {"ext": ".png", "url": "/uploads/thumbnail_3_ca88ce4e94.png", "hash": "thumbnail_3_ca88ce4e94", "mime": "image/png", "name": "thumbnail_3.png", "path": null, "size": 77.31, "width": 208, "height": 156, "sizeInBytes": 77313}}	3_ca88ce4e94	.png	image/png	515.40	/uploads/3_ca88ce4e94.png	\N	local	\N	/4/5	2024-07-02 10:45:11.644	2024-07-02 10:45:11.644	1	1
15	6.png	\N	\N	960	1280	{"large": {"ext": ".png", "url": "/uploads/large_6_398e087064.png", "hash": "large_6_398e087064", "mime": "image/png", "name": "large_6.png", "path": null, "size": 1683.93, "width": 750, "height": 1000, "sizeInBytes": 1683929}, "small": {"ext": ".png", "url": "/uploads/small_6_398e087064.png", "hash": "small_6_398e087064", "mime": "image/png", "name": "small_6.png", "path": null, "size": 444.69, "width": 375, "height": 500, "sizeInBytes": 444686}, "medium": {"ext": ".png", "url": "/uploads/medium_6_398e087064.png", "hash": "medium_6_398e087064", "mime": "image/png", "name": "medium_6.png", "path": null, "size": 968.84, "width": 563, "height": 750, "sizeInBytes": 968840}, "thumbnail": {"ext": ".png", "url": "/uploads/thumbnail_6_398e087064.png", "hash": "thumbnail_6_398e087064", "mime": "image/png", "name": "thumbnail_6.png", "path": null, "size": 49.4, "width": 117, "height": 156, "sizeInBytes": 49399}}	6_398e087064	.png	image/png	618.02	/uploads/6_398e087064.png	\N	local	\N	/4/5	2024-07-02 10:45:11.651	2024-07-02 10:45:11.651	1	1
16	1.png	\N	\N	960	1280	{"large": {"ext": ".png", "url": "/uploads/large_1_5bd14251b3.png", "hash": "large_1_5bd14251b3", "mime": "image/png", "name": "large_1.png", "path": null, "size": 1548.88, "width": 750, "height": 1000, "sizeInBytes": 1548875}, "small": {"ext": ".png", "url": "/uploads/small_1_5bd14251b3.png", "hash": "small_1_5bd14251b3", "mime": "image/png", "name": "small_1.png", "path": null, "size": 413.2, "width": 375, "height": 500, "sizeInBytes": 413204}, "medium": {"ext": ".png", "url": "/uploads/medium_1_5bd14251b3.png", "hash": "medium_1_5bd14251b3", "mime": "image/png", "name": "medium_1.png", "path": null, "size": 891.41, "width": 563, "height": 750, "sizeInBytes": 891411}, "thumbnail": {"ext": ".png", "url": "/uploads/thumbnail_1_5bd14251b3.png", "hash": "thumbnail_1_5bd14251b3", "mime": "image/png", "name": "thumbnail_1.png", "path": null, "size": 48.58, "width": 117, "height": 156, "sizeInBytes": 48578}}	1_5bd14251b3	.png	image/png	566.96	/uploads/1_5bd14251b3.png	\N	local	\N	/4/5	2024-07-02 10:45:12.133	2024-07-02 10:45:12.133	1	1
17	2.png	\N	\N	1314	1526	{"large": {"ext": ".png", "url": "/uploads/large_2_af6cb56830.png", "hash": "large_2_af6cb56830", "mime": "image/png", "name": "large_2.png", "path": null, "size": 1884.47, "width": 861, "height": 1000, "sizeInBytes": 1884465}, "small": {"ext": ".png", "url": "/uploads/small_2_af6cb56830.png", "hash": "small_2_af6cb56830", "mime": "image/png", "name": "small_2.png", "path": null, "size": 487.35, "width": 431, "height": 500, "sizeInBytes": 487349}, "medium": {"ext": ".png", "url": "/uploads/medium_2_af6cb56830.png", "hash": "medium_2_af6cb56830", "mime": "image/png", "name": "medium_2.png", "path": null, "size": 1076.46, "width": 646, "height": 750, "sizeInBytes": 1076460}, "thumbnail": {"ext": ".png", "url": "/uploads/thumbnail_2_af6cb56830.png", "hash": "thumbnail_2_af6cb56830", "mime": "image/png", "name": "thumbnail_2.png", "path": null, "size": 53.4, "width": 134, "height": 156, "sizeInBytes": 53400}}	2_af6cb56830	.png	image/png	1016.31	/uploads/2_af6cb56830.png	\N	local	\N	/4/5	2024-07-02 10:45:18.367	2024-07-02 10:45:18.367	1	1
18	4.png	\N	\N	960	1280	{"large": {"ext": ".png", "url": "/uploads/large_4_f07333756c.png", "hash": "large_4_f07333756c", "mime": "image/png", "name": "large_4.png", "path": null, "size": 1649.03, "width": 750, "height": 1000, "sizeInBytes": 1649030}, "small": {"ext": ".png", "url": "/uploads/small_4_f07333756c.png", "hash": "small_4_f07333756c", "mime": "image/png", "name": "small_4.png", "path": null, "size": 443.4, "width": 375, "height": 500, "sizeInBytes": 443404}, "medium": {"ext": ".png", "url": "/uploads/medium_4_f07333756c.png", "hash": "medium_4_f07333756c", "mime": "image/png", "name": "medium_4.png", "path": null, "size": 954.9, "width": 563, "height": 750, "sizeInBytes": 954904}, "thumbnail": {"ext": ".png", "url": "/uploads/thumbnail_4_f07333756c.png", "hash": "thumbnail_4_f07333756c", "mime": "image/png", "name": "thumbnail_4.png", "path": null, "size": 50.53, "width": 117, "height": 156, "sizeInBytes": 50527}}	4_f07333756c	.png	image/png	580.19	/uploads/4_f07333756c.png	\N	local	\N	/4/5	2024-07-02 10:45:19.301	2024-07-02 10:45:19.301	1	1
19	1 Rosupack 2024 (30).jpeg	\N	\N	1200	1600	{"large": {"ext": ".jpeg", "url": "/uploads/large_1_Rosupack_2024_30_9a24c84a38.jpeg", "hash": "large_1_Rosupack_2024_30_9a24c84a38", "mime": "image/jpeg", "name": "large_1 Rosupack 2024 (30).jpeg", "path": null, "size": 132.89, "width": 750, "height": 1000, "sizeInBytes": 132891}, "small": {"ext": ".jpeg", "url": "/uploads/small_1_Rosupack_2024_30_9a24c84a38.jpeg", "hash": "small_1_Rosupack_2024_30_9a24c84a38", "mime": "image/jpeg", "name": "small_1 Rosupack 2024 (30).jpeg", "path": null, "size": 39.99, "width": 375, "height": 500, "sizeInBytes": 39987}, "medium": {"ext": ".jpeg", "url": "/uploads/medium_1_Rosupack_2024_30_9a24c84a38.jpeg", "hash": "medium_1_Rosupack_2024_30_9a24c84a38", "mime": "image/jpeg", "name": "medium_1 Rosupack 2024 (30).jpeg", "path": null, "size": 81.19, "width": 563, "height": 750, "sizeInBytes": 81192}, "thumbnail": {"ext": ".jpeg", "url": "/uploads/thumbnail_1_Rosupack_2024_30_9a24c84a38.jpeg", "hash": "thumbnail_1_Rosupack_2024_30_9a24c84a38", "mime": "image/jpeg", "name": "thumbnail_1 Rosupack 2024 (30).jpeg", "path": null, "size": 5.68, "width": 117, "height": 156, "sizeInBytes": 5683}}	1_Rosupack_2024_30_9a24c84a38	.jpeg	image/jpeg	283.56	/uploads/1_Rosupack_2024_30_9a24c84a38.jpeg	\N	local	\N	/4/6	2024-07-02 11:59:21.533	2024-07-02 11:59:21.533	1	1
20	5 Rosupack 2024 (24).jpeg	\N	\N	1200	1600	{"large": {"ext": ".jpeg", "url": "/uploads/large_5_Rosupack_2024_24_a1b01cd0eb.jpeg", "hash": "large_5_Rosupack_2024_24_a1b01cd0eb", "mime": "image/jpeg", "name": "large_5 Rosupack 2024 (24).jpeg", "path": null, "size": 164.26, "width": 750, "height": 1000, "sizeInBytes": 164261}, "small": {"ext": ".jpeg", "url": "/uploads/small_5_Rosupack_2024_24_a1b01cd0eb.jpeg", "hash": "small_5_Rosupack_2024_24_a1b01cd0eb", "mime": "image/jpeg", "name": "small_5 Rosupack 2024 (24).jpeg", "path": null, "size": 44.94, "width": 375, "height": 500, "sizeInBytes": 44939}, "medium": {"ext": ".jpeg", "url": "/uploads/medium_5_Rosupack_2024_24_a1b01cd0eb.jpeg", "hash": "medium_5_Rosupack_2024_24_a1b01cd0eb", "mime": "image/jpeg", "name": "medium_5 Rosupack 2024 (24).jpeg", "path": null, "size": 96.35, "width": 563, "height": 750, "sizeInBytes": 96347}, "thumbnail": {"ext": ".jpeg", "url": "/uploads/thumbnail_5_Rosupack_2024_24_a1b01cd0eb.jpeg", "hash": "thumbnail_5_Rosupack_2024_24_a1b01cd0eb", "mime": "image/jpeg", "name": "thumbnail_5 Rosupack 2024 (24).jpeg", "path": null, "size": 5.98, "width": 117, "height": 156, "sizeInBytes": 5979}}	5_Rosupack_2024_24_a1b01cd0eb	.jpeg	image/jpeg	364.26	/uploads/5_Rosupack_2024_24_a1b01cd0eb.jpeg	\N	local	\N	/4/6	2024-07-02 11:59:21.59	2024-07-02 11:59:21.59	1	1
21	2 Rosupack 2024 (6).jpeg	\N	\N	1200	1600	{"large": {"ext": ".jpeg", "url": "/uploads/large_2_Rosupack_2024_6_05c0aa0df8.jpeg", "hash": "large_2_Rosupack_2024_6_05c0aa0df8", "mime": "image/jpeg", "name": "large_2 Rosupack 2024 (6).jpeg", "path": null, "size": 155.26, "width": 750, "height": 1000, "sizeInBytes": 155259}, "small": {"ext": ".jpeg", "url": "/uploads/small_2_Rosupack_2024_6_05c0aa0df8.jpeg", "hash": "small_2_Rosupack_2024_6_05c0aa0df8", "mime": "image/jpeg", "name": "small_2 Rosupack 2024 (6).jpeg", "path": null, "size": 44.87, "width": 375, "height": 500, "sizeInBytes": 44868}, "medium": {"ext": ".jpeg", "url": "/uploads/medium_2_Rosupack_2024_6_05c0aa0df8.jpeg", "hash": "medium_2_Rosupack_2024_6_05c0aa0df8", "mime": "image/jpeg", "name": "medium_2 Rosupack 2024 (6).jpeg", "path": null, "size": 93.94, "width": 563, "height": 750, "sizeInBytes": 93940}, "thumbnail": {"ext": ".jpeg", "url": "/uploads/thumbnail_2_Rosupack_2024_6_05c0aa0df8.jpeg", "hash": "thumbnail_2_Rosupack_2024_6_05c0aa0df8", "mime": "image/jpeg", "name": "thumbnail_2 Rosupack 2024 (6).jpeg", "path": null, "size": 5.55, "width": 117, "height": 156, "sizeInBytes": 5553}}	2_Rosupack_2024_6_05c0aa0df8	.jpeg	image/jpeg	332.79	/uploads/2_Rosupack_2024_6_05c0aa0df8.jpeg	\N	local	\N	/4/6	2024-07-02 11:59:21.611	2024-07-02 11:59:21.611	1	1
22	8 Rosupack 2024 (17).jpeg	\N	\N	1200	1600	{"large": {"ext": ".jpeg", "url": "/uploads/large_8_Rosupack_2024_17_da584ce20b.jpeg", "hash": "large_8_Rosupack_2024_17_da584ce20b", "mime": "image/jpeg", "name": "large_8 Rosupack 2024 (17).jpeg", "path": null, "size": 144.79, "width": 750, "height": 1000, "sizeInBytes": 144792}, "small": {"ext": ".jpeg", "url": "/uploads/small_8_Rosupack_2024_17_da584ce20b.jpeg", "hash": "small_8_Rosupack_2024_17_da584ce20b", "mime": "image/jpeg", "name": "small_8 Rosupack 2024 (17).jpeg", "path": null, "size": 41.99, "width": 375, "height": 500, "sizeInBytes": 41993}, "medium": {"ext": ".jpeg", "url": "/uploads/medium_8_Rosupack_2024_17_da584ce20b.jpeg", "hash": "medium_8_Rosupack_2024_17_da584ce20b", "mime": "image/jpeg", "name": "medium_8 Rosupack 2024 (17).jpeg", "path": null, "size": 87.81, "width": 563, "height": 750, "sizeInBytes": 87809}, "thumbnail": {"ext": ".jpeg", "url": "/uploads/thumbnail_8_Rosupack_2024_17_da584ce20b.jpeg", "hash": "thumbnail_8_Rosupack_2024_17_da584ce20b", "mime": "image/jpeg", "name": "thumbnail_8 Rosupack 2024 (17).jpeg", "path": null, "size": 5.51, "width": 117, "height": 156, "sizeInBytes": 5510}}	8_Rosupack_2024_17_da584ce20b	.jpeg	image/jpeg	312.93	/uploads/8_Rosupack_2024_17_da584ce20b.jpeg	\N	local	\N	/4/6	2024-07-02 11:59:21.646	2024-07-02 11:59:21.646	1	1
23	4 Rosupack 2024 (8).jpeg	\N	\N	1200	1600	{"large": {"ext": ".jpeg", "url": "/uploads/large_4_Rosupack_2024_8_906cca49bf.jpeg", "hash": "large_4_Rosupack_2024_8_906cca49bf", "mime": "image/jpeg", "name": "large_4 Rosupack 2024 (8).jpeg", "path": null, "size": 148.34, "width": 750, "height": 1000, "sizeInBytes": 148343}, "small": {"ext": ".jpeg", "url": "/uploads/small_4_Rosupack_2024_8_906cca49bf.jpeg", "hash": "small_4_Rosupack_2024_8_906cca49bf", "mime": "image/jpeg", "name": "small_4 Rosupack 2024 (8).jpeg", "path": null, "size": 43.52, "width": 375, "height": 500, "sizeInBytes": 43515}, "medium": {"ext": ".jpeg", "url": "/uploads/medium_4_Rosupack_2024_8_906cca49bf.jpeg", "hash": "medium_4_Rosupack_2024_8_906cca49bf", "mime": "image/jpeg", "name": "medium_4 Rosupack 2024 (8).jpeg", "path": null, "size": 89.95, "width": 563, "height": 750, "sizeInBytes": 89951}, "thumbnail": {"ext": ".jpeg", "url": "/uploads/thumbnail_4_Rosupack_2024_8_906cca49bf.jpeg", "hash": "thumbnail_4_Rosupack_2024_8_906cca49bf", "mime": "image/jpeg", "name": "thumbnail_4 Rosupack 2024 (8).jpeg", "path": null, "size": 5.68, "width": 117, "height": 156, "sizeInBytes": 5683}}	4_Rosupack_2024_8_906cca49bf	.jpeg	image/jpeg	319.39	/uploads/4_Rosupack_2024_8_906cca49bf.jpeg	\N	local	\N	/4/6	2024-07-02 11:59:21.796	2024-07-02 11:59:21.796	1	1
24	Благодарственное письмо АО Экспоцентр_001486.pdf	\N	\N	\N	\N	\N	Blagodarstvennoe_pismo_AO_Ekspoczentr_001486_6fe098d0e5	.pdf	application/pdf	431.09	/uploads/Blagodarstvennoe_pismo_AO_Ekspoczentr_001486_6fe098d0e5.pdf	\N	local	\N	/	2024-07-24 15:34:10.646	2024-07-24 15:34:10.646	2	2
25	4.jpeg	\N	\N	801	1096	{"large": {"ext": ".jpeg", "url": "/uploads/large_4_e80b9548b8.jpeg", "hash": "large_4_e80b9548b8", "mime": "image/jpeg", "name": "large_4.jpeg", "path": null, "size": 109, "width": 731, "height": 1000, "sizeInBytes": 109002}, "small": {"ext": ".jpeg", "url": "/uploads/small_4_e80b9548b8.jpeg", "hash": "small_4_e80b9548b8", "mime": "image/jpeg", "name": "small_4.jpeg", "path": null, "size": 34.38, "width": 365, "height": 500, "sizeInBytes": 34378}, "medium": {"ext": ".jpeg", "url": "/uploads/medium_4_e80b9548b8.jpeg", "hash": "medium_4_e80b9548b8", "mime": "image/jpeg", "name": "medium_4.jpeg", "path": null, "size": 67.91, "width": 548, "height": 750, "sizeInBytes": 67912}, "thumbnail": {"ext": ".jpeg", "url": "/uploads/thumbnail_4_e80b9548b8.jpeg", "hash": "thumbnail_4_e80b9548b8", "mime": "image/jpeg", "name": "thumbnail_4.jpeg", "path": null, "size": 5.33, "width": 114, "height": 156, "sizeInBytes": 5325}}	4_e80b9548b8	.jpeg	image/jpeg	120.42	/uploads/4_e80b9548b8.jpeg	\N	local	\N	/	2025-03-19 15:24:40.461	2025-03-19 15:24:40.461	2	2
26	1.jpeg	\N	\N	1280	960	{"large": {"ext": ".jpeg", "url": "/uploads/large_1_28a9c55476.jpeg", "hash": "large_1_28a9c55476", "mime": "image/jpeg", "name": "large_1.jpeg", "path": null, "size": 118.21, "width": 1000, "height": 750, "sizeInBytes": 118212}, "small": {"ext": ".jpeg", "url": "/uploads/small_1_28a9c55476.jpeg", "hash": "small_1_28a9c55476", "mime": "image/jpeg", "name": "small_1.jpeg", "path": null, "size": 36.58, "width": 500, "height": 375, "sizeInBytes": 36576}, "medium": {"ext": ".jpeg", "url": "/uploads/medium_1_28a9c55476.jpeg", "hash": "medium_1_28a9c55476", "mime": "image/jpeg", "name": "medium_1.jpeg", "path": null, "size": 73.84, "width": 750, "height": 563, "sizeInBytes": 73843}, "thumbnail": {"ext": ".jpeg", "url": "/uploads/thumbnail_1_28a9c55476.jpeg", "hash": "thumbnail_1_28a9c55476", "mime": "image/jpeg", "name": "thumbnail_1.jpeg", "path": null, "size": 7.99, "width": 208, "height": 156, "sizeInBytes": 7992}}	1_28a9c55476	.jpeg	image/jpeg	171.92	/uploads/1_28a9c55476.jpeg	\N	local	\N	/	2025-03-19 15:24:40.741	2025-03-19 15:24:40.741	2	2
27	2.jpeg	\N	\N	697	1280	{"large": {"ext": ".jpeg", "url": "/uploads/large_2_532840e915.jpeg", "hash": "large_2_532840e915", "mime": "image/jpeg", "name": "large_2.jpeg", "path": null, "size": 106.07, "width": 545, "height": 1000, "sizeInBytes": 106065}, "small": {"ext": ".jpeg", "url": "/uploads/small_2_532840e915.jpeg", "hash": "small_2_532840e915", "mime": "image/jpeg", "name": "small_2.jpeg", "path": null, "size": 33.07, "width": 272, "height": 500, "sizeInBytes": 33071}, "medium": {"ext": ".jpeg", "url": "/uploads/medium_2_532840e915.jpeg", "hash": "medium_2_532840e915", "mime": "image/jpeg", "name": "medium_2.jpeg", "path": null, "size": 65.47, "width": 408, "height": 750, "sizeInBytes": 65474}, "thumbnail": {"ext": ".jpeg", "url": "/uploads/thumbnail_2_532840e915.jpeg", "hash": "thumbnail_2_532840e915", "mime": "image/jpeg", "name": "thumbnail_2.jpeg", "path": null, "size": 4.71, "width": 85, "height": 156, "sizeInBytes": 4713}}	2_532840e915	.jpeg	image/jpeg	147.60	/uploads/2_532840e915.jpeg	\N	local	\N	/	2025-03-19 15:24:40.76	2025-03-19 15:24:40.76	2	2
31	8.jpeg	\N	\N	806	1077	{"large": {"ext": ".jpeg", "url": "/uploads/large_8_6acbb48873.jpeg", "hash": "large_8_6acbb48873", "mime": "image/jpeg", "name": "large_8.jpeg", "path": null, "size": 177.27, "width": 748, "height": 1000, "sizeInBytes": 177267}, "small": {"ext": ".jpeg", "url": "/uploads/small_8_6acbb48873.jpeg", "hash": "small_8_6acbb48873", "mime": "image/jpeg", "name": "small_8.jpeg", "path": null, "size": 53.18, "width": 374, "height": 500, "sizeInBytes": 53176}, "medium": {"ext": ".jpeg", "url": "/uploads/medium_8_6acbb48873.jpeg", "hash": "medium_8_6acbb48873", "mime": "image/jpeg", "name": "medium_8.jpeg", "path": null, "size": 107.74, "width": 561, "height": 750, "sizeInBytes": 107737}, "thumbnail": {"ext": ".jpeg", "url": "/uploads/thumbnail_8_6acbb48873.jpeg", "hash": "thumbnail_8_6acbb48873", "mime": "image/jpeg", "name": "thumbnail_8.jpeg", "path": null, "size": 6.96, "width": 117, "height": 156, "sizeInBytes": 6955}}	8_6acbb48873	.jpeg	image/jpeg	206.62	/uploads/8_6acbb48873.jpeg	\N	local	\N	/	2025-03-19 15:24:41.479	2025-03-19 15:24:41.479	2	2
32	7.jpeg	\N	\N	753	1215	{"large": {"ext": ".jpeg", "url": "/uploads/large_7_a561d24b8a.jpeg", "hash": "large_7_a561d24b8a", "mime": "image/jpeg", "name": "large_7.jpeg", "path": null, "size": 135.65, "width": 620, "height": 1000, "sizeInBytes": 135654}, "small": {"ext": ".jpeg", "url": "/uploads/small_7_a561d24b8a.jpeg", "hash": "small_7_a561d24b8a", "mime": "image/jpeg", "name": "small_7.jpeg", "path": null, "size": 41.47, "width": 310, "height": 500, "sizeInBytes": 41472}, "medium": {"ext": ".jpeg", "url": "/uploads/medium_7_a561d24b8a.jpeg", "hash": "medium_7_a561d24b8a", "mime": "image/jpeg", "name": "medium_7.jpeg", "path": null, "size": 83.22, "width": 465, "height": 750, "sizeInBytes": 83216}, "thumbnail": {"ext": ".jpeg", "url": "/uploads/thumbnail_7_a561d24b8a.jpeg", "hash": "thumbnail_7_a561d24b8a", "mime": "image/jpeg", "name": "thumbnail_7.jpeg", "path": null, "size": 5.95, "width": 97, "height": 156, "sizeInBytes": 5945}}	7_a561d24b8a	.jpeg	image/jpeg	192.91	/uploads/7_a561d24b8a.jpeg	\N	local	\N	/	2025-03-19 15:24:41.528	2025-03-19 15:24:41.528	2	2
28	3.jpeg	\N	\N	960	1280	{"large": {"ext": ".jpeg", "url": "/uploads/large_3_684fc787fe.jpeg", "hash": "large_3_684fc787fe", "mime": "image/jpeg", "name": "large_3.jpeg", "path": null, "size": 123.66, "width": 750, "height": 1000, "sizeInBytes": 123663}, "small": {"ext": ".jpeg", "url": "/uploads/small_3_684fc787fe.jpeg", "hash": "small_3_684fc787fe", "mime": "image/jpeg", "name": "small_3.jpeg", "path": null, "size": 40.9, "width": 375, "height": 500, "sizeInBytes": 40902}, "medium": {"ext": ".jpeg", "url": "/uploads/medium_3_684fc787fe.jpeg", "hash": "medium_3_684fc787fe", "mime": "image/jpeg", "name": "medium_3.jpeg", "path": null, "size": 79.19, "width": 563, "height": 750, "sizeInBytes": 79186}, "thumbnail": {"ext": ".jpeg", "url": "/uploads/thumbnail_3_684fc787fe.jpeg", "hash": "thumbnail_3_684fc787fe", "mime": "image/jpeg", "name": "thumbnail_3.jpeg", "path": null, "size": 6.23, "width": 117, "height": 156, "sizeInBytes": 6232}}	3_684fc787fe	.jpeg	image/jpeg	172.11	/uploads/3_684fc787fe.jpeg	\N	local	\N	/	2025-03-19 15:24:40.785	2025-03-19 15:24:40.785	2	2
29	6.jpeg	\N	\N	688	1209	{"large": {"ext": ".jpeg", "url": "/uploads/large_6_46a546c930.jpeg", "hash": "large_6_46a546c930", "mime": "image/jpeg", "name": "large_6.jpeg", "path": null, "size": 116.83, "width": 569, "height": 1000, "sizeInBytes": 116829}, "small": {"ext": ".jpeg", "url": "/uploads/small_6_46a546c930.jpeg", "hash": "small_6_46a546c930", "mime": "image/jpeg", "name": "small_6.jpeg", "path": null, "size": 35.63, "width": 285, "height": 500, "sizeInBytes": 35630}, "medium": {"ext": ".jpeg", "url": "/uploads/medium_6_46a546c930.jpeg", "hash": "medium_6_46a546c930", "mime": "image/jpeg", "name": "medium_6.jpeg", "path": null, "size": 71.5, "width": 427, "height": 750, "sizeInBytes": 71504}, "thumbnail": {"ext": ".jpeg", "url": "/uploads/thumbnail_6_46a546c930.jpeg", "hash": "thumbnail_6_46a546c930", "mime": "image/jpeg", "name": "thumbnail_6.jpeg", "path": null, "size": 5.18, "width": 89, "height": 156, "sizeInBytes": 5182}}	6_46a546c930	.jpeg	image/jpeg	161.13	/uploads/6_46a546c930.jpeg	\N	local	\N	/	2025-03-19 15:24:40.789	2025-03-19 15:24:40.789	2	2
30	5.jpeg	\N	\N	716	1103	{"large": {"ext": ".jpeg", "url": "/uploads/large_5_bc8e923f80.jpeg", "hash": "large_5_bc8e923f80", "mime": "image/jpeg", "name": "large_5.jpeg", "path": null, "size": 114.71, "width": 649, "height": 1000, "sizeInBytes": 114705}, "small": {"ext": ".jpeg", "url": "/uploads/small_5_bc8e923f80.jpeg", "hash": "small_5_bc8e923f80", "mime": "image/jpeg", "name": "small_5.jpeg", "path": null, "size": 34.47, "width": 325, "height": 500, "sizeInBytes": 34469}, "medium": {"ext": ".jpeg", "url": "/uploads/medium_5_bc8e923f80.jpeg", "hash": "medium_5_bc8e923f80", "mime": "image/jpeg", "name": "medium_5.jpeg", "path": null, "size": 69.2, "width": 487, "height": 750, "sizeInBytes": 69204}, "thumbnail": {"ext": ".jpeg", "url": "/uploads/thumbnail_5_bc8e923f80.jpeg", "hash": "thumbnail_5_bc8e923f80", "mime": "image/jpeg", "name": "thumbnail_5.jpeg", "path": null, "size": 5.16, "width": 102, "height": 156, "sizeInBytes": 5160}}	5_bc8e923f80	.jpeg	image/jpeg	139.71	/uploads/5_bc8e923f80.jpeg	\N	local	\N	/	2025-03-19 15:24:40.805	2025-03-19 15:24:40.805	2	2
33	4.jpeg	\N	\N	801	1096	{"large": {"ext": ".jpeg", "url": "/uploads/large_4_d3165d9391.jpeg", "hash": "large_4_d3165d9391", "mime": "image/jpeg", "name": "large_4.jpeg", "path": null, "size": 109, "width": 731, "height": 1000, "sizeInBytes": 109002}, "small": {"ext": ".jpeg", "url": "/uploads/small_4_d3165d9391.jpeg", "hash": "small_4_d3165d9391", "mime": "image/jpeg", "name": "small_4.jpeg", "path": null, "size": 34.38, "width": 365, "height": 500, "sizeInBytes": 34378}, "medium": {"ext": ".jpeg", "url": "/uploads/medium_4_d3165d9391.jpeg", "hash": "medium_4_d3165d9391", "mime": "image/jpeg", "name": "medium_4.jpeg", "path": null, "size": 67.91, "width": 548, "height": 750, "sizeInBytes": 67912}, "thumbnail": {"ext": ".jpeg", "url": "/uploads/thumbnail_4_d3165d9391.jpeg", "hash": "thumbnail_4_d3165d9391", "mime": "image/jpeg", "name": "thumbnail_4.jpeg", "path": null, "size": 5.33, "width": 114, "height": 156, "sizeInBytes": 5325}}	4_d3165d9391	.jpeg	image/jpeg	120.42	/uploads/4_d3165d9391.jpeg	\N	local	\N	/	2025-03-19 15:27:15.509	2025-03-19 15:27:15.509	2	2
34	1.jpeg	\N	\N	1280	960	{"large": {"ext": ".jpeg", "url": "/uploads/large_1_9ce1abd26f.jpeg", "hash": "large_1_9ce1abd26f", "mime": "image/jpeg", "name": "large_1.jpeg", "path": null, "size": 118.21, "width": 1000, "height": 750, "sizeInBytes": 118212}, "small": {"ext": ".jpeg", "url": "/uploads/small_1_9ce1abd26f.jpeg", "hash": "small_1_9ce1abd26f", "mime": "image/jpeg", "name": "small_1.jpeg", "path": null, "size": 36.58, "width": 500, "height": 375, "sizeInBytes": 36576}, "medium": {"ext": ".jpeg", "url": "/uploads/medium_1_9ce1abd26f.jpeg", "hash": "medium_1_9ce1abd26f", "mime": "image/jpeg", "name": "medium_1.jpeg", "path": null, "size": 73.84, "width": 750, "height": 563, "sizeInBytes": 73843}, "thumbnail": {"ext": ".jpeg", "url": "/uploads/thumbnail_1_9ce1abd26f.jpeg", "hash": "thumbnail_1_9ce1abd26f", "mime": "image/jpeg", "name": "thumbnail_1.jpeg", "path": null, "size": 7.99, "width": 208, "height": 156, "sizeInBytes": 7992}}	1_9ce1abd26f	.jpeg	image/jpeg	171.92	/uploads/1_9ce1abd26f.jpeg	\N	local	\N	/	2025-03-19 15:27:15.657	2025-03-19 15:27:15.657	2	2
35	2.jpeg	\N	\N	697	1280	{"large": {"ext": ".jpeg", "url": "/uploads/large_2_50fc8b6352.jpeg", "hash": "large_2_50fc8b6352", "mime": "image/jpeg", "name": "large_2.jpeg", "path": null, "size": 106.07, "width": 545, "height": 1000, "sizeInBytes": 106065}, "small": {"ext": ".jpeg", "url": "/uploads/small_2_50fc8b6352.jpeg", "hash": "small_2_50fc8b6352", "mime": "image/jpeg", "name": "small_2.jpeg", "path": null, "size": 33.07, "width": 272, "height": 500, "sizeInBytes": 33071}, "medium": {"ext": ".jpeg", "url": "/uploads/medium_2_50fc8b6352.jpeg", "hash": "medium_2_50fc8b6352", "mime": "image/jpeg", "name": "medium_2.jpeg", "path": null, "size": 65.47, "width": 408, "height": 750, "sizeInBytes": 65474}, "thumbnail": {"ext": ".jpeg", "url": "/uploads/thumbnail_2_50fc8b6352.jpeg", "hash": "thumbnail_2_50fc8b6352", "mime": "image/jpeg", "name": "thumbnail_2.jpeg", "path": null, "size": 4.71, "width": 85, "height": 156, "sizeInBytes": 4713}}	2_50fc8b6352	.jpeg	image/jpeg	147.60	/uploads/2_50fc8b6352.jpeg	\N	local	\N	/	2025-03-19 15:27:15.708	2025-03-19 15:27:15.708	2	2
36	8.jpeg	\N	\N	806	1077	{"large": {"ext": ".jpeg", "url": "/uploads/large_8_ded47e4ddb.jpeg", "hash": "large_8_ded47e4ddb", "mime": "image/jpeg", "name": "large_8.jpeg", "path": null, "size": 177.27, "width": 748, "height": 1000, "sizeInBytes": 177267}, "small": {"ext": ".jpeg", "url": "/uploads/small_8_ded47e4ddb.jpeg", "hash": "small_8_ded47e4ddb", "mime": "image/jpeg", "name": "small_8.jpeg", "path": null, "size": 53.18, "width": 374, "height": 500, "sizeInBytes": 53176}, "medium": {"ext": ".jpeg", "url": "/uploads/medium_8_ded47e4ddb.jpeg", "hash": "medium_8_ded47e4ddb", "mime": "image/jpeg", "name": "medium_8.jpeg", "path": null, "size": 107.74, "width": 561, "height": 750, "sizeInBytes": 107737}, "thumbnail": {"ext": ".jpeg", "url": "/uploads/thumbnail_8_ded47e4ddb.jpeg", "hash": "thumbnail_8_ded47e4ddb", "mime": "image/jpeg", "name": "thumbnail_8.jpeg", "path": null, "size": 6.96, "width": 117, "height": 156, "sizeInBytes": 6955}}	8_ded47e4ddb	.jpeg	image/jpeg	206.62	/uploads/8_ded47e4ddb.jpeg	\N	local	\N	/	2025-03-19 15:27:15.742	2025-03-19 15:27:15.742	2	2
37	3.jpeg	\N	\N	960	1280	{"large": {"ext": ".jpeg", "url": "/uploads/large_3_3d8a5107b6.jpeg", "hash": "large_3_3d8a5107b6", "mime": "image/jpeg", "name": "large_3.jpeg", "path": null, "size": 123.66, "width": 750, "height": 1000, "sizeInBytes": 123663}, "small": {"ext": ".jpeg", "url": "/uploads/small_3_3d8a5107b6.jpeg", "hash": "small_3_3d8a5107b6", "mime": "image/jpeg", "name": "small_3.jpeg", "path": null, "size": 40.9, "width": 375, "height": 500, "sizeInBytes": 40902}, "medium": {"ext": ".jpeg", "url": "/uploads/medium_3_3d8a5107b6.jpeg", "hash": "medium_3_3d8a5107b6", "mime": "image/jpeg", "name": "medium_3.jpeg", "path": null, "size": 79.19, "width": 563, "height": 750, "sizeInBytes": 79186}, "thumbnail": {"ext": ".jpeg", "url": "/uploads/thumbnail_3_3d8a5107b6.jpeg", "hash": "thumbnail_3_3d8a5107b6", "mime": "image/jpeg", "name": "thumbnail_3.jpeg", "path": null, "size": 6.23, "width": 117, "height": 156, "sizeInBytes": 6232}}	3_3d8a5107b6	.jpeg	image/jpeg	172.11	/uploads/3_3d8a5107b6.jpeg	\N	local	\N	/	2025-03-19 15:27:15.757	2025-03-19 15:27:15.757	2	2
38	5.jpeg	\N	\N	716	1103	{"large": {"ext": ".jpeg", "url": "/uploads/large_5_91448062a0.jpeg", "hash": "large_5_91448062a0", "mime": "image/jpeg", "name": "large_5.jpeg", "path": null, "size": 114.71, "width": 649, "height": 1000, "sizeInBytes": 114705}, "small": {"ext": ".jpeg", "url": "/uploads/small_5_91448062a0.jpeg", "hash": "small_5_91448062a0", "mime": "image/jpeg", "name": "small_5.jpeg", "path": null, "size": 34.47, "width": 325, "height": 500, "sizeInBytes": 34469}, "medium": {"ext": ".jpeg", "url": "/uploads/medium_5_91448062a0.jpeg", "hash": "medium_5_91448062a0", "mime": "image/jpeg", "name": "medium_5.jpeg", "path": null, "size": 69.2, "width": 487, "height": 750, "sizeInBytes": 69204}, "thumbnail": {"ext": ".jpeg", "url": "/uploads/thumbnail_5_91448062a0.jpeg", "hash": "thumbnail_5_91448062a0", "mime": "image/jpeg", "name": "thumbnail_5.jpeg", "path": null, "size": 5.16, "width": 102, "height": 156, "sizeInBytes": 5160}}	5_91448062a0	.jpeg	image/jpeg	139.71	/uploads/5_91448062a0.jpeg	\N	local	\N	/	2025-03-19 15:27:15.823	2025-03-19 15:27:15.823	2	2
39	6.jpeg	\N	\N	688	1209	{"large": {"ext": ".jpeg", "url": "/uploads/large_6_82ff0fff77.jpeg", "hash": "large_6_82ff0fff77", "mime": "image/jpeg", "name": "large_6.jpeg", "path": null, "size": 116.83, "width": 569, "height": 1000, "sizeInBytes": 116829}, "small": {"ext": ".jpeg", "url": "/uploads/small_6_82ff0fff77.jpeg", "hash": "small_6_82ff0fff77", "mime": "image/jpeg", "name": "small_6.jpeg", "path": null, "size": 35.63, "width": 285, "height": 500, "sizeInBytes": 35630}, "medium": {"ext": ".jpeg", "url": "/uploads/medium_6_82ff0fff77.jpeg", "hash": "medium_6_82ff0fff77", "mime": "image/jpeg", "name": "medium_6.jpeg", "path": null, "size": 71.5, "width": 427, "height": 750, "sizeInBytes": 71504}, "thumbnail": {"ext": ".jpeg", "url": "/uploads/thumbnail_6_82ff0fff77.jpeg", "hash": "thumbnail_6_82ff0fff77", "mime": "image/jpeg", "name": "thumbnail_6.jpeg", "path": null, "size": 5.18, "width": 89, "height": 156, "sizeInBytes": 5182}}	6_82ff0fff77	.jpeg	image/jpeg	161.13	/uploads/6_82ff0fff77.jpeg	\N	local	\N	/	2025-03-19 15:27:16.333	2025-03-19 15:27:16.333	2	2
40	7.jpeg	\N	\N	753	1215	{"large": {"ext": ".jpeg", "url": "/uploads/large_7_ea6a0d2354.jpeg", "hash": "large_7_ea6a0d2354", "mime": "image/jpeg", "name": "large_7.jpeg", "path": null, "size": 135.65, "width": 620, "height": 1000, "sizeInBytes": 135654}, "small": {"ext": ".jpeg", "url": "/uploads/small_7_ea6a0d2354.jpeg", "hash": "small_7_ea6a0d2354", "mime": "image/jpeg", "name": "small_7.jpeg", "path": null, "size": 41.47, "width": 310, "height": 500, "sizeInBytes": 41472}, "medium": {"ext": ".jpeg", "url": "/uploads/medium_7_ea6a0d2354.jpeg", "hash": "medium_7_ea6a0d2354", "mime": "image/jpeg", "name": "medium_7.jpeg", "path": null, "size": 83.22, "width": 465, "height": 750, "sizeInBytes": 83216}, "thumbnail": {"ext": ".jpeg", "url": "/uploads/thumbnail_7_ea6a0d2354.jpeg", "hash": "thumbnail_7_ea6a0d2354", "mime": "image/jpeg", "name": "thumbnail_7.jpeg", "path": null, "size": 5.95, "width": 97, "height": 156, "sizeInBytes": 5945}}	7_ea6a0d2354	.jpeg	image/jpeg	192.91	/uploads/7_ea6a0d2354.jpeg	\N	local	\N	/	2025-03-19 15:27:16.517	2025-03-19 15:27:16.517	2	2
41	1.jpeg	\N	\N	1280	960	{"large": {"ext": ".jpeg", "url": "/uploads/large_1_79cabb3151.jpeg", "hash": "large_1_79cabb3151", "mime": "image/jpeg", "name": "large_1.jpeg", "path": null, "size": 118.21, "width": 1000, "height": 750, "sizeInBytes": 118212}, "small": {"ext": ".jpeg", "url": "/uploads/small_1_79cabb3151.jpeg", "hash": "small_1_79cabb3151", "mime": "image/jpeg", "name": "small_1.jpeg", "path": null, "size": 36.58, "width": 500, "height": 375, "sizeInBytes": 36576}, "medium": {"ext": ".jpeg", "url": "/uploads/medium_1_79cabb3151.jpeg", "hash": "medium_1_79cabb3151", "mime": "image/jpeg", "name": "medium_1.jpeg", "path": null, "size": 73.84, "width": 750, "height": 563, "sizeInBytes": 73843}, "thumbnail": {"ext": ".jpeg", "url": "/uploads/thumbnail_1_79cabb3151.jpeg", "hash": "thumbnail_1_79cabb3151", "mime": "image/jpeg", "name": "thumbnail_1.jpeg", "path": null, "size": 7.99, "width": 208, "height": 156, "sizeInBytes": 7992}}	1_79cabb3151	.jpeg	image/jpeg	171.92	/uploads/1_79cabb3151.jpeg	\N	local	\N	/	2025-03-19 15:32:50.905	2025-03-19 15:32:50.905	2	2
42	1.jpeg	\N	\N	1280	960	{"large": {"ext": ".jpeg", "url": "/uploads/large_1_073ed6d0e1.jpeg", "hash": "large_1_073ed6d0e1", "mime": "image/jpeg", "name": "large_1.jpeg", "path": null, "size": 118.21, "width": 1000, "height": 750, "sizeInBytes": 118212}, "small": {"ext": ".jpeg", "url": "/uploads/small_1_073ed6d0e1.jpeg", "hash": "small_1_073ed6d0e1", "mime": "image/jpeg", "name": "small_1.jpeg", "path": null, "size": 36.58, "width": 500, "height": 375, "sizeInBytes": 36576}, "medium": {"ext": ".jpeg", "url": "/uploads/medium_1_073ed6d0e1.jpeg", "hash": "medium_1_073ed6d0e1", "mime": "image/jpeg", "name": "medium_1.jpeg", "path": null, "size": 73.84, "width": 750, "height": 563, "sizeInBytes": 73843}, "thumbnail": {"ext": ".jpeg", "url": "/uploads/thumbnail_1_073ed6d0e1.jpeg", "hash": "thumbnail_1_073ed6d0e1", "mime": "image/jpeg", "name": "thumbnail_1.jpeg", "path": null, "size": 7.99, "width": 208, "height": 156, "sizeInBytes": 7992}}	1_073ed6d0e1	.jpeg	image/jpeg	171.92	/uploads/1_073ed6d0e1.jpeg	\N	local	\N	/	2025-03-19 15:35:47.942	2025-03-19 15:35:47.942	2	2
43	4.jpeg	\N	\N	801	1096	{"large": {"ext": ".jpeg", "url": "/uploads/large_4_0010778055.jpeg", "hash": "large_4_0010778055", "mime": "image/jpeg", "name": "large_4.jpeg", "path": null, "size": 109, "width": 731, "height": 1000, "sizeInBytes": 109002}, "small": {"ext": ".jpeg", "url": "/uploads/small_4_0010778055.jpeg", "hash": "small_4_0010778055", "mime": "image/jpeg", "name": "small_4.jpeg", "path": null, "size": 34.38, "width": 365, "height": 500, "sizeInBytes": 34378}, "medium": {"ext": ".jpeg", "url": "/uploads/medium_4_0010778055.jpeg", "hash": "medium_4_0010778055", "mime": "image/jpeg", "name": "medium_4.jpeg", "path": null, "size": 67.91, "width": 548, "height": 750, "sizeInBytes": 67912}, "thumbnail": {"ext": ".jpeg", "url": "/uploads/thumbnail_4_0010778055.jpeg", "hash": "thumbnail_4_0010778055", "mime": "image/jpeg", "name": "thumbnail_4.jpeg", "path": null, "size": 5.33, "width": 114, "height": 156, "sizeInBytes": 5325}}	4_0010778055	.jpeg	image/jpeg	120.42	/uploads/4_0010778055.jpeg	\N	local	\N	/	2025-03-19 15:36:35.024	2025-03-19 15:36:35.024	2	2
44	8.jpeg	\N	\N	806	1077	{"large": {"ext": ".jpeg", "url": "/uploads/large_8_58d96e58e1.jpeg", "hash": "large_8_58d96e58e1", "mime": "image/jpeg", "name": "large_8.jpeg", "path": null, "size": 177.27, "width": 748, "height": 1000, "sizeInBytes": 177267}, "small": {"ext": ".jpeg", "url": "/uploads/small_8_58d96e58e1.jpeg", "hash": "small_8_58d96e58e1", "mime": "image/jpeg", "name": "small_8.jpeg", "path": null, "size": 53.18, "width": 374, "height": 500, "sizeInBytes": 53176}, "medium": {"ext": ".jpeg", "url": "/uploads/medium_8_58d96e58e1.jpeg", "hash": "medium_8_58d96e58e1", "mime": "image/jpeg", "name": "medium_8.jpeg", "path": null, "size": 107.74, "width": 561, "height": 750, "sizeInBytes": 107737}, "thumbnail": {"ext": ".jpeg", "url": "/uploads/thumbnail_8_58d96e58e1.jpeg", "hash": "thumbnail_8_58d96e58e1", "mime": "image/jpeg", "name": "thumbnail_8.jpeg", "path": null, "size": 6.96, "width": 117, "height": 156, "sizeInBytes": 6955}}	8_58d96e58e1	.jpeg	image/jpeg	206.62	/uploads/8_58d96e58e1.jpeg	\N	local	\N	/	2025-03-19 15:36:35.419	2025-03-19 15:36:35.419	2	2
45	6.jpeg	\N	\N	688	1209	{"large": {"ext": ".jpeg", "url": "/uploads/large_6_0f830348d5.jpeg", "hash": "large_6_0f830348d5", "mime": "image/jpeg", "name": "large_6.jpeg", "path": null, "size": 116.83, "width": 569, "height": 1000, "sizeInBytes": 116829}, "small": {"ext": ".jpeg", "url": "/uploads/small_6_0f830348d5.jpeg", "hash": "small_6_0f830348d5", "mime": "image/jpeg", "name": "small_6.jpeg", "path": null, "size": 35.63, "width": 285, "height": 500, "sizeInBytes": 35630}, "medium": {"ext": ".jpeg", "url": "/uploads/medium_6_0f830348d5.jpeg", "hash": "medium_6_0f830348d5", "mime": "image/jpeg", "name": "medium_6.jpeg", "path": null, "size": 71.5, "width": 427, "height": 750, "sizeInBytes": 71504}, "thumbnail": {"ext": ".jpeg", "url": "/uploads/thumbnail_6_0f830348d5.jpeg", "hash": "thumbnail_6_0f830348d5", "mime": "image/jpeg", "name": "thumbnail_6.jpeg", "path": null, "size": 5.18, "width": 89, "height": 156, "sizeInBytes": 5182}}	6_0f830348d5	.jpeg	image/jpeg	161.13	/uploads/6_0f830348d5.jpeg	\N	local	\N	/	2025-03-19 15:36:35.425	2025-03-19 15:36:35.425	2	2
46	3.jpeg	\N	\N	960	1280	{"large": {"ext": ".jpeg", "url": "/uploads/large_3_c52d2f0212.jpeg", "hash": "large_3_c52d2f0212", "mime": "image/jpeg", "name": "large_3.jpeg", "path": null, "size": 123.66, "width": 750, "height": 1000, "sizeInBytes": 123663}, "small": {"ext": ".jpeg", "url": "/uploads/small_3_c52d2f0212.jpeg", "hash": "small_3_c52d2f0212", "mime": "image/jpeg", "name": "small_3.jpeg", "path": null, "size": 40.9, "width": 375, "height": 500, "sizeInBytes": 40902}, "medium": {"ext": ".jpeg", "url": "/uploads/medium_3_c52d2f0212.jpeg", "hash": "medium_3_c52d2f0212", "mime": "image/jpeg", "name": "medium_3.jpeg", "path": null, "size": 79.19, "width": 563, "height": 750, "sizeInBytes": 79186}, "thumbnail": {"ext": ".jpeg", "url": "/uploads/thumbnail_3_c52d2f0212.jpeg", "hash": "thumbnail_3_c52d2f0212", "mime": "image/jpeg", "name": "thumbnail_3.jpeg", "path": null, "size": 6.23, "width": 117, "height": 156, "sizeInBytes": 6232}}	3_c52d2f0212	.jpeg	image/jpeg	172.11	/uploads/3_c52d2f0212.jpeg	\N	local	\N	/	2025-03-19 15:36:35.509	2025-03-19 15:36:35.509	2	2
47	5.jpeg	\N	\N	716	1103	{"large": {"ext": ".jpeg", "url": "/uploads/large_5_6585c9738d.jpeg", "hash": "large_5_6585c9738d", "mime": "image/jpeg", "name": "large_5.jpeg", "path": null, "size": 114.71, "width": 649, "height": 1000, "sizeInBytes": 114705}, "small": {"ext": ".jpeg", "url": "/uploads/small_5_6585c9738d.jpeg", "hash": "small_5_6585c9738d", "mime": "image/jpeg", "name": "small_5.jpeg", "path": null, "size": 34.47, "width": 325, "height": 500, "sizeInBytes": 34469}, "medium": {"ext": ".jpeg", "url": "/uploads/medium_5_6585c9738d.jpeg", "hash": "medium_5_6585c9738d", "mime": "image/jpeg", "name": "medium_5.jpeg", "path": null, "size": 69.2, "width": 487, "height": 750, "sizeInBytes": 69204}, "thumbnail": {"ext": ".jpeg", "url": "/uploads/thumbnail_5_6585c9738d.jpeg", "hash": "thumbnail_5_6585c9738d", "mime": "image/jpeg", "name": "thumbnail_5.jpeg", "path": null, "size": 5.16, "width": 102, "height": 156, "sizeInBytes": 5160}}	5_6585c9738d	.jpeg	image/jpeg	139.71	/uploads/5_6585c9738d.jpeg	\N	local	\N	/	2025-03-19 15:36:35.63	2025-03-19 15:36:35.63	2	2
48	7.jpeg	\N	\N	753	1215	{"large": {"ext": ".jpeg", "url": "/uploads/large_7_62a9ce8df3.jpeg", "hash": "large_7_62a9ce8df3", "mime": "image/jpeg", "name": "large_7.jpeg", "path": null, "size": 135.65, "width": 620, "height": 1000, "sizeInBytes": 135654}, "small": {"ext": ".jpeg", "url": "/uploads/small_7_62a9ce8df3.jpeg", "hash": "small_7_62a9ce8df3", "mime": "image/jpeg", "name": "small_7.jpeg", "path": null, "size": 41.47, "width": 310, "height": 500, "sizeInBytes": 41472}, "medium": {"ext": ".jpeg", "url": "/uploads/medium_7_62a9ce8df3.jpeg", "hash": "medium_7_62a9ce8df3", "mime": "image/jpeg", "name": "medium_7.jpeg", "path": null, "size": 83.22, "width": 465, "height": 750, "sizeInBytes": 83216}, "thumbnail": {"ext": ".jpeg", "url": "/uploads/thumbnail_7_62a9ce8df3.jpeg", "hash": "thumbnail_7_62a9ce8df3", "mime": "image/jpeg", "name": "thumbnail_7.jpeg", "path": null, "size": 5.95, "width": 97, "height": 156, "sizeInBytes": 5945}}	7_62a9ce8df3	.jpeg	image/jpeg	192.91	/uploads/7_62a9ce8df3.jpeg	\N	local	\N	/	2025-03-19 15:36:35.67	2025-03-19 15:36:35.67	2	2
49	2.jpeg	\N	\N	697	1280	{"large": {"ext": ".jpeg", "url": "/uploads/large_2_52bda4955b.jpeg", "hash": "large_2_52bda4955b", "mime": "image/jpeg", "name": "large_2.jpeg", "path": null, "size": 106.07, "width": 545, "height": 1000, "sizeInBytes": 106065}, "small": {"ext": ".jpeg", "url": "/uploads/small_2_52bda4955b.jpeg", "hash": "small_2_52bda4955b", "mime": "image/jpeg", "name": "small_2.jpeg", "path": null, "size": 33.07, "width": 272, "height": 500, "sizeInBytes": 33071}, "medium": {"ext": ".jpeg", "url": "/uploads/medium_2_52bda4955b.jpeg", "hash": "medium_2_52bda4955b", "mime": "image/jpeg", "name": "medium_2.jpeg", "path": null, "size": 65.47, "width": 408, "height": 750, "sizeInBytes": 65474}, "thumbnail": {"ext": ".jpeg", "url": "/uploads/thumbnail_2_52bda4955b.jpeg", "hash": "thumbnail_2_52bda4955b", "mime": "image/jpeg", "name": "thumbnail_2.jpeg", "path": null, "size": 4.71, "width": 85, "height": 156, "sizeInBytes": 4713}}	2_52bda4955b	.jpeg	image/jpeg	147.60	/uploads/2_52bda4955b.jpeg	\N	local	\N	/	2025-03-19 15:36:35.916	2025-03-19 15:36:35.916	2	2
\.


--
-- Data for Name: files_folder_links; Type: TABLE DATA; Schema: public; Owner: fractal
--

COPY public.files_folder_links (id, file_id, folder_id, file_order) FROM stdin;
7	5	3	\N
8	6	3	\N
9	7	3	\N
10	8	3	\N
11	2	2	\N
12	3	2	\N
13	4	2	\N
14	9	2	1
17	13	5	1
18	14	5	2
19	15	5	3
20	16	5	4
21	17	5	5
22	18	5	6
23	19	6	1
24	20	6	2
25	21	6	3
26	22	6	4
27	23	6	5
\.


--
-- Data for Name: files_related_morphs; Type: TABLE DATA; Schema: public; Owner: fractal
--

COPY public.files_related_morphs (id, file_id, related_id, related_type, field, "order") FROM stdin;
1343	42	22	main.swiper	banner	1
1345	43	22	main.swiper	gallery	1
1346	44	22	main.swiper	gallery	2
1347	45	22	main.swiper	gallery	3
1348	46	22	main.swiper	gallery	4
1349	47	22	main.swiper	gallery	5
1350	48	22	main.swiper	gallery	6
1351	49	22	main.swiper	gallery	7
1352	16	9	main.swiper	banner	1
1358	16	9	main.swiper	gallery	1
1359	17	9	main.swiper	gallery	2
1360	14	9	main.swiper	gallery	3
1361	18	9	main.swiper	gallery	4
1362	13	9	main.swiper	gallery	5
1363	15	9	main.swiper	gallery	6
1365	2	3	main.letters	banner	1
1366	4	1	main.letters	banner	1
1369	5	3	main.letters	file	1
1370	7	1	main.letters	file	1
48	4	2	main.swiper	banner	1
49	3	6	main.swiper	banner	1
50	2	7	main.swiper	banner	1
51	4	8	main.swiper	banner	1
56	4	13	main.swiper	banner	1
57	3	14	main.swiper	banner	1
58	2	15	main.swiper	banner	1
59	4	16	main.swiper	banner	1
216	1	5	main.gallery	img	1
217	1	6	main.gallery	img	1
70	3	18	main.swiper	banner	1
71	4	19	main.swiper	banner	1
72	2	20	main.swiper	banner	1
73	4	17	main.swiper	banner	1
74	6	2	main.letters	File	1
75	5	3	main.letters	File	1
76	8	4	main.letters	File	1
77	7	1	main.letters	File	1
218	1	8	main.gallery	img	1
219	1	7	main.gallery	img	1
224	1	1	main.swiper	k	1
225	1	5	main.swiper	k	1
142	1	1	main.gallery	img	1
143	1	2	main.gallery	img	1
144	1	3	main.gallery	img	1
145	1	4	main.gallery	img	1
150	1	9	main.swiper	k	1
151	1	12	main.swiper	k	1
152	1	10	main.swiper	k	1
153	1	11	main.swiper	k	1
1314	41	21	main.swiper	banner	1
1316	19	3	main.swiper	banner	1
1317	33	21	main.swiper	gallery	1
1318	35	21	main.swiper	gallery	2
226	1	3	main.swiper	k	1
227	1	4	main.swiper	k	1
1319	37	21	main.swiper	gallery	3
1320	36	21	main.swiper	gallery	4
1321	38	21	main.swiper	gallery	5
1322	39	21	main.swiper	gallery	6
1323	40	21	main.swiper	gallery	7
1330	19	3	main.swiper	gallery	1
1331	23	3	main.swiper	gallery	2
1332	20	3	main.swiper	gallery	3
1333	22	3	main.swiper	gallery	4
1334	21	3	main.swiper	gallery	5
1335	3	8	main.letters	banner	1
1337	2	6	main.letters	banner	1
1338	6	8	main.letters	file	1
1340	5	6	main.letters	file	1
1344	19	10	main.swiper	banner	1
1353	19	10	main.swiper	gallery	1
1354	23	10	main.swiper	gallery	2
1355	20	10	main.swiper	gallery	3
1356	22	10	main.swiper	gallery	4
1357	21	10	main.swiper	gallery	5
1364	3	9	main.letters	banner	1
1367	9	10	main.letters	banner	1
1368	6	9	main.letters	file	1
1371	8	10	main.letters	file	1
1315	16	1	main.swiper	banner	1
1324	16	1	main.swiper	gallery	1
1325	17	1	main.swiper	gallery	2
1326	14	1	main.swiper	gallery	3
1327	18	1	main.swiper	gallery	4
1328	13	1	main.swiper	gallery	5
1329	15	1	main.swiper	gallery	6
1336	4	5	main.letters	banner	1
1339	7	5	main.letters	file	1
1341	9	7	main.letters	banner	1
1342	8	7	main.letters	file	1
\.


--
-- Data for Name: i18n_locale; Type: TABLE DATA; Schema: public; Owner: fractal
--

COPY public.i18n_locale (id, name, code, created_at, updated_at, created_by_id, updated_by_id) FROM stdin;
2	Russian (ru)	ru	2024-06-24 11:25:14.341	2024-06-24 11:25:14.341	1	1
1	English (en)	en	2024-06-22 11:32:31.051	2024-07-25 10:45:41.278	\N	1
\.


--
-- Data for Name: mains; Type: TABLE DATA; Schema: public; Owner: fractal
--

COPY public.mains (id, created_at, updated_at, published_at, created_by_id, updated_by_id, locale) FROM stdin;
1	2024-06-23 16:49:07.033	2025-03-26 07:26:49.028	2024-06-23 16:49:27.807	1	2	en
2	2024-06-24 11:26:47.426	2025-03-26 07:26:59.91	2024-06-24 11:26:49.508	1	2	ru
\.


--
-- Data for Name: mains_components; Type: TABLE DATA; Schema: public; Owner: fractal
--

COPY public.mains_components (id, entity_id, component_id, component_type, field, "order") FROM stdin;
456	2	22	main.swiper	Projects	2
37	2	10	main.swiper	Projects	3
36	2	9	main.swiper	Projects	4
64	2	1	main.letters	Letters	1
417	2	9	main.letters	Letters	2
71	2	3	main.letters	Letters	3
426	2	10	main.letters	Letters	4
449	1	21	main.swiper	Projects	2
5	1	3	main.swiper	Projects	3
1	1	1	main.swiper	Projects	4
130	1	5	main.letters	Letters	1
409	1	8	main.letters	Letters	2
132	1	6	main.letters	Letters	3
133	1	7	main.letters	Letters	4
\.


--
-- Data for Name: mains_localizations_links; Type: TABLE DATA; Schema: public; Owner: fractal
--

COPY public.mains_localizations_links (id, main_id, inv_main_id, main_order) FROM stdin;
1	2	1	1
2	1	2	1
\.


--
-- Data for Name: strapi_api_token_permissions; Type: TABLE DATA; Schema: public; Owner: fractal
--

COPY public.strapi_api_token_permissions (id, action, created_at, updated_at, created_by_id, updated_by_id) FROM stdin;
\.


--
-- Data for Name: strapi_api_token_permissions_token_links; Type: TABLE DATA; Schema: public; Owner: fractal
--

COPY public.strapi_api_token_permissions_token_links (id, api_token_permission_id, api_token_id, api_token_permission_order) FROM stdin;
\.


--
-- Data for Name: strapi_api_tokens; Type: TABLE DATA; Schema: public; Owner: fractal
--

COPY public.strapi_api_tokens (id, name, description, type, access_key, last_used_at, expires_at, lifespan, created_at, updated_at, created_by_id, updated_by_id) FROM stdin;
\.


--
-- Data for Name: strapi_core_store_settings; Type: TABLE DATA; Schema: public; Owner: fractal
--

COPY public.strapi_core_store_settings (id, key, value, type, environment, tag) FROM stdin;
2	plugin_content_manager_configuration_content_types::admin::user	{"settings":{"bulkable":true,"filterable":true,"searchable":true,"pageSize":10,"mainField":"firstname","defaultSortBy":"firstname","defaultSortOrder":"ASC"},"metadatas":{"id":{"edit":{},"list":{"label":"id","searchable":true,"sortable":true}},"firstname":{"edit":{"label":"firstname","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"firstname","searchable":true,"sortable":true}},"lastname":{"edit":{"label":"lastname","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"lastname","searchable":true,"sortable":true}},"username":{"edit":{"label":"username","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"username","searchable":true,"sortable":true}},"email":{"edit":{"label":"email","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"email","searchable":true,"sortable":true}},"password":{"edit":{"label":"password","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"password","searchable":true,"sortable":true}},"resetPasswordToken":{"edit":{"label":"resetPasswordToken","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"resetPasswordToken","searchable":true,"sortable":true}},"registrationToken":{"edit":{"label":"registrationToken","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"registrationToken","searchable":true,"sortable":true}},"isActive":{"edit":{"label":"isActive","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"isActive","searchable":true,"sortable":true}},"roles":{"edit":{"label":"roles","description":"","placeholder":"","visible":true,"editable":true,"mainField":"name"},"list":{"label":"roles","searchable":false,"sortable":false}},"blocked":{"edit":{"label":"blocked","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"blocked","searchable":true,"sortable":true}},"preferedLanguage":{"edit":{"label":"preferedLanguage","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"preferedLanguage","searchable":true,"sortable":true}},"createdAt":{"edit":{"label":"createdAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"createdAt","searchable":true,"sortable":true}},"updatedAt":{"edit":{"label":"updatedAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"updatedAt","searchable":true,"sortable":true}},"createdBy":{"edit":{"label":"createdBy","description":"","placeholder":"","visible":false,"editable":true,"mainField":"firstname"},"list":{"label":"createdBy","searchable":true,"sortable":true}},"updatedBy":{"edit":{"label":"updatedBy","description":"","placeholder":"","visible":false,"editable":true,"mainField":"firstname"},"list":{"label":"updatedBy","searchable":true,"sortable":true}}},"layouts":{"list":["id","firstname","lastname","username"],"edit":[[{"name":"firstname","size":6},{"name":"lastname","size":6}],[{"name":"username","size":6},{"name":"email","size":6}],[{"name":"password","size":6},{"name":"isActive","size":4}],[{"name":"roles","size":6},{"name":"blocked","size":4}],[{"name":"preferedLanguage","size":6}]]},"uid":"admin::user"}	object	\N	\N
3	plugin_content_manager_configuration_content_types::admin::role	{"settings":{"bulkable":true,"filterable":true,"searchable":true,"pageSize":10,"mainField":"name","defaultSortBy":"name","defaultSortOrder":"ASC"},"metadatas":{"id":{"edit":{},"list":{"label":"id","searchable":true,"sortable":true}},"name":{"edit":{"label":"name","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"name","searchable":true,"sortable":true}},"code":{"edit":{"label":"code","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"code","searchable":true,"sortable":true}},"description":{"edit":{"label":"description","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"description","searchable":true,"sortable":true}},"users":{"edit":{"label":"users","description":"","placeholder":"","visible":true,"editable":true,"mainField":"firstname"},"list":{"label":"users","searchable":false,"sortable":false}},"permissions":{"edit":{"label":"permissions","description":"","placeholder":"","visible":true,"editable":true,"mainField":"action"},"list":{"label":"permissions","searchable":false,"sortable":false}},"createdAt":{"edit":{"label":"createdAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"createdAt","searchable":true,"sortable":true}},"updatedAt":{"edit":{"label":"updatedAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"updatedAt","searchable":true,"sortable":true}},"createdBy":{"edit":{"label":"createdBy","description":"","placeholder":"","visible":false,"editable":true,"mainField":"firstname"},"list":{"label":"createdBy","searchable":true,"sortable":true}},"updatedBy":{"edit":{"label":"updatedBy","description":"","placeholder":"","visible":false,"editable":true,"mainField":"firstname"},"list":{"label":"updatedBy","searchable":true,"sortable":true}}},"layouts":{"list":["id","name","code","description"],"edit":[[{"name":"name","size":6},{"name":"code","size":6}],[{"name":"description","size":6},{"name":"users","size":6}],[{"name":"permissions","size":6}]]},"uid":"admin::role"}	object	\N	\N
4	plugin_content_manager_configuration_content_types::admin::api-token	{"settings":{"bulkable":true,"filterable":true,"searchable":true,"pageSize":10,"mainField":"name","defaultSortBy":"name","defaultSortOrder":"ASC"},"metadatas":{"id":{"edit":{},"list":{"label":"id","searchable":true,"sortable":true}},"name":{"edit":{"label":"name","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"name","searchable":true,"sortable":true}},"description":{"edit":{"label":"description","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"description","searchable":true,"sortable":true}},"type":{"edit":{"label":"type","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"type","searchable":true,"sortable":true}},"accessKey":{"edit":{"label":"accessKey","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"accessKey","searchable":true,"sortable":true}},"lastUsedAt":{"edit":{"label":"lastUsedAt","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"lastUsedAt","searchable":true,"sortable":true}},"permissions":{"edit":{"label":"permissions","description":"","placeholder":"","visible":true,"editable":true,"mainField":"action"},"list":{"label":"permissions","searchable":false,"sortable":false}},"expiresAt":{"edit":{"label":"expiresAt","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"expiresAt","searchable":true,"sortable":true}},"lifespan":{"edit":{"label":"lifespan","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"lifespan","searchable":true,"sortable":true}},"createdAt":{"edit":{"label":"createdAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"createdAt","searchable":true,"sortable":true}},"updatedAt":{"edit":{"label":"updatedAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"updatedAt","searchable":true,"sortable":true}},"createdBy":{"edit":{"label":"createdBy","description":"","placeholder":"","visible":false,"editable":true,"mainField":"firstname"},"list":{"label":"createdBy","searchable":true,"sortable":true}},"updatedBy":{"edit":{"label":"updatedBy","description":"","placeholder":"","visible":false,"editable":true,"mainField":"firstname"},"list":{"label":"updatedBy","searchable":true,"sortable":true}}},"layouts":{"list":["id","name","description","type"],"edit":[[{"name":"name","size":6},{"name":"description","size":6}],[{"name":"type","size":6},{"name":"accessKey","size":6}],[{"name":"lastUsedAt","size":6},{"name":"permissions","size":6}],[{"name":"expiresAt","size":6},{"name":"lifespan","size":4}]]},"uid":"admin::api-token"}	object	\N	\N
5	plugin_content_manager_configuration_content_types::admin::permission	{"settings":{"bulkable":true,"filterable":true,"searchable":true,"pageSize":10,"mainField":"action","defaultSortBy":"action","defaultSortOrder":"ASC"},"metadatas":{"id":{"edit":{},"list":{"label":"id","searchable":true,"sortable":true}},"action":{"edit":{"label":"action","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"action","searchable":true,"sortable":true}},"actionParameters":{"edit":{"label":"actionParameters","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"actionParameters","searchable":false,"sortable":false}},"subject":{"edit":{"label":"subject","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"subject","searchable":true,"sortable":true}},"properties":{"edit":{"label":"properties","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"properties","searchable":false,"sortable":false}},"conditions":{"edit":{"label":"conditions","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"conditions","searchable":false,"sortable":false}},"role":{"edit":{"label":"role","description":"","placeholder":"","visible":true,"editable":true,"mainField":"name"},"list":{"label":"role","searchable":true,"sortable":true}},"createdAt":{"edit":{"label":"createdAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"createdAt","searchable":true,"sortable":true}},"updatedAt":{"edit":{"label":"updatedAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"updatedAt","searchable":true,"sortable":true}},"createdBy":{"edit":{"label":"createdBy","description":"","placeholder":"","visible":false,"editable":true,"mainField":"firstname"},"list":{"label":"createdBy","searchable":true,"sortable":true}},"updatedBy":{"edit":{"label":"updatedBy","description":"","placeholder":"","visible":false,"editable":true,"mainField":"firstname"},"list":{"label":"updatedBy","searchable":true,"sortable":true}}},"layouts":{"list":["id","action","subject","role"],"edit":[[{"name":"action","size":6}],[{"name":"actionParameters","size":12}],[{"name":"subject","size":6}],[{"name":"properties","size":12}],[{"name":"conditions","size":12}],[{"name":"role","size":6}]]},"uid":"admin::permission"}	object	\N	\N
6	plugin_content_manager_configuration_content_types::admin::transfer-token-permission	{"settings":{"bulkable":true,"filterable":true,"searchable":true,"pageSize":10,"mainField":"action","defaultSortBy":"action","defaultSortOrder":"ASC"},"metadatas":{"id":{"edit":{},"list":{"label":"id","searchable":true,"sortable":true}},"action":{"edit":{"label":"action","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"action","searchable":true,"sortable":true}},"token":{"edit":{"label":"token","description":"","placeholder":"","visible":true,"editable":true,"mainField":"name"},"list":{"label":"token","searchable":true,"sortable":true}},"createdAt":{"edit":{"label":"createdAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"createdAt","searchable":true,"sortable":true}},"updatedAt":{"edit":{"label":"updatedAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"updatedAt","searchable":true,"sortable":true}},"createdBy":{"edit":{"label":"createdBy","description":"","placeholder":"","visible":false,"editable":true,"mainField":"firstname"},"list":{"label":"createdBy","searchable":true,"sortable":true}},"updatedBy":{"edit":{"label":"updatedBy","description":"","placeholder":"","visible":false,"editable":true,"mainField":"firstname"},"list":{"label":"updatedBy","searchable":true,"sortable":true}}},"layouts":{"list":["id","action","token","createdAt"],"edit":[[{"name":"action","size":6},{"name":"token","size":6}]]},"uid":"admin::transfer-token-permission"}	object	\N	\N
7	plugin_content_manager_configuration_content_types::admin::transfer-token	{"settings":{"bulkable":true,"filterable":true,"searchable":true,"pageSize":10,"mainField":"name","defaultSortBy":"name","defaultSortOrder":"ASC"},"metadatas":{"id":{"edit":{},"list":{"label":"id","searchable":true,"sortable":true}},"name":{"edit":{"label":"name","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"name","searchable":true,"sortable":true}},"description":{"edit":{"label":"description","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"description","searchable":true,"sortable":true}},"accessKey":{"edit":{"label":"accessKey","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"accessKey","searchable":true,"sortable":true}},"lastUsedAt":{"edit":{"label":"lastUsedAt","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"lastUsedAt","searchable":true,"sortable":true}},"permissions":{"edit":{"label":"permissions","description":"","placeholder":"","visible":true,"editable":true,"mainField":"action"},"list":{"label":"permissions","searchable":false,"sortable":false}},"expiresAt":{"edit":{"label":"expiresAt","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"expiresAt","searchable":true,"sortable":true}},"lifespan":{"edit":{"label":"lifespan","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"lifespan","searchable":true,"sortable":true}},"createdAt":{"edit":{"label":"createdAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"createdAt","searchable":true,"sortable":true}},"updatedAt":{"edit":{"label":"updatedAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"updatedAt","searchable":true,"sortable":true}},"createdBy":{"edit":{"label":"createdBy","description":"","placeholder":"","visible":false,"editable":true,"mainField":"firstname"},"list":{"label":"createdBy","searchable":true,"sortable":true}},"updatedBy":{"edit":{"label":"updatedBy","description":"","placeholder":"","visible":false,"editable":true,"mainField":"firstname"},"list":{"label":"updatedBy","searchable":true,"sortable":true}}},"layouts":{"list":["id","name","description","accessKey"],"edit":[[{"name":"name","size":6},{"name":"description","size":6}],[{"name":"accessKey","size":6},{"name":"lastUsedAt","size":6}],[{"name":"permissions","size":6},{"name":"expiresAt","size":6}],[{"name":"lifespan","size":4}]]},"uid":"admin::transfer-token"}	object	\N	\N
8	plugin_content_manager_configuration_content_types::admin::api-token-permission	{"settings":{"bulkable":true,"filterable":true,"searchable":true,"pageSize":10,"mainField":"action","defaultSortBy":"action","defaultSortOrder":"ASC"},"metadatas":{"id":{"edit":{},"list":{"label":"id","searchable":true,"sortable":true}},"action":{"edit":{"label":"action","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"action","searchable":true,"sortable":true}},"token":{"edit":{"label":"token","description":"","placeholder":"","visible":true,"editable":true,"mainField":"name"},"list":{"label":"token","searchable":true,"sortable":true}},"createdAt":{"edit":{"label":"createdAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"createdAt","searchable":true,"sortable":true}},"updatedAt":{"edit":{"label":"updatedAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"updatedAt","searchable":true,"sortable":true}},"createdBy":{"edit":{"label":"createdBy","description":"","placeholder":"","visible":false,"editable":true,"mainField":"firstname"},"list":{"label":"createdBy","searchable":true,"sortable":true}},"updatedBy":{"edit":{"label":"updatedBy","description":"","placeholder":"","visible":false,"editable":true,"mainField":"firstname"},"list":{"label":"updatedBy","searchable":true,"sortable":true}}},"layouts":{"list":["id","action","token","createdAt"],"edit":[[{"name":"action","size":6},{"name":"token","size":6}]]},"uid":"admin::api-token-permission"}	object	\N	\N
9	plugin_content_manager_configuration_content_types::plugin::content-releases.release	{"settings":{"bulkable":true,"filterable":true,"searchable":true,"pageSize":10,"mainField":"name","defaultSortBy":"name","defaultSortOrder":"ASC"},"metadatas":{"id":{"edit":{},"list":{"label":"id","searchable":true,"sortable":true}},"name":{"edit":{"label":"name","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"name","searchable":true,"sortable":true}},"releasedAt":{"edit":{"label":"releasedAt","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"releasedAt","searchable":true,"sortable":true}},"scheduledAt":{"edit":{"label":"scheduledAt","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"scheduledAt","searchable":true,"sortable":true}},"timezone":{"edit":{"label":"timezone","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"timezone","searchable":true,"sortable":true}},"status":{"edit":{"label":"status","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"status","searchable":true,"sortable":true}},"actions":{"edit":{"label":"actions","description":"","placeholder":"","visible":true,"editable":true,"mainField":"contentType"},"list":{"label":"actions","searchable":false,"sortable":false}},"createdAt":{"edit":{"label":"createdAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"createdAt","searchable":true,"sortable":true}},"updatedAt":{"edit":{"label":"updatedAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"updatedAt","searchable":true,"sortable":true}},"createdBy":{"edit":{"label":"createdBy","description":"","placeholder":"","visible":false,"editable":true,"mainField":"firstname"},"list":{"label":"createdBy","searchable":true,"sortable":true}},"updatedBy":{"edit":{"label":"updatedBy","description":"","placeholder":"","visible":false,"editable":true,"mainField":"firstname"},"list":{"label":"updatedBy","searchable":true,"sortable":true}}},"layouts":{"list":["id","name","releasedAt","scheduledAt"],"edit":[[{"name":"name","size":6},{"name":"releasedAt","size":6}],[{"name":"scheduledAt","size":6},{"name":"timezone","size":6}],[{"name":"status","size":6},{"name":"actions","size":6}]]},"uid":"plugin::content-releases.release"}	object	\N	\N
12	plugin_content_manager_configuration_content_types::plugin::users-permissions.role	{"settings":{"bulkable":true,"filterable":true,"searchable":true,"pageSize":10,"mainField":"name","defaultSortBy":"name","defaultSortOrder":"ASC"},"metadatas":{"id":{"edit":{},"list":{"label":"id","searchable":true,"sortable":true}},"name":{"edit":{"label":"name","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"name","searchable":true,"sortable":true}},"description":{"edit":{"label":"description","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"description","searchable":true,"sortable":true}},"type":{"edit":{"label":"type","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"type","searchable":true,"sortable":true}},"permissions":{"edit":{"label":"permissions","description":"","placeholder":"","visible":true,"editable":true,"mainField":"action"},"list":{"label":"permissions","searchable":false,"sortable":false}},"users":{"edit":{"label":"users","description":"","placeholder":"","visible":true,"editable":true,"mainField":"username"},"list":{"label":"users","searchable":false,"sortable":false}},"createdAt":{"edit":{"label":"createdAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"createdAt","searchable":true,"sortable":true}},"updatedAt":{"edit":{"label":"updatedAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"updatedAt","searchable":true,"sortable":true}},"createdBy":{"edit":{"label":"createdBy","description":"","placeholder":"","visible":false,"editable":true,"mainField":"firstname"},"list":{"label":"createdBy","searchable":true,"sortable":true}},"updatedBy":{"edit":{"label":"updatedBy","description":"","placeholder":"","visible":false,"editable":true,"mainField":"firstname"},"list":{"label":"updatedBy","searchable":true,"sortable":true}}},"layouts":{"list":["id","name","description","type"],"edit":[[{"name":"name","size":6},{"name":"description","size":6}],[{"name":"type","size":6},{"name":"permissions","size":6}],[{"name":"users","size":6}]]},"uid":"plugin::users-permissions.role"}	object	\N	\N
11	plugin_content_manager_configuration_content_types::plugin::upload.folder	{"settings":{"bulkable":true,"filterable":true,"searchable":true,"pageSize":10,"mainField":"name","defaultSortBy":"name","defaultSortOrder":"ASC"},"metadatas":{"id":{"edit":{},"list":{"label":"id","searchable":true,"sortable":true}},"name":{"edit":{"label":"name","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"name","searchable":true,"sortable":true}},"pathId":{"edit":{"label":"pathId","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"pathId","searchable":true,"sortable":true}},"parent":{"edit":{"label":"parent","description":"","placeholder":"","visible":true,"editable":true,"mainField":"name"},"list":{"label":"parent","searchable":true,"sortable":true}},"children":{"edit":{"label":"children","description":"","placeholder":"","visible":true,"editable":true,"mainField":"name"},"list":{"label":"children","searchable":false,"sortable":false}},"files":{"edit":{"label":"files","description":"","placeholder":"","visible":true,"editable":true,"mainField":"name"},"list":{"label":"files","searchable":false,"sortable":false}},"path":{"edit":{"label":"path","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"path","searchable":true,"sortable":true}},"createdAt":{"edit":{"label":"createdAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"createdAt","searchable":true,"sortable":true}},"updatedAt":{"edit":{"label":"updatedAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"updatedAt","searchable":true,"sortable":true}},"createdBy":{"edit":{"label":"createdBy","description":"","placeholder":"","visible":false,"editable":true,"mainField":"firstname"},"list":{"label":"createdBy","searchable":true,"sortable":true}},"updatedBy":{"edit":{"label":"updatedBy","description":"","placeholder":"","visible":false,"editable":true,"mainField":"firstname"},"list":{"label":"updatedBy","searchable":true,"sortable":true}}},"layouts":{"list":["id","name","pathId","parent"],"edit":[[{"name":"name","size":6},{"name":"pathId","size":4}],[{"name":"parent","size":6},{"name":"children","size":6}],[{"name":"files","size":6},{"name":"path","size":6}]]},"uid":"plugin::upload.folder"}	object	\N	\N
10	plugin_content_manager_configuration_content_types::plugin::upload.file	{"settings":{"bulkable":true,"filterable":true,"searchable":true,"pageSize":10,"mainField":"name","defaultSortBy":"name","defaultSortOrder":"ASC"},"metadatas":{"id":{"edit":{},"list":{"label":"id","searchable":true,"sortable":true}},"name":{"edit":{"label":"name","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"name","searchable":true,"sortable":true}},"alternativeText":{"edit":{"label":"alternativeText","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"alternativeText","searchable":true,"sortable":true}},"caption":{"edit":{"label":"caption","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"caption","searchable":true,"sortable":true}},"width":{"edit":{"label":"width","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"width","searchable":true,"sortable":true}},"height":{"edit":{"label":"height","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"height","searchable":true,"sortable":true}},"formats":{"edit":{"label":"formats","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"formats","searchable":false,"sortable":false}},"hash":{"edit":{"label":"hash","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"hash","searchable":true,"sortable":true}},"ext":{"edit":{"label":"ext","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"ext","searchable":true,"sortable":true}},"mime":{"edit":{"label":"mime","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"mime","searchable":true,"sortable":true}},"size":{"edit":{"label":"size","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"size","searchable":true,"sortable":true}},"url":{"edit":{"label":"url","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"url","searchable":true,"sortable":true}},"previewUrl":{"edit":{"label":"previewUrl","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"previewUrl","searchable":true,"sortable":true}},"provider":{"edit":{"label":"provider","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"provider","searchable":true,"sortable":true}},"provider_metadata":{"edit":{"label":"provider_metadata","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"provider_metadata","searchable":false,"sortable":false}},"folder":{"edit":{"label":"folder","description":"","placeholder":"","visible":true,"editable":true,"mainField":"name"},"list":{"label":"folder","searchable":true,"sortable":true}},"folderPath":{"edit":{"label":"folderPath","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"folderPath","searchable":true,"sortable":true}},"createdAt":{"edit":{"label":"createdAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"createdAt","searchable":true,"sortable":true}},"updatedAt":{"edit":{"label":"updatedAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"updatedAt","searchable":true,"sortable":true}},"createdBy":{"edit":{"label":"createdBy","description":"","placeholder":"","visible":false,"editable":true,"mainField":"firstname"},"list":{"label":"createdBy","searchable":true,"sortable":true}},"updatedBy":{"edit":{"label":"updatedBy","description":"","placeholder":"","visible":false,"editable":true,"mainField":"firstname"},"list":{"label":"updatedBy","searchable":true,"sortable":true}}},"layouts":{"list":["id","name","alternativeText","caption"],"edit":[[{"name":"name","size":6},{"name":"alternativeText","size":6}],[{"name":"caption","size":6},{"name":"width","size":4}],[{"name":"height","size":4}],[{"name":"formats","size":12}],[{"name":"hash","size":6},{"name":"ext","size":6}],[{"name":"mime","size":6},{"name":"size","size":4}],[{"name":"url","size":6},{"name":"previewUrl","size":6}],[{"name":"provider","size":6}],[{"name":"provider_metadata","size":12}],[{"name":"folder","size":6},{"name":"folderPath","size":6}]]},"uid":"plugin::upload.file"}	object	\N	\N
13	plugin_content_manager_configuration_content_types::plugin::i18n.locale	{"settings":{"bulkable":true,"filterable":true,"searchable":true,"pageSize":10,"mainField":"name","defaultSortBy":"name","defaultSortOrder":"ASC"},"metadatas":{"id":{"edit":{},"list":{"label":"id","searchable":true,"sortable":true}},"name":{"edit":{"label":"name","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"name","searchable":true,"sortable":true}},"code":{"edit":{"label":"code","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"code","searchable":true,"sortable":true}},"createdAt":{"edit":{"label":"createdAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"createdAt","searchable":true,"sortable":true}},"updatedAt":{"edit":{"label":"updatedAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"updatedAt","searchable":true,"sortable":true}},"createdBy":{"edit":{"label":"createdBy","description":"","placeholder":"","visible":false,"editable":true,"mainField":"firstname"},"list":{"label":"createdBy","searchable":true,"sortable":true}},"updatedBy":{"edit":{"label":"updatedBy","description":"","placeholder":"","visible":false,"editable":true,"mainField":"firstname"},"list":{"label":"updatedBy","searchable":true,"sortable":true}}},"layouts":{"list":["id","name","code","createdAt"],"edit":[[{"name":"name","size":6},{"name":"code","size":6}]]},"uid":"plugin::i18n.locale"}	object	\N	\N
16	plugin_content_manager_configuration_content_types::plugin::users-permissions.permission	{"settings":{"bulkable":true,"filterable":true,"searchable":true,"pageSize":10,"mainField":"action","defaultSortBy":"action","defaultSortOrder":"ASC"},"metadatas":{"id":{"edit":{},"list":{"label":"id","searchable":true,"sortable":true}},"action":{"edit":{"label":"action","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"action","searchable":true,"sortable":true}},"role":{"edit":{"label":"role","description":"","placeholder":"","visible":true,"editable":true,"mainField":"name"},"list":{"label":"role","searchable":true,"sortable":true}},"createdAt":{"edit":{"label":"createdAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"createdAt","searchable":true,"sortable":true}},"updatedAt":{"edit":{"label":"updatedAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"updatedAt","searchable":true,"sortable":true}},"createdBy":{"edit":{"label":"createdBy","description":"","placeholder":"","visible":false,"editable":true,"mainField":"firstname"},"list":{"label":"createdBy","searchable":true,"sortable":true}},"updatedBy":{"edit":{"label":"updatedBy","description":"","placeholder":"","visible":false,"editable":true,"mainField":"firstname"},"list":{"label":"updatedBy","searchable":true,"sortable":true}}},"layouts":{"list":["id","action","role","createdAt"],"edit":[[{"name":"action","size":6},{"name":"role","size":6}]]},"uid":"plugin::users-permissions.permission"}	object	\N	\N
14	plugin_content_manager_configuration_content_types::plugin::content-releases.release-action	{"settings":{"bulkable":true,"filterable":true,"searchable":true,"pageSize":10,"mainField":"contentType","defaultSortBy":"contentType","defaultSortOrder":"ASC"},"metadatas":{"id":{"edit":{},"list":{"label":"id","searchable":true,"sortable":true}},"type":{"edit":{"label":"type","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"type","searchable":true,"sortable":true}},"contentType":{"edit":{"label":"contentType","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"contentType","searchable":true,"sortable":true}},"locale":{"edit":{"label":"locale","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"locale","searchable":true,"sortable":true}},"release":{"edit":{"label":"release","description":"","placeholder":"","visible":true,"editable":true,"mainField":"name"},"list":{"label":"release","searchable":true,"sortable":true}},"isEntryValid":{"edit":{"label":"isEntryValid","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"isEntryValid","searchable":true,"sortable":true}},"createdAt":{"edit":{"label":"createdAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"createdAt","searchable":true,"sortable":true}},"updatedAt":{"edit":{"label":"updatedAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"updatedAt","searchable":true,"sortable":true}},"createdBy":{"edit":{"label":"createdBy","description":"","placeholder":"","visible":false,"editable":true,"mainField":"firstname"},"list":{"label":"createdBy","searchable":true,"sortable":true}},"updatedBy":{"edit":{"label":"updatedBy","description":"","placeholder":"","visible":false,"editable":true,"mainField":"firstname"},"list":{"label":"updatedBy","searchable":true,"sortable":true}}},"layouts":{"list":["id","type","contentType","locale"],"edit":[[{"name":"type","size":6},{"name":"contentType","size":6}],[{"name":"locale","size":6},{"name":"release","size":6}],[{"name":"isEntryValid","size":4}]]},"uid":"plugin::content-releases.release-action"}	object	\N	\N
17	plugin_upload_settings	{"sizeOptimization":true,"responsiveDimensions":true,"autoOrientation":false}	object	\N	\N
18	plugin_upload_view_configuration	{"pageSize":10,"sort":"createdAt:DESC"}	object	\N	\N
20	plugin_users-permissions_grant	{"email":{"enabled":true,"icon":"envelope"},"discord":{"enabled":false,"icon":"discord","key":"","secret":"","callback":"api/auth/discord/callback","scope":["identify","email"]},"facebook":{"enabled":false,"icon":"facebook-square","key":"","secret":"","callback":"api/auth/facebook/callback","scope":["email"]},"google":{"enabled":false,"icon":"google","key":"","secret":"","callback":"api/auth/google/callback","scope":["email"]},"github":{"enabled":false,"icon":"github","key":"","secret":"","callback":"api/auth/github/callback","scope":["user","user:email"]},"microsoft":{"enabled":false,"icon":"windows","key":"","secret":"","callback":"api/auth/microsoft/callback","scope":["user.read"]},"twitter":{"enabled":false,"icon":"twitter","key":"","secret":"","callback":"api/auth/twitter/callback"},"instagram":{"enabled":false,"icon":"instagram","key":"","secret":"","callback":"api/auth/instagram/callback","scope":["user_profile"]},"vk":{"enabled":false,"icon":"vk","key":"","secret":"","callback":"api/auth/vk/callback","scope":["email"]},"twitch":{"enabled":false,"icon":"twitch","key":"","secret":"","callback":"api/auth/twitch/callback","scope":["user:read:email"]},"linkedin":{"enabled":false,"icon":"linkedin","key":"","secret":"","callback":"api/auth/linkedin/callback","scope":["r_liteprofile","r_emailaddress"]},"cognito":{"enabled":false,"icon":"aws","key":"","secret":"","subdomain":"my.subdomain.com","callback":"api/auth/cognito/callback","scope":["email","openid","profile"]},"reddit":{"enabled":false,"icon":"reddit","key":"","secret":"","state":true,"callback":"api/auth/reddit/callback","scope":["identity"]},"auth0":{"enabled":false,"icon":"","key":"","secret":"","subdomain":"my-tenant.eu","callback":"api/auth/auth0/callback","scope":["openid","email","profile"]},"cas":{"enabled":false,"icon":"book","key":"","secret":"","callback":"api/auth/cas/callback","scope":["openid email"],"subdomain":"my.subdomain.com/cas"},"patreon":{"enabled":false,"icon":"","key":"","secret":"","callback":"api/auth/patreon/callback","scope":["identity","identity[email]"]},"keycloak":{"enabled":false,"icon":"","key":"","secret":"","subdomain":"myKeycloakProvider.com/realms/myrealm","callback":"api/auth/keycloak/callback","scope":["openid","email","profile"]}}	object	\N	\N
21	plugin_users-permissions_email	{"reset_password":{"display":"Email.template.reset_password","icon":"sync","options":{"from":{"name":"Administration Panel","email":"no-reply@strapi.io"},"response_email":"","object":"Reset password","message":"<p>We heard that you lost your password. Sorry about that!</p>\\n\\n<p>But don’t worry! You can use the following link to reset your password:</p>\\n<p><%= URL %>?code=<%= TOKEN %></p>\\n\\n<p>Thanks.</p>"}},"email_confirmation":{"display":"Email.template.email_confirmation","icon":"check-square","options":{"from":{"name":"Administration Panel","email":"no-reply@strapi.io"},"response_email":"","object":"Account confirmation","message":"<p>Thank you for registering!</p>\\n\\n<p>You have to confirm your email address. Please click on the link below.</p>\\n\\n<p><%= URL %>?confirmation=<%= CODE %></p>\\n\\n<p>Thanks.</p>"}}}	object	\N	\N
22	plugin_users-permissions_advanced	{"unique_email":true,"allow_register":true,"email_confirmation":false,"email_reset_password":null,"email_confirmation_redirection":null,"default_role":"authenticated"}	object	\N	\N
19	plugin_upload_metrics	{"weeklySchedule":"44 40 11 * * 6","lastWeeklyUpdate":1771069244035}	object	\N	\N
15	plugin_content_manager_configuration_content_types::plugin::users-permissions.user	{"settings":{"bulkable":true,"filterable":true,"searchable":true,"pageSize":10,"mainField":"username","defaultSortBy":"username","defaultSortOrder":"ASC"},"metadatas":{"id":{"edit":{},"list":{"label":"id","searchable":true,"sortable":true}},"username":{"edit":{"label":"username","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"username","searchable":true,"sortable":true}},"email":{"edit":{"label":"email","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"email","searchable":true,"sortable":true}},"provider":{"edit":{"label":"provider","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"provider","searchable":true,"sortable":true}},"password":{"edit":{"label":"password","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"password","searchable":true,"sortable":true}},"resetPasswordToken":{"edit":{"label":"resetPasswordToken","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"resetPasswordToken","searchable":true,"sortable":true}},"confirmationToken":{"edit":{"label":"confirmationToken","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"confirmationToken","searchable":true,"sortable":true}},"confirmed":{"edit":{"label":"confirmed","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"confirmed","searchable":true,"sortable":true}},"blocked":{"edit":{"label":"blocked","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"blocked","searchable":true,"sortable":true}},"role":{"edit":{"label":"role","description":"","placeholder":"","visible":true,"editable":true,"mainField":"name"},"list":{"label":"role","searchable":true,"sortable":true}},"createdAt":{"edit":{"label":"createdAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"createdAt","searchable":true,"sortable":true}},"updatedAt":{"edit":{"label":"updatedAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"updatedAt","searchable":true,"sortable":true}},"createdBy":{"edit":{"label":"createdBy","description":"","placeholder":"","visible":false,"editable":true,"mainField":"firstname"},"list":{"label":"createdBy","searchable":true,"sortable":true}},"updatedBy":{"edit":{"label":"updatedBy","description":"","placeholder":"","visible":false,"editable":true,"mainField":"firstname"},"list":{"label":"updatedBy","searchable":true,"sortable":true}}},"layouts":{"list":["id","username","email","confirmed"],"edit":[[{"name":"username","size":6},{"name":"email","size":6}],[{"name":"password","size":6},{"name":"confirmed","size":4}],[{"name":"blocked","size":4},{"name":"role","size":6}]]},"uid":"plugin::users-permissions.user"}	object	\N	\N
28	plugin_content_manager_configuration_components::main.gallery	{"settings":{"bulkable":true,"filterable":true,"searchable":true,"pageSize":10,"mainField":"id","defaultSortBy":"id","defaultSortOrder":"ASC"},"metadatas":{"id":{"edit":{},"list":{"label":"id","searchable":false,"sortable":false}},"img":{"edit":{"label":"img","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"img","searchable":false,"sortable":false}}},"layouts":{"list":["id","img"],"edit":[[{"name":"img","size":6}]]},"uid":"main.gallery","isComponent":true}	object	\N	\N
27	plugin_content_manager_configuration_components::main.letters	{"settings":{"bulkable":true,"filterable":true,"searchable":true,"pageSize":10,"mainField":"title","defaultSortBy":"id","defaultSortOrder":"ASC"},"metadatas":{"id":{"edit":{},"list":{"label":"id","searchable":false,"sortable":false}},"title":{"edit":{"label":"title","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"title","searchable":true,"sortable":true}},"banner":{"edit":{"label":"banner","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"banner","searchable":false,"sortable":false}},"file":{"edit":{"label":"file","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"file","searchable":false,"sortable":false}}},"layouts":{"list":["id","title","banner","file"],"edit":[[{"name":"title","size":6},{"name":"banner","size":6}],[{"name":"file","size":6}]]},"uid":"main.letters","isComponent":true}	object	\N	\N
25	plugin_content_manager_configuration_content_types::api::main.main	{"settings":{"bulkable":true,"filterable":true,"searchable":true,"pageSize":10,"mainField":"id","defaultSortBy":"id","defaultSortOrder":"ASC"},"metadatas":{"id":{"edit":{},"list":{"label":"id","searchable":true,"sortable":true}},"Projects":{"edit":{"label":"Projects","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"Projects","searchable":false,"sortable":false}},"Letters":{"edit":{"label":"Letters","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"Letters","searchable":false,"sortable":false}},"createdAt":{"edit":{"label":"createdAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"createdAt","searchable":true,"sortable":true}},"updatedAt":{"edit":{"label":"updatedAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"updatedAt","searchable":true,"sortable":true}},"createdBy":{"edit":{"label":"createdBy","description":"","placeholder":"","visible":false,"editable":true,"mainField":"firstname"},"list":{"label":"createdBy","searchable":true,"sortable":true}},"updatedBy":{"edit":{"label":"updatedBy","description":"","placeholder":"","visible":false,"editable":true,"mainField":"firstname"},"list":{"label":"updatedBy","searchable":true,"sortable":true}}},"layouts":{"list":["id","createdAt","updatedAt","Projects"],"edit":[[{"name":"Projects","size":12}],[{"name":"Letters","size":12}]]},"uid":"api::main.main"}	object	\N	\N
1	strapi_content_types_schema	{"admin::permission":{"collectionName":"admin_permissions","info":{"name":"Permission","description":"","singularName":"permission","pluralName":"permissions","displayName":"Permission"},"options":{},"pluginOptions":{"content-manager":{"visible":false},"content-type-builder":{"visible":false}},"attributes":{"action":{"type":"string","minLength":1,"configurable":false,"required":true},"actionParameters":{"type":"json","configurable":false,"required":false,"default":{}},"subject":{"type":"string","minLength":1,"configurable":false,"required":false},"properties":{"type":"json","configurable":false,"required":false,"default":{}},"conditions":{"type":"json","configurable":false,"required":false,"default":[]},"role":{"configurable":false,"type":"relation","relation":"manyToOne","inversedBy":"permissions","target":"admin::role"},"createdAt":{"type":"datetime"},"updatedAt":{"type":"datetime"},"createdBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true},"updatedBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true}},"kind":"collectionType","__schema__":{"collectionName":"admin_permissions","info":{"name":"Permission","description":"","singularName":"permission","pluralName":"permissions","displayName":"Permission"},"options":{},"pluginOptions":{"content-manager":{"visible":false},"content-type-builder":{"visible":false}},"attributes":{"action":{"type":"string","minLength":1,"configurable":false,"required":true},"actionParameters":{"type":"json","configurable":false,"required":false,"default":{}},"subject":{"type":"string","minLength":1,"configurable":false,"required":false},"properties":{"type":"json","configurable":false,"required":false,"default":{}},"conditions":{"type":"json","configurable":false,"required":false,"default":[]},"role":{"configurable":false,"type":"relation","relation":"manyToOne","inversedBy":"permissions","target":"admin::role"}},"kind":"collectionType"},"modelType":"contentType","modelName":"permission","connection":"default","uid":"admin::permission","plugin":"admin","globalId":"AdminPermission"},"admin::user":{"collectionName":"admin_users","info":{"name":"User","description":"","singularName":"user","pluralName":"users","displayName":"User"},"pluginOptions":{"content-manager":{"visible":false},"content-type-builder":{"visible":false}},"attributes":{"firstname":{"type":"string","unique":false,"minLength":1,"configurable":false,"required":false},"lastname":{"type":"string","unique":false,"minLength":1,"configurable":false,"required":false},"username":{"type":"string","unique":false,"configurable":false,"required":false},"email":{"type":"email","minLength":6,"configurable":false,"required":true,"unique":true,"private":true},"password":{"type":"password","minLength":6,"configurable":false,"required":false,"private":true,"searchable":false},"resetPasswordToken":{"type":"string","configurable":false,"private":true,"searchable":false},"registrationToken":{"type":"string","configurable":false,"private":true,"searchable":false},"isActive":{"type":"boolean","default":false,"configurable":false,"private":true},"roles":{"configurable":false,"private":true,"type":"relation","relation":"manyToMany","inversedBy":"users","target":"admin::role","collectionName":"strapi_users_roles"},"blocked":{"type":"boolean","default":false,"configurable":false,"private":true},"preferedLanguage":{"type":"string","configurable":false,"required":false,"searchable":false},"createdAt":{"type":"datetime"},"updatedAt":{"type":"datetime"},"createdBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true},"updatedBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true}},"config":{"attributes":{"resetPasswordToken":{"hidden":true},"registrationToken":{"hidden":true}}},"kind":"collectionType","__schema__":{"collectionName":"admin_users","info":{"name":"User","description":"","singularName":"user","pluralName":"users","displayName":"User"},"pluginOptions":{"content-manager":{"visible":false},"content-type-builder":{"visible":false}},"attributes":{"firstname":{"type":"string","unique":false,"minLength":1,"configurable":false,"required":false},"lastname":{"type":"string","unique":false,"minLength":1,"configurable":false,"required":false},"username":{"type":"string","unique":false,"configurable":false,"required":false},"email":{"type":"email","minLength":6,"configurable":false,"required":true,"unique":true,"private":true},"password":{"type":"password","minLength":6,"configurable":false,"required":false,"private":true,"searchable":false},"resetPasswordToken":{"type":"string","configurable":false,"private":true,"searchable":false},"registrationToken":{"type":"string","configurable":false,"private":true,"searchable":false},"isActive":{"type":"boolean","default":false,"configurable":false,"private":true},"roles":{"configurable":false,"private":true,"type":"relation","relation":"manyToMany","inversedBy":"users","target":"admin::role","collectionName":"strapi_users_roles"},"blocked":{"type":"boolean","default":false,"configurable":false,"private":true},"preferedLanguage":{"type":"string","configurable":false,"required":false,"searchable":false}},"kind":"collectionType"},"modelType":"contentType","modelName":"user","connection":"default","uid":"admin::user","plugin":"admin","globalId":"AdminUser"},"admin::role":{"collectionName":"admin_roles","info":{"name":"Role","description":"","singularName":"role","pluralName":"roles","displayName":"Role"},"options":{},"pluginOptions":{"content-manager":{"visible":false},"content-type-builder":{"visible":false}},"attributes":{"name":{"type":"string","minLength":1,"unique":true,"configurable":false,"required":true},"code":{"type":"string","minLength":1,"unique":true,"configurable":false,"required":true},"description":{"type":"string","configurable":false},"users":{"configurable":false,"type":"relation","relation":"manyToMany","mappedBy":"roles","target":"admin::user"},"permissions":{"configurable":false,"type":"relation","relation":"oneToMany","mappedBy":"role","target":"admin::permission"},"createdAt":{"type":"datetime"},"updatedAt":{"type":"datetime"},"createdBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true},"updatedBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true}},"kind":"collectionType","__schema__":{"collectionName":"admin_roles","info":{"name":"Role","description":"","singularName":"role","pluralName":"roles","displayName":"Role"},"options":{},"pluginOptions":{"content-manager":{"visible":false},"content-type-builder":{"visible":false}},"attributes":{"name":{"type":"string","minLength":1,"unique":true,"configurable":false,"required":true},"code":{"type":"string","minLength":1,"unique":true,"configurable":false,"required":true},"description":{"type":"string","configurable":false},"users":{"configurable":false,"type":"relation","relation":"manyToMany","mappedBy":"roles","target":"admin::user"},"permissions":{"configurable":false,"type":"relation","relation":"oneToMany","mappedBy":"role","target":"admin::permission"}},"kind":"collectionType"},"modelType":"contentType","modelName":"role","connection":"default","uid":"admin::role","plugin":"admin","globalId":"AdminRole"},"admin::api-token":{"collectionName":"strapi_api_tokens","info":{"name":"Api Token","singularName":"api-token","pluralName":"api-tokens","displayName":"Api Token","description":""},"options":{},"pluginOptions":{"content-manager":{"visible":false},"content-type-builder":{"visible":false}},"attributes":{"name":{"type":"string","minLength":1,"configurable":false,"required":true,"unique":true},"description":{"type":"string","minLength":1,"configurable":false,"required":false,"default":""},"type":{"type":"enumeration","enum":["read-only","full-access","custom"],"configurable":false,"required":true,"default":"read-only"},"accessKey":{"type":"string","minLength":1,"configurable":false,"required":true,"searchable":false},"lastUsedAt":{"type":"datetime","configurable":false,"required":false},"permissions":{"type":"relation","target":"admin::api-token-permission","relation":"oneToMany","mappedBy":"token","configurable":false,"required":false},"expiresAt":{"type":"datetime","configurable":false,"required":false},"lifespan":{"type":"biginteger","configurable":false,"required":false},"createdAt":{"type":"datetime"},"updatedAt":{"type":"datetime"},"createdBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true},"updatedBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true}},"kind":"collectionType","__schema__":{"collectionName":"strapi_api_tokens","info":{"name":"Api Token","singularName":"api-token","pluralName":"api-tokens","displayName":"Api Token","description":""},"options":{},"pluginOptions":{"content-manager":{"visible":false},"content-type-builder":{"visible":false}},"attributes":{"name":{"type":"string","minLength":1,"configurable":false,"required":true,"unique":true},"description":{"type":"string","minLength":1,"configurable":false,"required":false,"default":""},"type":{"type":"enumeration","enum":["read-only","full-access","custom"],"configurable":false,"required":true,"default":"read-only"},"accessKey":{"type":"string","minLength":1,"configurable":false,"required":true,"searchable":false},"lastUsedAt":{"type":"datetime","configurable":false,"required":false},"permissions":{"type":"relation","target":"admin::api-token-permission","relation":"oneToMany","mappedBy":"token","configurable":false,"required":false},"expiresAt":{"type":"datetime","configurable":false,"required":false},"lifespan":{"type":"biginteger","configurable":false,"required":false}},"kind":"collectionType"},"modelType":"contentType","modelName":"api-token","connection":"default","uid":"admin::api-token","plugin":"admin","globalId":"AdminApiToken"},"admin::api-token-permission":{"collectionName":"strapi_api_token_permissions","info":{"name":"API Token Permission","description":"","singularName":"api-token-permission","pluralName":"api-token-permissions","displayName":"API Token Permission"},"options":{},"pluginOptions":{"content-manager":{"visible":false},"content-type-builder":{"visible":false}},"attributes":{"action":{"type":"string","minLength":1,"configurable":false,"required":true},"token":{"configurable":false,"type":"relation","relation":"manyToOne","inversedBy":"permissions","target":"admin::api-token"},"createdAt":{"type":"datetime"},"updatedAt":{"type":"datetime"},"createdBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true},"updatedBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true}},"kind":"collectionType","__schema__":{"collectionName":"strapi_api_token_permissions","info":{"name":"API Token Permission","description":"","singularName":"api-token-permission","pluralName":"api-token-permissions","displayName":"API Token Permission"},"options":{},"pluginOptions":{"content-manager":{"visible":false},"content-type-builder":{"visible":false}},"attributes":{"action":{"type":"string","minLength":1,"configurable":false,"required":true},"token":{"configurable":false,"type":"relation","relation":"manyToOne","inversedBy":"permissions","target":"admin::api-token"}},"kind":"collectionType"},"modelType":"contentType","modelName":"api-token-permission","connection":"default","uid":"admin::api-token-permission","plugin":"admin","globalId":"AdminApiTokenPermission"},"admin::transfer-token":{"collectionName":"strapi_transfer_tokens","info":{"name":"Transfer Token","singularName":"transfer-token","pluralName":"transfer-tokens","displayName":"Transfer Token","description":""},"options":{},"pluginOptions":{"content-manager":{"visible":false},"content-type-builder":{"visible":false}},"attributes":{"name":{"type":"string","minLength":1,"configurable":false,"required":true,"unique":true},"description":{"type":"string","minLength":1,"configurable":false,"required":false,"default":""},"accessKey":{"type":"string","minLength":1,"configurable":false,"required":true},"lastUsedAt":{"type":"datetime","configurable":false,"required":false},"permissions":{"type":"relation","target":"admin::transfer-token-permission","relation":"oneToMany","mappedBy":"token","configurable":false,"required":false},"expiresAt":{"type":"datetime","configurable":false,"required":false},"lifespan":{"type":"biginteger","configurable":false,"required":false},"createdAt":{"type":"datetime"},"updatedAt":{"type":"datetime"},"createdBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true},"updatedBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true}},"kind":"collectionType","__schema__":{"collectionName":"strapi_transfer_tokens","info":{"name":"Transfer Token","singularName":"transfer-token","pluralName":"transfer-tokens","displayName":"Transfer Token","description":""},"options":{},"pluginOptions":{"content-manager":{"visible":false},"content-type-builder":{"visible":false}},"attributes":{"name":{"type":"string","minLength":1,"configurable":false,"required":true,"unique":true},"description":{"type":"string","minLength":1,"configurable":false,"required":false,"default":""},"accessKey":{"type":"string","minLength":1,"configurable":false,"required":true},"lastUsedAt":{"type":"datetime","configurable":false,"required":false},"permissions":{"type":"relation","target":"admin::transfer-token-permission","relation":"oneToMany","mappedBy":"token","configurable":false,"required":false},"expiresAt":{"type":"datetime","configurable":false,"required":false},"lifespan":{"type":"biginteger","configurable":false,"required":false}},"kind":"collectionType"},"modelType":"contentType","modelName":"transfer-token","connection":"default","uid":"admin::transfer-token","plugin":"admin","globalId":"AdminTransferToken"},"admin::transfer-token-permission":{"collectionName":"strapi_transfer_token_permissions","info":{"name":"Transfer Token Permission","description":"","singularName":"transfer-token-permission","pluralName":"transfer-token-permissions","displayName":"Transfer Token Permission"},"options":{},"pluginOptions":{"content-manager":{"visible":false},"content-type-builder":{"visible":false}},"attributes":{"action":{"type":"string","minLength":1,"configurable":false,"required":true},"token":{"configurable":false,"type":"relation","relation":"manyToOne","inversedBy":"permissions","target":"admin::transfer-token"},"createdAt":{"type":"datetime"},"updatedAt":{"type":"datetime"},"createdBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true},"updatedBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true}},"kind":"collectionType","__schema__":{"collectionName":"strapi_transfer_token_permissions","info":{"name":"Transfer Token Permission","description":"","singularName":"transfer-token-permission","pluralName":"transfer-token-permissions","displayName":"Transfer Token Permission"},"options":{},"pluginOptions":{"content-manager":{"visible":false},"content-type-builder":{"visible":false}},"attributes":{"action":{"type":"string","minLength":1,"configurable":false,"required":true},"token":{"configurable":false,"type":"relation","relation":"manyToOne","inversedBy":"permissions","target":"admin::transfer-token"}},"kind":"collectionType"},"modelType":"contentType","modelName":"transfer-token-permission","connection":"default","uid":"admin::transfer-token-permission","plugin":"admin","globalId":"AdminTransferTokenPermission"},"api::main.main":{"kind":"singleType","collectionName":"mains","info":{"singularName":"main","pluralName":"mains","displayName":"Main","description":""},"options":{"draftAndPublish":true},"pluginOptions":{"i18n":{"localized":true}},"attributes":{"Projects":{"type":"component","repeatable":true,"pluginOptions":{"i18n":{"localized":true}},"required":true,"component":"main.swiper"},"Letters":{"type":"component","repeatable":true,"pluginOptions":{"i18n":{"localized":true}},"required":true,"component":"main.letters"},"createdAt":{"type":"datetime"},"updatedAt":{"type":"datetime"},"publishedAt":{"type":"datetime","configurable":false,"writable":true,"visible":false},"createdBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true},"updatedBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true},"localizations":{"writable":true,"private":false,"configurable":false,"visible":false,"type":"relation","relation":"oneToMany","target":"api::main.main"},"locale":{"writable":true,"private":false,"configurable":false,"visible":false,"type":"string"}},"__schema__":{"collectionName":"mains","info":{"singularName":"main","pluralName":"mains","displayName":"Main","description":""},"options":{"draftAndPublish":true},"pluginOptions":{"i18n":{"localized":true}},"attributes":{"Projects":{"type":"component","repeatable":true,"pluginOptions":{"i18n":{"localized":true}},"required":true,"component":"main.swiper"},"Letters":{"type":"component","repeatable":true,"pluginOptions":{"i18n":{"localized":true}},"required":true,"component":"main.letters"}},"kind":"singleType"},"modelType":"contentType","modelName":"main","connection":"default","uid":"api::main.main","apiName":"main","globalId":"Main","actions":{},"lifecycles":{}},"plugin::upload.file":{"collectionName":"files","info":{"singularName":"file","pluralName":"files","displayName":"File","description":""},"options":{},"pluginOptions":{"content-manager":{"visible":false},"content-type-builder":{"visible":false}},"attributes":{"name":{"type":"string","configurable":false,"required":true},"alternativeText":{"type":"string","configurable":false},"caption":{"type":"string","configurable":false},"width":{"type":"integer","configurable":false},"height":{"type":"integer","configurable":false},"formats":{"type":"json","configurable":false},"hash":{"type":"string","configurable":false,"required":true},"ext":{"type":"string","configurable":false},"mime":{"type":"string","configurable":false,"required":true},"size":{"type":"decimal","configurable":false,"required":true},"url":{"type":"string","configurable":false,"required":true},"previewUrl":{"type":"string","configurable":false},"provider":{"type":"string","configurable":false,"required":true},"provider_metadata":{"type":"json","configurable":false},"related":{"type":"relation","relation":"morphToMany","configurable":false},"folder":{"type":"relation","relation":"manyToOne","target":"plugin::upload.folder","inversedBy":"files","private":true},"folderPath":{"type":"string","min":1,"required":true,"private":true,"searchable":false},"createdAt":{"type":"datetime"},"updatedAt":{"type":"datetime"},"createdBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true},"updatedBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true}},"indexes":[{"name":"upload_files_folder_path_index","columns":["folder_path"],"type":null},{"name":"upload_files_created_at_index","columns":["created_at"],"type":null},{"name":"upload_files_updated_at_index","columns":["updated_at"],"type":null},{"name":"upload_files_name_index","columns":["name"],"type":null},{"name":"upload_files_size_index","columns":["size"],"type":null},{"name":"upload_files_ext_index","columns":["ext"],"type":null}],"kind":"collectionType","__schema__":{"collectionName":"files","info":{"singularName":"file","pluralName":"files","displayName":"File","description":""},"options":{},"pluginOptions":{"content-manager":{"visible":false},"content-type-builder":{"visible":false}},"attributes":{"name":{"type":"string","configurable":false,"required":true},"alternativeText":{"type":"string","configurable":false},"caption":{"type":"string","configurable":false},"width":{"type":"integer","configurable":false},"height":{"type":"integer","configurable":false},"formats":{"type":"json","configurable":false},"hash":{"type":"string","configurable":false,"required":true},"ext":{"type":"string","configurable":false},"mime":{"type":"string","configurable":false,"required":true},"size":{"type":"decimal","configurable":false,"required":true},"url":{"type":"string","configurable":false,"required":true},"previewUrl":{"type":"string","configurable":false},"provider":{"type":"string","configurable":false,"required":true},"provider_metadata":{"type":"json","configurable":false},"related":{"type":"relation","relation":"morphToMany","configurable":false},"folder":{"type":"relation","relation":"manyToOne","target":"plugin::upload.folder","inversedBy":"files","private":true},"folderPath":{"type":"string","min":1,"required":true,"private":true,"searchable":false}},"kind":"collectionType"},"modelType":"contentType","modelName":"file","connection":"default","uid":"plugin::upload.file","plugin":"upload","globalId":"UploadFile"},"plugin::upload.folder":{"collectionName":"upload_folders","info":{"singularName":"folder","pluralName":"folders","displayName":"Folder"},"options":{},"pluginOptions":{"content-manager":{"visible":false},"content-type-builder":{"visible":false}},"attributes":{"name":{"type":"string","min":1,"required":true},"pathId":{"type":"integer","unique":true,"required":true},"parent":{"type":"relation","relation":"manyToOne","target":"plugin::upload.folder","inversedBy":"children"},"children":{"type":"relation","relation":"oneToMany","target":"plugin::upload.folder","mappedBy":"parent"},"files":{"type":"relation","relation":"oneToMany","target":"plugin::upload.file","mappedBy":"folder"},"path":{"type":"string","min":1,"required":true},"createdAt":{"type":"datetime"},"updatedAt":{"type":"datetime"},"createdBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true},"updatedBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true}},"indexes":[{"name":"upload_folders_path_id_index","columns":["path_id"],"type":"unique"},{"name":"upload_folders_path_index","columns":["path"],"type":"unique"}],"kind":"collectionType","__schema__":{"collectionName":"upload_folders","info":{"singularName":"folder","pluralName":"folders","displayName":"Folder"},"options":{},"pluginOptions":{"content-manager":{"visible":false},"content-type-builder":{"visible":false}},"attributes":{"name":{"type":"string","min":1,"required":true},"pathId":{"type":"integer","unique":true,"required":true},"parent":{"type":"relation","relation":"manyToOne","target":"plugin::upload.folder","inversedBy":"children"},"children":{"type":"relation","relation":"oneToMany","target":"plugin::upload.folder","mappedBy":"parent"},"files":{"type":"relation","relation":"oneToMany","target":"plugin::upload.file","mappedBy":"folder"},"path":{"type":"string","min":1,"required":true}},"kind":"collectionType"},"modelType":"contentType","modelName":"folder","connection":"default","uid":"plugin::upload.folder","plugin":"upload","globalId":"UploadFolder"},"plugin::content-releases.release":{"collectionName":"strapi_releases","info":{"singularName":"release","pluralName":"releases","displayName":"Release"},"options":{"draftAndPublish":false},"pluginOptions":{"content-manager":{"visible":false},"content-type-builder":{"visible":false}},"attributes":{"name":{"type":"string","required":true},"releasedAt":{"type":"datetime"},"scheduledAt":{"type":"datetime"},"timezone":{"type":"string"},"status":{"type":"enumeration","enum":["ready","blocked","failed","done","empty"],"required":true},"actions":{"type":"relation","relation":"oneToMany","target":"plugin::content-releases.release-action","mappedBy":"release"},"createdAt":{"type":"datetime"},"updatedAt":{"type":"datetime"},"createdBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true},"updatedBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true}},"kind":"collectionType","__schema__":{"collectionName":"strapi_releases","info":{"singularName":"release","pluralName":"releases","displayName":"Release"},"options":{"draftAndPublish":false},"pluginOptions":{"content-manager":{"visible":false},"content-type-builder":{"visible":false}},"attributes":{"name":{"type":"string","required":true},"releasedAt":{"type":"datetime"},"scheduledAt":{"type":"datetime"},"timezone":{"type":"string"},"status":{"type":"enumeration","enum":["ready","blocked","failed","done","empty"],"required":true},"actions":{"type":"relation","relation":"oneToMany","target":"plugin::content-releases.release-action","mappedBy":"release"}},"kind":"collectionType"},"modelType":"contentType","modelName":"release","connection":"default","uid":"plugin::content-releases.release","plugin":"content-releases","globalId":"ContentReleasesRelease"},"plugin::content-releases.release-action":{"collectionName":"strapi_release_actions","info":{"singularName":"release-action","pluralName":"release-actions","displayName":"Release Action"},"options":{"draftAndPublish":false},"pluginOptions":{"content-manager":{"visible":false},"content-type-builder":{"visible":false}},"attributes":{"type":{"type":"enumeration","enum":["publish","unpublish"],"required":true},"entry":{"type":"relation","relation":"morphToOne","configurable":false},"contentType":{"type":"string","required":true},"locale":{"type":"string"},"release":{"type":"relation","relation":"manyToOne","target":"plugin::content-releases.release","inversedBy":"actions"},"isEntryValid":{"type":"boolean"},"createdAt":{"type":"datetime"},"updatedAt":{"type":"datetime"},"createdBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true},"updatedBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true}},"kind":"collectionType","__schema__":{"collectionName":"strapi_release_actions","info":{"singularName":"release-action","pluralName":"release-actions","displayName":"Release Action"},"options":{"draftAndPublish":false},"pluginOptions":{"content-manager":{"visible":false},"content-type-builder":{"visible":false}},"attributes":{"type":{"type":"enumeration","enum":["publish","unpublish"],"required":true},"entry":{"type":"relation","relation":"morphToOne","configurable":false},"contentType":{"type":"string","required":true},"locale":{"type":"string"},"release":{"type":"relation","relation":"manyToOne","target":"plugin::content-releases.release","inversedBy":"actions"},"isEntryValid":{"type":"boolean"}},"kind":"collectionType"},"modelType":"contentType","modelName":"release-action","connection":"default","uid":"plugin::content-releases.release-action","plugin":"content-releases","globalId":"ContentReleasesReleaseAction"},"plugin::i18n.locale":{"info":{"singularName":"locale","pluralName":"locales","collectionName":"locales","displayName":"Locale","description":""},"options":{"draftAndPublish":false},"pluginOptions":{"content-manager":{"visible":false},"content-type-builder":{"visible":false}},"attributes":{"name":{"type":"string","min":1,"max":50,"configurable":false},"code":{"type":"string","unique":true,"configurable":false},"createdAt":{"type":"datetime"},"updatedAt":{"type":"datetime"},"createdBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true},"updatedBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true}},"kind":"collectionType","__schema__":{"info":{"singularName":"locale","pluralName":"locales","collectionName":"locales","displayName":"Locale","description":""},"options":{"draftAndPublish":false},"pluginOptions":{"content-manager":{"visible":false},"content-type-builder":{"visible":false}},"attributes":{"name":{"type":"string","min":1,"max":50,"configurable":false},"code":{"type":"string","unique":true,"configurable":false}},"kind":"collectionType"},"modelType":"contentType","modelName":"locale","connection":"default","uid":"plugin::i18n.locale","plugin":"i18n","collectionName":"i18n_locale","globalId":"I18NLocale"},"plugin::users-permissions.permission":{"collectionName":"up_permissions","info":{"name":"permission","description":"","singularName":"permission","pluralName":"permissions","displayName":"Permission"},"pluginOptions":{"content-manager":{"visible":false},"content-type-builder":{"visible":false}},"attributes":{"action":{"type":"string","required":true,"configurable":false},"role":{"type":"relation","relation":"manyToOne","target":"plugin::users-permissions.role","inversedBy":"permissions","configurable":false},"createdAt":{"type":"datetime"},"updatedAt":{"type":"datetime"},"createdBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true},"updatedBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true}},"kind":"collectionType","__schema__":{"collectionName":"up_permissions","info":{"name":"permission","description":"","singularName":"permission","pluralName":"permissions","displayName":"Permission"},"pluginOptions":{"content-manager":{"visible":false},"content-type-builder":{"visible":false}},"attributes":{"action":{"type":"string","required":true,"configurable":false},"role":{"type":"relation","relation":"manyToOne","target":"plugin::users-permissions.role","inversedBy":"permissions","configurable":false}},"kind":"collectionType"},"modelType":"contentType","modelName":"permission","connection":"default","uid":"plugin::users-permissions.permission","plugin":"users-permissions","globalId":"UsersPermissionsPermission"},"plugin::users-permissions.role":{"collectionName":"up_roles","info":{"name":"role","description":"","singularName":"role","pluralName":"roles","displayName":"Role"},"pluginOptions":{"content-manager":{"visible":false},"content-type-builder":{"visible":false}},"attributes":{"name":{"type":"string","minLength":3,"required":true,"configurable":false},"description":{"type":"string","configurable":false},"type":{"type":"string","unique":true,"configurable":false},"permissions":{"type":"relation","relation":"oneToMany","target":"plugin::users-permissions.permission","mappedBy":"role","configurable":false},"users":{"type":"relation","relation":"oneToMany","target":"plugin::users-permissions.user","mappedBy":"role","configurable":false},"createdAt":{"type":"datetime"},"updatedAt":{"type":"datetime"},"createdBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true},"updatedBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true}},"kind":"collectionType","__schema__":{"collectionName":"up_roles","info":{"name":"role","description":"","singularName":"role","pluralName":"roles","displayName":"Role"},"pluginOptions":{"content-manager":{"visible":false},"content-type-builder":{"visible":false}},"attributes":{"name":{"type":"string","minLength":3,"required":true,"configurable":false},"description":{"type":"string","configurable":false},"type":{"type":"string","unique":true,"configurable":false},"permissions":{"type":"relation","relation":"oneToMany","target":"plugin::users-permissions.permission","mappedBy":"role","configurable":false},"users":{"type":"relation","relation":"oneToMany","target":"plugin::users-permissions.user","mappedBy":"role","configurable":false}},"kind":"collectionType"},"modelType":"contentType","modelName":"role","connection":"default","uid":"plugin::users-permissions.role","plugin":"users-permissions","globalId":"UsersPermissionsRole"},"plugin::users-permissions.user":{"collectionName":"up_users","info":{"name":"user","description":"","singularName":"user","pluralName":"users","displayName":"User"},"options":{"draftAndPublish":false,"timestamps":true},"attributes":{"username":{"type":"string","minLength":3,"unique":true,"configurable":false,"required":true},"email":{"type":"email","minLength":6,"configurable":false,"required":true},"provider":{"type":"string","configurable":false},"password":{"type":"password","minLength":6,"configurable":false,"private":true,"searchable":false},"resetPasswordToken":{"type":"string","configurable":false,"private":true,"searchable":false},"confirmationToken":{"type":"string","configurable":false,"private":true,"searchable":false},"confirmed":{"type":"boolean","default":false,"configurable":false},"blocked":{"type":"boolean","default":false,"configurable":false},"role":{"type":"relation","relation":"manyToOne","target":"plugin::users-permissions.role","inversedBy":"users","configurable":false},"createdAt":{"type":"datetime"},"updatedAt":{"type":"datetime"},"createdBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true},"updatedBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true}},"config":{"attributes":{"resetPasswordToken":{"hidden":true},"confirmationToken":{"hidden":true},"provider":{"hidden":true}}},"kind":"collectionType","__schema__":{"collectionName":"up_users","info":{"name":"user","description":"","singularName":"user","pluralName":"users","displayName":"User"},"options":{"draftAndPublish":false,"timestamps":true},"attributes":{"username":{"type":"string","minLength":3,"unique":true,"configurable":false,"required":true},"email":{"type":"email","minLength":6,"configurable":false,"required":true},"provider":{"type":"string","configurable":false},"password":{"type":"password","minLength":6,"configurable":false,"private":true,"searchable":false},"resetPasswordToken":{"type":"string","configurable":false,"private":true,"searchable":false},"confirmationToken":{"type":"string","configurable":false,"private":true,"searchable":false},"confirmed":{"type":"boolean","default":false,"configurable":false},"blocked":{"type":"boolean","default":false,"configurable":false},"role":{"type":"relation","relation":"manyToOne","target":"plugin::users-permissions.role","inversedBy":"users","configurable":false}},"kind":"collectionType"},"modelType":"contentType","modelName":"user","connection":"default","uid":"plugin::users-permissions.user","plugin":"users-permissions","globalId":"UsersPermissionsUser"}}	object	\N	\N
24	core_admin_auth	{"providers":{"autoRegister":false,"defaultRole":null,"ssoLockedRoles":null}}	object	\N	\N
23	plugin_i18n_default_locale	"en"	string	\N	\N
26	plugin_content_manager_configuration_components::main.swiper	{"settings":{"bulkable":true,"filterable":true,"searchable":true,"pageSize":10,"mainField":"title","defaultSortBy":"title","defaultSortOrder":"ASC"},"metadatas":{"id":{"edit":{},"list":{"label":"id","searchable":false,"sortable":false}},"banner":{"edit":{"label":"banner","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"banner","searchable":false,"sortable":false}},"title":{"edit":{"label":"title","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"title","searchable":true,"sortable":true}},"text":{"edit":{"label":"text","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"text","searchable":true,"sortable":true}},"gallery":{"edit":{"label":"gallery","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"gallery","searchable":false,"sortable":false}}},"layouts":{"list":["id","banner","title","text"],"edit":[[{"name":"banner","size":6}],[{"name":"title","size":6},{"name":"text","size":6}],[{"name":"gallery","size":12}]]},"uid":"main.swiper","isComponent":true}	object	\N	\N
\.


--
-- Data for Name: strapi_database_schema; Type: TABLE DATA; Schema: public; Owner: fractal
--

COPY public.strapi_database_schema (id, schema, "time", hash) FROM stdin;
13	{"tables":[{"name":"strapi_core_store_settings","indexes":[],"foreignKeys":[],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"key","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"value","type":"text","args":["longtext"],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"type","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"environment","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"tag","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false}]},{"name":"strapi_webhooks","indexes":[],"foreignKeys":[],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"name","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"url","type":"text","args":["longtext"],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"headers","type":"jsonb","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"events","type":"jsonb","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"enabled","type":"boolean","args":[],"defaultTo":null,"notNullable":false,"unsigned":false}]},{"name":"admin_permissions","indexes":[{"name":"admin_permissions_created_by_id_fk","columns":["created_by_id"]},{"name":"admin_permissions_updated_by_id_fk","columns":["updated_by_id"]}],"foreignKeys":[{"name":"admin_permissions_created_by_id_fk","columns":["created_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"},{"name":"admin_permissions_updated_by_id_fk","columns":["updated_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"action","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"action_parameters","type":"jsonb","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"subject","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"properties","type":"jsonb","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"conditions","type":"jsonb","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"updated_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"updated_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"admin_users","indexes":[{"name":"admin_users_created_by_id_fk","columns":["created_by_id"]},{"name":"admin_users_updated_by_id_fk","columns":["updated_by_id"]}],"foreignKeys":[{"name":"admin_users_created_by_id_fk","columns":["created_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"},{"name":"admin_users_updated_by_id_fk","columns":["updated_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"firstname","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"lastname","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"username","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"email","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"password","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"reset_password_token","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"registration_token","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"is_active","type":"boolean","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"blocked","type":"boolean","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"prefered_language","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"updated_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"updated_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"admin_roles","indexes":[{"name":"admin_roles_created_by_id_fk","columns":["created_by_id"]},{"name":"admin_roles_updated_by_id_fk","columns":["updated_by_id"]}],"foreignKeys":[{"name":"admin_roles_created_by_id_fk","columns":["created_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"},{"name":"admin_roles_updated_by_id_fk","columns":["updated_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"name","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"code","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"description","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"updated_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"updated_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"strapi_api_tokens","indexes":[{"name":"strapi_api_tokens_created_by_id_fk","columns":["created_by_id"]},{"name":"strapi_api_tokens_updated_by_id_fk","columns":["updated_by_id"]}],"foreignKeys":[{"name":"strapi_api_tokens_created_by_id_fk","columns":["created_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"},{"name":"strapi_api_tokens_updated_by_id_fk","columns":["updated_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"name","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"description","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"type","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"access_key","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"last_used_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"expires_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"lifespan","type":"bigInteger","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"updated_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"updated_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"strapi_api_token_permissions","indexes":[{"name":"strapi_api_token_permissions_created_by_id_fk","columns":["created_by_id"]},{"name":"strapi_api_token_permissions_updated_by_id_fk","columns":["updated_by_id"]}],"foreignKeys":[{"name":"strapi_api_token_permissions_created_by_id_fk","columns":["created_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"},{"name":"strapi_api_token_permissions_updated_by_id_fk","columns":["updated_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"action","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"updated_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"updated_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"strapi_transfer_tokens","indexes":[{"name":"strapi_transfer_tokens_created_by_id_fk","columns":["created_by_id"]},{"name":"strapi_transfer_tokens_updated_by_id_fk","columns":["updated_by_id"]}],"foreignKeys":[{"name":"strapi_transfer_tokens_created_by_id_fk","columns":["created_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"},{"name":"strapi_transfer_tokens_updated_by_id_fk","columns":["updated_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"name","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"description","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"access_key","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"last_used_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"expires_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"lifespan","type":"bigInteger","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"updated_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"updated_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"strapi_transfer_token_permissions","indexes":[{"name":"strapi_transfer_token_permissions_created_by_id_fk","columns":["created_by_id"]},{"name":"strapi_transfer_token_permissions_updated_by_id_fk","columns":["updated_by_id"]}],"foreignKeys":[{"name":"strapi_transfer_token_permissions_created_by_id_fk","columns":["created_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"},{"name":"strapi_transfer_token_permissions_updated_by_id_fk","columns":["updated_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"action","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"updated_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"updated_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"mains","indexes":[{"name":"mains_created_by_id_fk","columns":["created_by_id"]},{"name":"mains_updated_by_id_fk","columns":["updated_by_id"]}],"foreignKeys":[{"name":"mains_created_by_id_fk","columns":["created_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"},{"name":"mains_updated_by_id_fk","columns":["updated_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"created_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"updated_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"published_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"updated_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"locale","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false}]},{"name":"files","indexes":[{"name":"upload_files_folder_path_index","columns":["folder_path"],"type":null},{"name":"upload_files_created_at_index","columns":["created_at"],"type":null},{"name":"upload_files_updated_at_index","columns":["updated_at"],"type":null},{"name":"upload_files_name_index","columns":["name"],"type":null},{"name":"upload_files_size_index","columns":["size"],"type":null},{"name":"upload_files_ext_index","columns":["ext"],"type":null},{"name":"files_created_by_id_fk","columns":["created_by_id"]},{"name":"files_updated_by_id_fk","columns":["updated_by_id"]}],"foreignKeys":[{"name":"files_created_by_id_fk","columns":["created_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"},{"name":"files_updated_by_id_fk","columns":["updated_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"name","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"alternative_text","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"caption","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"width","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"height","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"formats","type":"jsonb","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"hash","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"ext","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"mime","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"size","type":"decimal","args":[10,2],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"url","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"preview_url","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"provider","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"provider_metadata","type":"jsonb","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"folder_path","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"updated_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"updated_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"upload_folders","indexes":[{"name":"upload_folders_path_id_index","columns":["path_id"],"type":"unique"},{"name":"upload_folders_path_index","columns":["path"],"type":"unique"},{"name":"upload_folders_created_by_id_fk","columns":["created_by_id"]},{"name":"upload_folders_updated_by_id_fk","columns":["updated_by_id"]}],"foreignKeys":[{"name":"upload_folders_created_by_id_fk","columns":["created_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"},{"name":"upload_folders_updated_by_id_fk","columns":["updated_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"name","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"path_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"path","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"updated_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"updated_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"strapi_releases","indexes":[{"name":"strapi_releases_created_by_id_fk","columns":["created_by_id"]},{"name":"strapi_releases_updated_by_id_fk","columns":["updated_by_id"]}],"foreignKeys":[{"name":"strapi_releases_created_by_id_fk","columns":["created_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"},{"name":"strapi_releases_updated_by_id_fk","columns":["updated_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"name","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"released_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"scheduled_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"timezone","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"status","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"updated_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"updated_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"strapi_release_actions","indexes":[{"name":"strapi_release_actions_created_by_id_fk","columns":["created_by_id"]},{"name":"strapi_release_actions_updated_by_id_fk","columns":["updated_by_id"]}],"foreignKeys":[{"name":"strapi_release_actions_created_by_id_fk","columns":["created_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"},{"name":"strapi_release_actions_updated_by_id_fk","columns":["updated_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"type","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"target_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"target_type","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"content_type","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"locale","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"is_entry_valid","type":"boolean","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"updated_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"updated_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"i18n_locale","indexes":[{"name":"i18n_locale_created_by_id_fk","columns":["created_by_id"]},{"name":"i18n_locale_updated_by_id_fk","columns":["updated_by_id"]}],"foreignKeys":[{"name":"i18n_locale_created_by_id_fk","columns":["created_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"},{"name":"i18n_locale_updated_by_id_fk","columns":["updated_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"name","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"code","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"updated_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"updated_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"up_permissions","indexes":[{"name":"up_permissions_created_by_id_fk","columns":["created_by_id"]},{"name":"up_permissions_updated_by_id_fk","columns":["updated_by_id"]}],"foreignKeys":[{"name":"up_permissions_created_by_id_fk","columns":["created_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"},{"name":"up_permissions_updated_by_id_fk","columns":["updated_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"action","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"updated_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"updated_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"up_roles","indexes":[{"name":"up_roles_created_by_id_fk","columns":["created_by_id"]},{"name":"up_roles_updated_by_id_fk","columns":["updated_by_id"]}],"foreignKeys":[{"name":"up_roles_created_by_id_fk","columns":["created_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"},{"name":"up_roles_updated_by_id_fk","columns":["updated_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"name","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"description","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"type","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"updated_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"updated_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"up_users","indexes":[{"name":"up_users_created_by_id_fk","columns":["created_by_id"]},{"name":"up_users_updated_by_id_fk","columns":["updated_by_id"]}],"foreignKeys":[{"name":"up_users_created_by_id_fk","columns":["created_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"},{"name":"up_users_updated_by_id_fk","columns":["updated_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"username","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"email","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"provider","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"password","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"reset_password_token","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"confirmation_token","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"confirmed","type":"boolean","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"blocked","type":"boolean","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"updated_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"updated_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"components_main_galleries","indexes":[],"foreignKeys":[],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false}]},{"name":"components_main_letters","indexes":[],"foreignKeys":[],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"title","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false}]},{"name":"components_main_swipers","indexes":[],"foreignKeys":[],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"title","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"text","type":"text","args":["longtext"],"defaultTo":null,"notNullable":false,"unsigned":false}]},{"name":"admin_permissions_role_links","indexes":[{"name":"admin_permissions_role_links_fk","columns":["permission_id"]},{"name":"admin_permissions_role_links_inv_fk","columns":["role_id"]},{"name":"admin_permissions_role_links_unique","columns":["permission_id","role_id"],"type":"unique"},{"name":"admin_permissions_role_links_order_inv_fk","columns":["permission_order"]}],"foreignKeys":[{"name":"admin_permissions_role_links_fk","columns":["permission_id"],"referencedColumns":["id"],"referencedTable":"admin_permissions","onDelete":"CASCADE"},{"name":"admin_permissions_role_links_inv_fk","columns":["role_id"],"referencedColumns":["id"],"referencedTable":"admin_roles","onDelete":"CASCADE"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"permission_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"role_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"permission_order","type":"double","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"admin_users_roles_links","indexes":[{"name":"admin_users_roles_links_fk","columns":["user_id"]},{"name":"admin_users_roles_links_inv_fk","columns":["role_id"]},{"name":"admin_users_roles_links_unique","columns":["user_id","role_id"],"type":"unique"},{"name":"admin_users_roles_links_order_fk","columns":["role_order"]},{"name":"admin_users_roles_links_order_inv_fk","columns":["user_order"]}],"foreignKeys":[{"name":"admin_users_roles_links_fk","columns":["user_id"],"referencedColumns":["id"],"referencedTable":"admin_users","onDelete":"CASCADE"},{"name":"admin_users_roles_links_inv_fk","columns":["role_id"],"referencedColumns":["id"],"referencedTable":"admin_roles","onDelete":"CASCADE"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"user_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"role_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"role_order","type":"double","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"user_order","type":"double","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"strapi_api_token_permissions_token_links","indexes":[{"name":"strapi_api_token_permissions_token_links_fk","columns":["api_token_permission_id"]},{"name":"strapi_api_token_permissions_token_links_inv_fk","columns":["api_token_id"]},{"name":"strapi_api_token_permissions_token_links_unique","columns":["api_token_permission_id","api_token_id"],"type":"unique"},{"name":"strapi_api_token_permissions_token_links_order_inv_fk","columns":["api_token_permission_order"]}],"foreignKeys":[{"name":"strapi_api_token_permissions_token_links_fk","columns":["api_token_permission_id"],"referencedColumns":["id"],"referencedTable":"strapi_api_token_permissions","onDelete":"CASCADE"},{"name":"strapi_api_token_permissions_token_links_inv_fk","columns":["api_token_id"],"referencedColumns":["id"],"referencedTable":"strapi_api_tokens","onDelete":"CASCADE"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"api_token_permission_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"api_token_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"api_token_permission_order","type":"double","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"strapi_transfer_token_permissions_token_links","indexes":[{"name":"strapi_transfer_token_permissions_token_links_fk","columns":["transfer_token_permission_id"]},{"name":"strapi_transfer_token_permissions_token_links_inv_fk","columns":["transfer_token_id"]},{"name":"strapi_transfer_token_permissions_token_links_unique","columns":["transfer_token_permission_id","transfer_token_id"],"type":"unique"},{"name":"strapi_transfer_token_permissions_token_links_order_inv_fk","columns":["transfer_token_permission_order"]}],"foreignKeys":[{"name":"strapi_transfer_token_permissions_token_links_fk","columns":["transfer_token_permission_id"],"referencedColumns":["id"],"referencedTable":"strapi_transfer_token_permissions","onDelete":"CASCADE"},{"name":"strapi_transfer_token_permissions_token_links_inv_fk","columns":["transfer_token_id"],"referencedColumns":["id"],"referencedTable":"strapi_transfer_tokens","onDelete":"CASCADE"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"transfer_token_permission_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"transfer_token_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"transfer_token_permission_order","type":"double","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"mains_components","indexes":[{"name":"mains_field_index","columns":["field"]},{"name":"mains_component_type_index","columns":["component_type"]},{"name":"mains_entity_fk","columns":["entity_id"]},{"name":"mains_unique","columns":["entity_id","component_id","field","component_type"],"type":"unique"}],"foreignKeys":[{"name":"mains_entity_fk","columns":["entity_id"],"referencedColumns":["id"],"referencedTable":"mains","onDelete":"CASCADE"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"entity_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"component_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"component_type","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"field","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"order","type":"double","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"mains_localizations_links","indexes":[{"name":"mains_localizations_links_fk","columns":["main_id"]},{"name":"mains_localizations_links_inv_fk","columns":["inv_main_id"]},{"name":"mains_localizations_links_unique","columns":["main_id","inv_main_id"],"type":"unique"},{"name":"mains_localizations_links_order_fk","columns":["main_order"]}],"foreignKeys":[{"name":"mains_localizations_links_fk","columns":["main_id"],"referencedColumns":["id"],"referencedTable":"mains","onDelete":"CASCADE"},{"name":"mains_localizations_links_inv_fk","columns":["inv_main_id"],"referencedColumns":["id"],"referencedTable":"mains","onDelete":"CASCADE"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"main_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"inv_main_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"main_order","type":"double","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"files_related_morphs","indexes":[{"name":"files_related_morphs_fk","columns":["file_id"]},{"name":"files_related_morphs_order_index","columns":["order"]},{"name":"files_related_morphs_id_column_index","columns":["related_id"]}],"foreignKeys":[{"name":"files_related_morphs_fk","columns":["file_id"],"referencedColumns":["id"],"referencedTable":"files","onDelete":"CASCADE"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"file_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"related_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"related_type","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"field","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"order","type":"double","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"files_folder_links","indexes":[{"name":"files_folder_links_fk","columns":["file_id"]},{"name":"files_folder_links_inv_fk","columns":["folder_id"]},{"name":"files_folder_links_unique","columns":["file_id","folder_id"],"type":"unique"},{"name":"files_folder_links_order_inv_fk","columns":["file_order"]}],"foreignKeys":[{"name":"files_folder_links_fk","columns":["file_id"],"referencedColumns":["id"],"referencedTable":"files","onDelete":"CASCADE"},{"name":"files_folder_links_inv_fk","columns":["folder_id"],"referencedColumns":["id"],"referencedTable":"upload_folders","onDelete":"CASCADE"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"file_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"folder_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"file_order","type":"double","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"upload_folders_parent_links","indexes":[{"name":"upload_folders_parent_links_fk","columns":["folder_id"]},{"name":"upload_folders_parent_links_inv_fk","columns":["inv_folder_id"]},{"name":"upload_folders_parent_links_unique","columns":["folder_id","inv_folder_id"],"type":"unique"},{"name":"upload_folders_parent_links_order_inv_fk","columns":["folder_order"]}],"foreignKeys":[{"name":"upload_folders_parent_links_fk","columns":["folder_id"],"referencedColumns":["id"],"referencedTable":"upload_folders","onDelete":"CASCADE"},{"name":"upload_folders_parent_links_inv_fk","columns":["inv_folder_id"],"referencedColumns":["id"],"referencedTable":"upload_folders","onDelete":"CASCADE"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"folder_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"inv_folder_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"folder_order","type":"double","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"strapi_release_actions_release_links","indexes":[{"name":"strapi_release_actions_release_links_fk","columns":["release_action_id"]},{"name":"strapi_release_actions_release_links_inv_fk","columns":["release_id"]},{"name":"strapi_release_actions_release_links_unique","columns":["release_action_id","release_id"],"type":"unique"},{"name":"strapi_release_actions_release_links_order_inv_fk","columns":["release_action_order"]}],"foreignKeys":[{"name":"strapi_release_actions_release_links_fk","columns":["release_action_id"],"referencedColumns":["id"],"referencedTable":"strapi_release_actions","onDelete":"CASCADE"},{"name":"strapi_release_actions_release_links_inv_fk","columns":["release_id"],"referencedColumns":["id"],"referencedTable":"strapi_releases","onDelete":"CASCADE"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"release_action_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"release_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"release_action_order","type":"double","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"up_permissions_role_links","indexes":[{"name":"up_permissions_role_links_fk","columns":["permission_id"]},{"name":"up_permissions_role_links_inv_fk","columns":["role_id"]},{"name":"up_permissions_role_links_unique","columns":["permission_id","role_id"],"type":"unique"},{"name":"up_permissions_role_links_order_inv_fk","columns":["permission_order"]}],"foreignKeys":[{"name":"up_permissions_role_links_fk","columns":["permission_id"],"referencedColumns":["id"],"referencedTable":"up_permissions","onDelete":"CASCADE"},{"name":"up_permissions_role_links_inv_fk","columns":["role_id"],"referencedColumns":["id"],"referencedTable":"up_roles","onDelete":"CASCADE"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"permission_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"role_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"permission_order","type":"double","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"up_users_role_links","indexes":[{"name":"up_users_role_links_fk","columns":["user_id"]},{"name":"up_users_role_links_inv_fk","columns":["role_id"]},{"name":"up_users_role_links_unique","columns":["user_id","role_id"],"type":"unique"},{"name":"up_users_role_links_order_inv_fk","columns":["user_order"]}],"foreignKeys":[{"name":"up_users_role_links_fk","columns":["user_id"],"referencedColumns":["id"],"referencedTable":"up_users","onDelete":"CASCADE"},{"name":"up_users_role_links_inv_fk","columns":["role_id"],"referencedColumns":["id"],"referencedTable":"up_roles","onDelete":"CASCADE"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"user_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"role_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"user_order","type":"double","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]}]}	2024-07-02 10:51:18.584	5ee8ce77b6de68a7bd68bcb1bc1a1983
\.


--
-- Data for Name: strapi_migrations; Type: TABLE DATA; Schema: public; Owner: fractal
--

COPY public.strapi_migrations (id, name, "time") FROM stdin;
\.


--
-- Data for Name: strapi_release_actions; Type: TABLE DATA; Schema: public; Owner: fractal
--

COPY public.strapi_release_actions (id, type, target_id, target_type, content_type, locale, is_entry_valid, created_at, updated_at, created_by_id, updated_by_id) FROM stdin;
\.


--
-- Data for Name: strapi_release_actions_release_links; Type: TABLE DATA; Schema: public; Owner: fractal
--

COPY public.strapi_release_actions_release_links (id, release_action_id, release_id, release_action_order) FROM stdin;
\.


--
-- Data for Name: strapi_releases; Type: TABLE DATA; Schema: public; Owner: fractal
--

COPY public.strapi_releases (id, name, released_at, scheduled_at, timezone, status, created_at, updated_at, created_by_id, updated_by_id) FROM stdin;
\.


--
-- Data for Name: strapi_transfer_token_permissions; Type: TABLE DATA; Schema: public; Owner: fractal
--

COPY public.strapi_transfer_token_permissions (id, action, created_at, updated_at, created_by_id, updated_by_id) FROM stdin;
\.


--
-- Data for Name: strapi_transfer_token_permissions_token_links; Type: TABLE DATA; Schema: public; Owner: fractal
--

COPY public.strapi_transfer_token_permissions_token_links (id, transfer_token_permission_id, transfer_token_id, transfer_token_permission_order) FROM stdin;
\.


--
-- Data for Name: strapi_transfer_tokens; Type: TABLE DATA; Schema: public; Owner: fractal
--

COPY public.strapi_transfer_tokens (id, name, description, access_key, last_used_at, expires_at, lifespan, created_at, updated_at, created_by_id, updated_by_id) FROM stdin;
\.


--
-- Data for Name: strapi_webhooks; Type: TABLE DATA; Schema: public; Owner: fractal
--

COPY public.strapi_webhooks (id, name, url, headers, events, enabled) FROM stdin;
\.


--
-- Data for Name: up_permissions; Type: TABLE DATA; Schema: public; Owner: fractal
--

COPY public.up_permissions (id, action, created_at, updated_at, created_by_id, updated_by_id) FROM stdin;
1	plugin::users-permissions.user.me	2024-06-22 11:32:30.989	2024-06-22 11:32:30.989	\N	\N
2	plugin::users-permissions.auth.changePassword	2024-06-22 11:32:30.989	2024-06-22 11:32:30.989	\N	\N
3	plugin::users-permissions.auth.callback	2024-06-22 11:32:31.006	2024-06-22 11:32:31.006	\N	\N
4	plugin::users-permissions.auth.connect	2024-06-22 11:32:31.006	2024-06-22 11:32:31.006	\N	\N
5	plugin::users-permissions.auth.forgotPassword	2024-06-22 11:32:31.006	2024-06-22 11:32:31.006	\N	\N
6	plugin::users-permissions.auth.register	2024-06-22 11:32:31.006	2024-06-22 11:32:31.006	\N	\N
7	plugin::users-permissions.auth.resetPassword	2024-06-22 11:32:31.006	2024-06-22 11:32:31.006	\N	\N
8	plugin::users-permissions.auth.emailConfirmation	2024-06-22 11:32:31.006	2024-06-22 11:32:31.006	\N	\N
9	plugin::users-permissions.auth.sendEmailConfirmation	2024-06-22 11:32:31.006	2024-06-22 11:32:31.006	\N	\N
11	api::main.main.find	2024-06-23 17:08:41.925	2024-06-23 17:08:41.925	\N	\N
\.


--
-- Data for Name: up_permissions_role_links; Type: TABLE DATA; Schema: public; Owner: fractal
--

COPY public.up_permissions_role_links (id, permission_id, role_id, permission_order) FROM stdin;
1	1	1	1
2	2	1	1
3	3	2	1
4	4	2	1
5	7	2	1
6	6	2	1
7	5	2	1
8	8	2	1
9	9	2	1
11	11	2	2
\.


--
-- Data for Name: up_roles; Type: TABLE DATA; Schema: public; Owner: fractal
--

COPY public.up_roles (id, name, description, type, created_at, updated_at, created_by_id, updated_by_id) FROM stdin;
1	Authenticated	Default role given to authenticated user.	authenticated	2024-06-22 11:32:30.964	2024-06-22 11:32:30.964	\N	\N
2	Public	Default role given to unauthenticated user.	public	2024-06-22 11:32:30.971	2024-06-23 19:31:51.632	\N	\N
\.


--
-- Data for Name: up_users; Type: TABLE DATA; Schema: public; Owner: fractal
--

COPY public.up_users (id, username, email, provider, password, reset_password_token, confirmation_token, confirmed, blocked, created_at, updated_at, created_by_id, updated_by_id) FROM stdin;
\.


--
-- Data for Name: up_users_role_links; Type: TABLE DATA; Schema: public; Owner: fractal
--

COPY public.up_users_role_links (id, user_id, role_id, user_order) FROM stdin;
\.


--
-- Data for Name: upload_folders; Type: TABLE DATA; Schema: public; Owner: fractal
--

COPY public.upload_folders (id, name, path_id, path, created_at, updated_at, created_by_id, updated_by_id) FROM stdin;
1	Letters	1	/1	2024-06-25 12:13:05.341	2024-06-25 12:13:05.341	1	1
2	Image	2	/1/2	2024-06-25 15:01:27.886	2024-06-25 15:01:27.886	1	1
3	File	3	/1/3	2024-06-25 15:01:32.967	2024-06-25 15:01:32.967	1	1
4	Projects	4	/4	2024-07-02 06:39:12.747	2024-07-02 06:39:12.747	1	1
5	Gulfood	5	/4/5	2024-07-02 06:39:38.943	2024-07-02 06:39:38.943	1	1
6	ROSUPACK	6	/4/6	2024-07-02 06:39:53.663	2024-07-02 06:39:53.663	1	1
\.


--
-- Data for Name: upload_folders_parent_links; Type: TABLE DATA; Schema: public; Owner: fractal
--

COPY public.upload_folders_parent_links (id, folder_id, inv_folder_id, folder_order) FROM stdin;
1	2	1	1
2	3	1	2
3	5	4	1
4	6	4	2
\.


--
-- Name: admin_permissions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: fractal
--

SELECT pg_catalog.setval('public.admin_permissions_id_seq', 111, true);


--
-- Name: admin_permissions_role_links_id_seq; Type: SEQUENCE SET; Schema: public; Owner: fractal
--

SELECT pg_catalog.setval('public.admin_permissions_role_links_id_seq', 116, true);


--
-- Name: admin_roles_id_seq; Type: SEQUENCE SET; Schema: public; Owner: fractal
--

SELECT pg_catalog.setval('public.admin_roles_id_seq', 3, true);


--
-- Name: admin_users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: fractal
--

SELECT pg_catalog.setval('public.admin_users_id_seq', 4, true);


--
-- Name: admin_users_roles_links_id_seq; Type: SEQUENCE SET; Schema: public; Owner: fractal
--

SELECT pg_catalog.setval('public.admin_users_roles_links_id_seq', 7, true);


--
-- Name: components_main_galleries_id_seq; Type: SEQUENCE SET; Schema: public; Owner: fractal
--

SELECT pg_catalog.setval('public.components_main_galleries_id_seq', 8, true);


--
-- Name: components_main_letters_id_seq; Type: SEQUENCE SET; Schema: public; Owner: fractal
--

SELECT pg_catalog.setval('public.components_main_letters_id_seq', 10, true);


--
-- Name: components_main_swipers_id_seq; Type: SEQUENCE SET; Schema: public; Owner: fractal
--

SELECT pg_catalog.setval('public.components_main_swipers_id_seq', 22, true);


--
-- Name: files_folder_links_id_seq; Type: SEQUENCE SET; Schema: public; Owner: fractal
--

SELECT pg_catalog.setval('public.files_folder_links_id_seq', 27, true);


--
-- Name: files_id_seq; Type: SEQUENCE SET; Schema: public; Owner: fractal
--

SELECT pg_catalog.setval('public.files_id_seq', 49, true);


--
-- Name: files_related_morphs_id_seq; Type: SEQUENCE SET; Schema: public; Owner: fractal
--

SELECT pg_catalog.setval('public.files_related_morphs_id_seq', 1371, true);


--
-- Name: i18n_locale_id_seq; Type: SEQUENCE SET; Schema: public; Owner: fractal
--

SELECT pg_catalog.setval('public.i18n_locale_id_seq', 2, true);


--
-- Name: mains_components_id_seq; Type: SEQUENCE SET; Schema: public; Owner: fractal
--

SELECT pg_catalog.setval('public.mains_components_id_seq', 488, true);


--
-- Name: mains_id_seq; Type: SEQUENCE SET; Schema: public; Owner: fractal
--

SELECT pg_catalog.setval('public.mains_id_seq', 2, true);


--
-- Name: mains_localizations_links_id_seq; Type: SEQUENCE SET; Schema: public; Owner: fractal
--

SELECT pg_catalog.setval('public.mains_localizations_links_id_seq', 2, true);


--
-- Name: strapi_api_token_permissions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: fractal
--

SELECT pg_catalog.setval('public.strapi_api_token_permissions_id_seq', 1, false);


--
-- Name: strapi_api_token_permissions_token_links_id_seq; Type: SEQUENCE SET; Schema: public; Owner: fractal
--

SELECT pg_catalog.setval('public.strapi_api_token_permissions_token_links_id_seq', 1, false);


--
-- Name: strapi_api_tokens_id_seq; Type: SEQUENCE SET; Schema: public; Owner: fractal
--

SELECT pg_catalog.setval('public.strapi_api_tokens_id_seq', 1, false);


--
-- Name: strapi_core_store_settings_id_seq; Type: SEQUENCE SET; Schema: public; Owner: fractal
--

SELECT pg_catalog.setval('public.strapi_core_store_settings_id_seq', 28, true);


--
-- Name: strapi_database_schema_id_seq; Type: SEQUENCE SET; Schema: public; Owner: fractal
--

SELECT pg_catalog.setval('public.strapi_database_schema_id_seq', 13, true);


--
-- Name: strapi_migrations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: fractal
--

SELECT pg_catalog.setval('public.strapi_migrations_id_seq', 1, false);


--
-- Name: strapi_release_actions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: fractal
--

SELECT pg_catalog.setval('public.strapi_release_actions_id_seq', 1, false);


--
-- Name: strapi_release_actions_release_links_id_seq; Type: SEQUENCE SET; Schema: public; Owner: fractal
--

SELECT pg_catalog.setval('public.strapi_release_actions_release_links_id_seq', 1, false);


--
-- Name: strapi_releases_id_seq; Type: SEQUENCE SET; Schema: public; Owner: fractal
--

SELECT pg_catalog.setval('public.strapi_releases_id_seq', 1, false);


--
-- Name: strapi_transfer_token_permissions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: fractal
--

SELECT pg_catalog.setval('public.strapi_transfer_token_permissions_id_seq', 1, false);


--
-- Name: strapi_transfer_token_permissions_token_links_id_seq; Type: SEQUENCE SET; Schema: public; Owner: fractal
--

SELECT pg_catalog.setval('public.strapi_transfer_token_permissions_token_links_id_seq', 1, false);


--
-- Name: strapi_transfer_tokens_id_seq; Type: SEQUENCE SET; Schema: public; Owner: fractal
--

SELECT pg_catalog.setval('public.strapi_transfer_tokens_id_seq', 1, false);


--
-- Name: strapi_webhooks_id_seq; Type: SEQUENCE SET; Schema: public; Owner: fractal
--

SELECT pg_catalog.setval('public.strapi_webhooks_id_seq', 1, false);


--
-- Name: up_permissions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: fractal
--

SELECT pg_catalog.setval('public.up_permissions_id_seq', 11, true);


--
-- Name: up_permissions_role_links_id_seq; Type: SEQUENCE SET; Schema: public; Owner: fractal
--

SELECT pg_catalog.setval('public.up_permissions_role_links_id_seq', 11, true);


--
-- Name: up_roles_id_seq; Type: SEQUENCE SET; Schema: public; Owner: fractal
--

SELECT pg_catalog.setval('public.up_roles_id_seq', 2, true);


--
-- Name: up_users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: fractal
--

SELECT pg_catalog.setval('public.up_users_id_seq', 1, false);


--
-- Name: up_users_role_links_id_seq; Type: SEQUENCE SET; Schema: public; Owner: fractal
--

SELECT pg_catalog.setval('public.up_users_role_links_id_seq', 1, false);


--
-- Name: upload_folders_id_seq; Type: SEQUENCE SET; Schema: public; Owner: fractal
--

SELECT pg_catalog.setval('public.upload_folders_id_seq', 6, true);


--
-- Name: upload_folders_parent_links_id_seq; Type: SEQUENCE SET; Schema: public; Owner: fractal
--

SELECT pg_catalog.setval('public.upload_folders_parent_links_id_seq', 4, true);


--
-- Name: admin_permissions admin_permissions_pkey; Type: CONSTRAINT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.admin_permissions
    ADD CONSTRAINT admin_permissions_pkey PRIMARY KEY (id);


--
-- Name: admin_permissions_role_links admin_permissions_role_links_pkey; Type: CONSTRAINT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.admin_permissions_role_links
    ADD CONSTRAINT admin_permissions_role_links_pkey PRIMARY KEY (id);


--
-- Name: admin_permissions_role_links admin_permissions_role_links_unique; Type: CONSTRAINT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.admin_permissions_role_links
    ADD CONSTRAINT admin_permissions_role_links_unique UNIQUE (permission_id, role_id);


--
-- Name: admin_roles admin_roles_pkey; Type: CONSTRAINT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.admin_roles
    ADD CONSTRAINT admin_roles_pkey PRIMARY KEY (id);


--
-- Name: admin_users admin_users_pkey; Type: CONSTRAINT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.admin_users
    ADD CONSTRAINT admin_users_pkey PRIMARY KEY (id);


--
-- Name: admin_users_roles_links admin_users_roles_links_pkey; Type: CONSTRAINT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.admin_users_roles_links
    ADD CONSTRAINT admin_users_roles_links_pkey PRIMARY KEY (id);


--
-- Name: admin_users_roles_links admin_users_roles_links_unique; Type: CONSTRAINT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.admin_users_roles_links
    ADD CONSTRAINT admin_users_roles_links_unique UNIQUE (user_id, role_id);


--
-- Name: components_main_galleries components_main_galleries_pkey; Type: CONSTRAINT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.components_main_galleries
    ADD CONSTRAINT components_main_galleries_pkey PRIMARY KEY (id);


--
-- Name: components_main_letters components_main_letters_pkey; Type: CONSTRAINT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.components_main_letters
    ADD CONSTRAINT components_main_letters_pkey PRIMARY KEY (id);


--
-- Name: components_main_swipers components_main_swipers_pkey; Type: CONSTRAINT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.components_main_swipers
    ADD CONSTRAINT components_main_swipers_pkey PRIMARY KEY (id);


--
-- Name: files_folder_links files_folder_links_pkey; Type: CONSTRAINT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.files_folder_links
    ADD CONSTRAINT files_folder_links_pkey PRIMARY KEY (id);


--
-- Name: files_folder_links files_folder_links_unique; Type: CONSTRAINT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.files_folder_links
    ADD CONSTRAINT files_folder_links_unique UNIQUE (file_id, folder_id);


--
-- Name: files files_pkey; Type: CONSTRAINT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.files
    ADD CONSTRAINT files_pkey PRIMARY KEY (id);


--
-- Name: files_related_morphs files_related_morphs_pkey; Type: CONSTRAINT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.files_related_morphs
    ADD CONSTRAINT files_related_morphs_pkey PRIMARY KEY (id);


--
-- Name: i18n_locale i18n_locale_pkey; Type: CONSTRAINT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.i18n_locale
    ADD CONSTRAINT i18n_locale_pkey PRIMARY KEY (id);


--
-- Name: mains_components mains_components_pkey; Type: CONSTRAINT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.mains_components
    ADD CONSTRAINT mains_components_pkey PRIMARY KEY (id);


--
-- Name: mains_localizations_links mains_localizations_links_pkey; Type: CONSTRAINT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.mains_localizations_links
    ADD CONSTRAINT mains_localizations_links_pkey PRIMARY KEY (id);


--
-- Name: mains_localizations_links mains_localizations_links_unique; Type: CONSTRAINT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.mains_localizations_links
    ADD CONSTRAINT mains_localizations_links_unique UNIQUE (main_id, inv_main_id);


--
-- Name: mains mains_pkey; Type: CONSTRAINT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.mains
    ADD CONSTRAINT mains_pkey PRIMARY KEY (id);


--
-- Name: mains_components mains_unique; Type: CONSTRAINT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.mains_components
    ADD CONSTRAINT mains_unique UNIQUE (entity_id, component_id, field, component_type);


--
-- Name: strapi_api_token_permissions strapi_api_token_permissions_pkey; Type: CONSTRAINT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.strapi_api_token_permissions
    ADD CONSTRAINT strapi_api_token_permissions_pkey PRIMARY KEY (id);


--
-- Name: strapi_api_token_permissions_token_links strapi_api_token_permissions_token_links_pkey; Type: CONSTRAINT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.strapi_api_token_permissions_token_links
    ADD CONSTRAINT strapi_api_token_permissions_token_links_pkey PRIMARY KEY (id);


--
-- Name: strapi_api_token_permissions_token_links strapi_api_token_permissions_token_links_unique; Type: CONSTRAINT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.strapi_api_token_permissions_token_links
    ADD CONSTRAINT strapi_api_token_permissions_token_links_unique UNIQUE (api_token_permission_id, api_token_id);


--
-- Name: strapi_api_tokens strapi_api_tokens_pkey; Type: CONSTRAINT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.strapi_api_tokens
    ADD CONSTRAINT strapi_api_tokens_pkey PRIMARY KEY (id);


--
-- Name: strapi_core_store_settings strapi_core_store_settings_pkey; Type: CONSTRAINT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.strapi_core_store_settings
    ADD CONSTRAINT strapi_core_store_settings_pkey PRIMARY KEY (id);


--
-- Name: strapi_database_schema strapi_database_schema_pkey; Type: CONSTRAINT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.strapi_database_schema
    ADD CONSTRAINT strapi_database_schema_pkey PRIMARY KEY (id);


--
-- Name: strapi_migrations strapi_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.strapi_migrations
    ADD CONSTRAINT strapi_migrations_pkey PRIMARY KEY (id);


--
-- Name: strapi_release_actions strapi_release_actions_pkey; Type: CONSTRAINT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.strapi_release_actions
    ADD CONSTRAINT strapi_release_actions_pkey PRIMARY KEY (id);


--
-- Name: strapi_release_actions_release_links strapi_release_actions_release_links_pkey; Type: CONSTRAINT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.strapi_release_actions_release_links
    ADD CONSTRAINT strapi_release_actions_release_links_pkey PRIMARY KEY (id);


--
-- Name: strapi_release_actions_release_links strapi_release_actions_release_links_unique; Type: CONSTRAINT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.strapi_release_actions_release_links
    ADD CONSTRAINT strapi_release_actions_release_links_unique UNIQUE (release_action_id, release_id);


--
-- Name: strapi_releases strapi_releases_pkey; Type: CONSTRAINT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.strapi_releases
    ADD CONSTRAINT strapi_releases_pkey PRIMARY KEY (id);


--
-- Name: strapi_transfer_token_permissions strapi_transfer_token_permissions_pkey; Type: CONSTRAINT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.strapi_transfer_token_permissions
    ADD CONSTRAINT strapi_transfer_token_permissions_pkey PRIMARY KEY (id);


--
-- Name: strapi_transfer_token_permissions_token_links strapi_transfer_token_permissions_token_links_pkey; Type: CONSTRAINT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.strapi_transfer_token_permissions_token_links
    ADD CONSTRAINT strapi_transfer_token_permissions_token_links_pkey PRIMARY KEY (id);


--
-- Name: strapi_transfer_token_permissions_token_links strapi_transfer_token_permissions_token_links_unique; Type: CONSTRAINT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.strapi_transfer_token_permissions_token_links
    ADD CONSTRAINT strapi_transfer_token_permissions_token_links_unique UNIQUE (transfer_token_permission_id, transfer_token_id);


--
-- Name: strapi_transfer_tokens strapi_transfer_tokens_pkey; Type: CONSTRAINT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.strapi_transfer_tokens
    ADD CONSTRAINT strapi_transfer_tokens_pkey PRIMARY KEY (id);


--
-- Name: strapi_webhooks strapi_webhooks_pkey; Type: CONSTRAINT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.strapi_webhooks
    ADD CONSTRAINT strapi_webhooks_pkey PRIMARY KEY (id);


--
-- Name: up_permissions up_permissions_pkey; Type: CONSTRAINT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.up_permissions
    ADD CONSTRAINT up_permissions_pkey PRIMARY KEY (id);


--
-- Name: up_permissions_role_links up_permissions_role_links_pkey; Type: CONSTRAINT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.up_permissions_role_links
    ADD CONSTRAINT up_permissions_role_links_pkey PRIMARY KEY (id);


--
-- Name: up_permissions_role_links up_permissions_role_links_unique; Type: CONSTRAINT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.up_permissions_role_links
    ADD CONSTRAINT up_permissions_role_links_unique UNIQUE (permission_id, role_id);


--
-- Name: up_roles up_roles_pkey; Type: CONSTRAINT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.up_roles
    ADD CONSTRAINT up_roles_pkey PRIMARY KEY (id);


--
-- Name: up_users up_users_pkey; Type: CONSTRAINT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.up_users
    ADD CONSTRAINT up_users_pkey PRIMARY KEY (id);


--
-- Name: up_users_role_links up_users_role_links_pkey; Type: CONSTRAINT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.up_users_role_links
    ADD CONSTRAINT up_users_role_links_pkey PRIMARY KEY (id);


--
-- Name: up_users_role_links up_users_role_links_unique; Type: CONSTRAINT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.up_users_role_links
    ADD CONSTRAINT up_users_role_links_unique UNIQUE (user_id, role_id);


--
-- Name: upload_folders_parent_links upload_folders_parent_links_pkey; Type: CONSTRAINT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.upload_folders_parent_links
    ADD CONSTRAINT upload_folders_parent_links_pkey PRIMARY KEY (id);


--
-- Name: upload_folders_parent_links upload_folders_parent_links_unique; Type: CONSTRAINT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.upload_folders_parent_links
    ADD CONSTRAINT upload_folders_parent_links_unique UNIQUE (folder_id, inv_folder_id);


--
-- Name: upload_folders upload_folders_path_id_index; Type: CONSTRAINT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.upload_folders
    ADD CONSTRAINT upload_folders_path_id_index UNIQUE (path_id);


--
-- Name: upload_folders upload_folders_path_index; Type: CONSTRAINT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.upload_folders
    ADD CONSTRAINT upload_folders_path_index UNIQUE (path);


--
-- Name: upload_folders upload_folders_pkey; Type: CONSTRAINT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.upload_folders
    ADD CONSTRAINT upload_folders_pkey PRIMARY KEY (id);


--
-- Name: admin_permissions_created_by_id_fk; Type: INDEX; Schema: public; Owner: fractal
--

CREATE INDEX admin_permissions_created_by_id_fk ON public.admin_permissions USING btree (created_by_id);


--
-- Name: admin_permissions_role_links_fk; Type: INDEX; Schema: public; Owner: fractal
--

CREATE INDEX admin_permissions_role_links_fk ON public.admin_permissions_role_links USING btree (permission_id);


--
-- Name: admin_permissions_role_links_inv_fk; Type: INDEX; Schema: public; Owner: fractal
--

CREATE INDEX admin_permissions_role_links_inv_fk ON public.admin_permissions_role_links USING btree (role_id);


--
-- Name: admin_permissions_role_links_order_inv_fk; Type: INDEX; Schema: public; Owner: fractal
--

CREATE INDEX admin_permissions_role_links_order_inv_fk ON public.admin_permissions_role_links USING btree (permission_order);


--
-- Name: admin_permissions_updated_by_id_fk; Type: INDEX; Schema: public; Owner: fractal
--

CREATE INDEX admin_permissions_updated_by_id_fk ON public.admin_permissions USING btree (updated_by_id);


--
-- Name: admin_roles_created_by_id_fk; Type: INDEX; Schema: public; Owner: fractal
--

CREATE INDEX admin_roles_created_by_id_fk ON public.admin_roles USING btree (created_by_id);


--
-- Name: admin_roles_updated_by_id_fk; Type: INDEX; Schema: public; Owner: fractal
--

CREATE INDEX admin_roles_updated_by_id_fk ON public.admin_roles USING btree (updated_by_id);


--
-- Name: admin_users_created_by_id_fk; Type: INDEX; Schema: public; Owner: fractal
--

CREATE INDEX admin_users_created_by_id_fk ON public.admin_users USING btree (created_by_id);


--
-- Name: admin_users_roles_links_fk; Type: INDEX; Schema: public; Owner: fractal
--

CREATE INDEX admin_users_roles_links_fk ON public.admin_users_roles_links USING btree (user_id);


--
-- Name: admin_users_roles_links_inv_fk; Type: INDEX; Schema: public; Owner: fractal
--

CREATE INDEX admin_users_roles_links_inv_fk ON public.admin_users_roles_links USING btree (role_id);


--
-- Name: admin_users_roles_links_order_fk; Type: INDEX; Schema: public; Owner: fractal
--

CREATE INDEX admin_users_roles_links_order_fk ON public.admin_users_roles_links USING btree (role_order);


--
-- Name: admin_users_roles_links_order_inv_fk; Type: INDEX; Schema: public; Owner: fractal
--

CREATE INDEX admin_users_roles_links_order_inv_fk ON public.admin_users_roles_links USING btree (user_order);


--
-- Name: admin_users_updated_by_id_fk; Type: INDEX; Schema: public; Owner: fractal
--

CREATE INDEX admin_users_updated_by_id_fk ON public.admin_users USING btree (updated_by_id);


--
-- Name: files_created_by_id_fk; Type: INDEX; Schema: public; Owner: fractal
--

CREATE INDEX files_created_by_id_fk ON public.files USING btree (created_by_id);


--
-- Name: files_folder_links_fk; Type: INDEX; Schema: public; Owner: fractal
--

CREATE INDEX files_folder_links_fk ON public.files_folder_links USING btree (file_id);


--
-- Name: files_folder_links_inv_fk; Type: INDEX; Schema: public; Owner: fractal
--

CREATE INDEX files_folder_links_inv_fk ON public.files_folder_links USING btree (folder_id);


--
-- Name: files_folder_links_order_inv_fk; Type: INDEX; Schema: public; Owner: fractal
--

CREATE INDEX files_folder_links_order_inv_fk ON public.files_folder_links USING btree (file_order);


--
-- Name: files_related_morphs_fk; Type: INDEX; Schema: public; Owner: fractal
--

CREATE INDEX files_related_morphs_fk ON public.files_related_morphs USING btree (file_id);


--
-- Name: files_related_morphs_id_column_index; Type: INDEX; Schema: public; Owner: fractal
--

CREATE INDEX files_related_morphs_id_column_index ON public.files_related_morphs USING btree (related_id);


--
-- Name: files_related_morphs_order_index; Type: INDEX; Schema: public; Owner: fractal
--

CREATE INDEX files_related_morphs_order_index ON public.files_related_morphs USING btree ("order");


--
-- Name: files_updated_by_id_fk; Type: INDEX; Schema: public; Owner: fractal
--

CREATE INDEX files_updated_by_id_fk ON public.files USING btree (updated_by_id);


--
-- Name: i18n_locale_created_by_id_fk; Type: INDEX; Schema: public; Owner: fractal
--

CREATE INDEX i18n_locale_created_by_id_fk ON public.i18n_locale USING btree (created_by_id);


--
-- Name: i18n_locale_updated_by_id_fk; Type: INDEX; Schema: public; Owner: fractal
--

CREATE INDEX i18n_locale_updated_by_id_fk ON public.i18n_locale USING btree (updated_by_id);


--
-- Name: mains_component_type_index; Type: INDEX; Schema: public; Owner: fractal
--

CREATE INDEX mains_component_type_index ON public.mains_components USING btree (component_type);


--
-- Name: mains_created_by_id_fk; Type: INDEX; Schema: public; Owner: fractal
--

CREATE INDEX mains_created_by_id_fk ON public.mains USING btree (created_by_id);


--
-- Name: mains_entity_fk; Type: INDEX; Schema: public; Owner: fractal
--

CREATE INDEX mains_entity_fk ON public.mains_components USING btree (entity_id);


--
-- Name: mains_field_index; Type: INDEX; Schema: public; Owner: fractal
--

CREATE INDEX mains_field_index ON public.mains_components USING btree (field);


--
-- Name: mains_localizations_links_fk; Type: INDEX; Schema: public; Owner: fractal
--

CREATE INDEX mains_localizations_links_fk ON public.mains_localizations_links USING btree (main_id);


--
-- Name: mains_localizations_links_inv_fk; Type: INDEX; Schema: public; Owner: fractal
--

CREATE INDEX mains_localizations_links_inv_fk ON public.mains_localizations_links USING btree (inv_main_id);


--
-- Name: mains_localizations_links_order_fk; Type: INDEX; Schema: public; Owner: fractal
--

CREATE INDEX mains_localizations_links_order_fk ON public.mains_localizations_links USING btree (main_order);


--
-- Name: mains_updated_by_id_fk; Type: INDEX; Schema: public; Owner: fractal
--

CREATE INDEX mains_updated_by_id_fk ON public.mains USING btree (updated_by_id);


--
-- Name: strapi_api_token_permissions_created_by_id_fk; Type: INDEX; Schema: public; Owner: fractal
--

CREATE INDEX strapi_api_token_permissions_created_by_id_fk ON public.strapi_api_token_permissions USING btree (created_by_id);


--
-- Name: strapi_api_token_permissions_token_links_fk; Type: INDEX; Schema: public; Owner: fractal
--

CREATE INDEX strapi_api_token_permissions_token_links_fk ON public.strapi_api_token_permissions_token_links USING btree (api_token_permission_id);


--
-- Name: strapi_api_token_permissions_token_links_inv_fk; Type: INDEX; Schema: public; Owner: fractal
--

CREATE INDEX strapi_api_token_permissions_token_links_inv_fk ON public.strapi_api_token_permissions_token_links USING btree (api_token_id);


--
-- Name: strapi_api_token_permissions_token_links_order_inv_fk; Type: INDEX; Schema: public; Owner: fractal
--

CREATE INDEX strapi_api_token_permissions_token_links_order_inv_fk ON public.strapi_api_token_permissions_token_links USING btree (api_token_permission_order);


--
-- Name: strapi_api_token_permissions_updated_by_id_fk; Type: INDEX; Schema: public; Owner: fractal
--

CREATE INDEX strapi_api_token_permissions_updated_by_id_fk ON public.strapi_api_token_permissions USING btree (updated_by_id);


--
-- Name: strapi_api_tokens_created_by_id_fk; Type: INDEX; Schema: public; Owner: fractal
--

CREATE INDEX strapi_api_tokens_created_by_id_fk ON public.strapi_api_tokens USING btree (created_by_id);


--
-- Name: strapi_api_tokens_updated_by_id_fk; Type: INDEX; Schema: public; Owner: fractal
--

CREATE INDEX strapi_api_tokens_updated_by_id_fk ON public.strapi_api_tokens USING btree (updated_by_id);


--
-- Name: strapi_release_actions_created_by_id_fk; Type: INDEX; Schema: public; Owner: fractal
--

CREATE INDEX strapi_release_actions_created_by_id_fk ON public.strapi_release_actions USING btree (created_by_id);


--
-- Name: strapi_release_actions_release_links_fk; Type: INDEX; Schema: public; Owner: fractal
--

CREATE INDEX strapi_release_actions_release_links_fk ON public.strapi_release_actions_release_links USING btree (release_action_id);


--
-- Name: strapi_release_actions_release_links_inv_fk; Type: INDEX; Schema: public; Owner: fractal
--

CREATE INDEX strapi_release_actions_release_links_inv_fk ON public.strapi_release_actions_release_links USING btree (release_id);


--
-- Name: strapi_release_actions_release_links_order_inv_fk; Type: INDEX; Schema: public; Owner: fractal
--

CREATE INDEX strapi_release_actions_release_links_order_inv_fk ON public.strapi_release_actions_release_links USING btree (release_action_order);


--
-- Name: strapi_release_actions_updated_by_id_fk; Type: INDEX; Schema: public; Owner: fractal
--

CREATE INDEX strapi_release_actions_updated_by_id_fk ON public.strapi_release_actions USING btree (updated_by_id);


--
-- Name: strapi_releases_created_by_id_fk; Type: INDEX; Schema: public; Owner: fractal
--

CREATE INDEX strapi_releases_created_by_id_fk ON public.strapi_releases USING btree (created_by_id);


--
-- Name: strapi_releases_updated_by_id_fk; Type: INDEX; Schema: public; Owner: fractal
--

CREATE INDEX strapi_releases_updated_by_id_fk ON public.strapi_releases USING btree (updated_by_id);


--
-- Name: strapi_transfer_token_permissions_created_by_id_fk; Type: INDEX; Schema: public; Owner: fractal
--

CREATE INDEX strapi_transfer_token_permissions_created_by_id_fk ON public.strapi_transfer_token_permissions USING btree (created_by_id);


--
-- Name: strapi_transfer_token_permissions_token_links_fk; Type: INDEX; Schema: public; Owner: fractal
--

CREATE INDEX strapi_transfer_token_permissions_token_links_fk ON public.strapi_transfer_token_permissions_token_links USING btree (transfer_token_permission_id);


--
-- Name: strapi_transfer_token_permissions_token_links_inv_fk; Type: INDEX; Schema: public; Owner: fractal
--

CREATE INDEX strapi_transfer_token_permissions_token_links_inv_fk ON public.strapi_transfer_token_permissions_token_links USING btree (transfer_token_id);


--
-- Name: strapi_transfer_token_permissions_token_links_order_inv_fk; Type: INDEX; Schema: public; Owner: fractal
--

CREATE INDEX strapi_transfer_token_permissions_token_links_order_inv_fk ON public.strapi_transfer_token_permissions_token_links USING btree (transfer_token_permission_order);


--
-- Name: strapi_transfer_token_permissions_updated_by_id_fk; Type: INDEX; Schema: public; Owner: fractal
--

CREATE INDEX strapi_transfer_token_permissions_updated_by_id_fk ON public.strapi_transfer_token_permissions USING btree (updated_by_id);


--
-- Name: strapi_transfer_tokens_created_by_id_fk; Type: INDEX; Schema: public; Owner: fractal
--

CREATE INDEX strapi_transfer_tokens_created_by_id_fk ON public.strapi_transfer_tokens USING btree (created_by_id);


--
-- Name: strapi_transfer_tokens_updated_by_id_fk; Type: INDEX; Schema: public; Owner: fractal
--

CREATE INDEX strapi_transfer_tokens_updated_by_id_fk ON public.strapi_transfer_tokens USING btree (updated_by_id);


--
-- Name: up_permissions_created_by_id_fk; Type: INDEX; Schema: public; Owner: fractal
--

CREATE INDEX up_permissions_created_by_id_fk ON public.up_permissions USING btree (created_by_id);


--
-- Name: up_permissions_role_links_fk; Type: INDEX; Schema: public; Owner: fractal
--

CREATE INDEX up_permissions_role_links_fk ON public.up_permissions_role_links USING btree (permission_id);


--
-- Name: up_permissions_role_links_inv_fk; Type: INDEX; Schema: public; Owner: fractal
--

CREATE INDEX up_permissions_role_links_inv_fk ON public.up_permissions_role_links USING btree (role_id);


--
-- Name: up_permissions_role_links_order_inv_fk; Type: INDEX; Schema: public; Owner: fractal
--

CREATE INDEX up_permissions_role_links_order_inv_fk ON public.up_permissions_role_links USING btree (permission_order);


--
-- Name: up_permissions_updated_by_id_fk; Type: INDEX; Schema: public; Owner: fractal
--

CREATE INDEX up_permissions_updated_by_id_fk ON public.up_permissions USING btree (updated_by_id);


--
-- Name: up_roles_created_by_id_fk; Type: INDEX; Schema: public; Owner: fractal
--

CREATE INDEX up_roles_created_by_id_fk ON public.up_roles USING btree (created_by_id);


--
-- Name: up_roles_updated_by_id_fk; Type: INDEX; Schema: public; Owner: fractal
--

CREATE INDEX up_roles_updated_by_id_fk ON public.up_roles USING btree (updated_by_id);


--
-- Name: up_users_created_by_id_fk; Type: INDEX; Schema: public; Owner: fractal
--

CREATE INDEX up_users_created_by_id_fk ON public.up_users USING btree (created_by_id);


--
-- Name: up_users_role_links_fk; Type: INDEX; Schema: public; Owner: fractal
--

CREATE INDEX up_users_role_links_fk ON public.up_users_role_links USING btree (user_id);


--
-- Name: up_users_role_links_inv_fk; Type: INDEX; Schema: public; Owner: fractal
--

CREATE INDEX up_users_role_links_inv_fk ON public.up_users_role_links USING btree (role_id);


--
-- Name: up_users_role_links_order_inv_fk; Type: INDEX; Schema: public; Owner: fractal
--

CREATE INDEX up_users_role_links_order_inv_fk ON public.up_users_role_links USING btree (user_order);


--
-- Name: up_users_updated_by_id_fk; Type: INDEX; Schema: public; Owner: fractal
--

CREATE INDEX up_users_updated_by_id_fk ON public.up_users USING btree (updated_by_id);


--
-- Name: upload_files_created_at_index; Type: INDEX; Schema: public; Owner: fractal
--

CREATE INDEX upload_files_created_at_index ON public.files USING btree (created_at);


--
-- Name: upload_files_ext_index; Type: INDEX; Schema: public; Owner: fractal
--

CREATE INDEX upload_files_ext_index ON public.files USING btree (ext);


--
-- Name: upload_files_folder_path_index; Type: INDEX; Schema: public; Owner: fractal
--

CREATE INDEX upload_files_folder_path_index ON public.files USING btree (folder_path);


--
-- Name: upload_files_name_index; Type: INDEX; Schema: public; Owner: fractal
--

CREATE INDEX upload_files_name_index ON public.files USING btree (name);


--
-- Name: upload_files_size_index; Type: INDEX; Schema: public; Owner: fractal
--

CREATE INDEX upload_files_size_index ON public.files USING btree (size);


--
-- Name: upload_files_updated_at_index; Type: INDEX; Schema: public; Owner: fractal
--

CREATE INDEX upload_files_updated_at_index ON public.files USING btree (updated_at);


--
-- Name: upload_folders_created_by_id_fk; Type: INDEX; Schema: public; Owner: fractal
--

CREATE INDEX upload_folders_created_by_id_fk ON public.upload_folders USING btree (created_by_id);


--
-- Name: upload_folders_parent_links_fk; Type: INDEX; Schema: public; Owner: fractal
--

CREATE INDEX upload_folders_parent_links_fk ON public.upload_folders_parent_links USING btree (folder_id);


--
-- Name: upload_folders_parent_links_inv_fk; Type: INDEX; Schema: public; Owner: fractal
--

CREATE INDEX upload_folders_parent_links_inv_fk ON public.upload_folders_parent_links USING btree (inv_folder_id);


--
-- Name: upload_folders_parent_links_order_inv_fk; Type: INDEX; Schema: public; Owner: fractal
--

CREATE INDEX upload_folders_parent_links_order_inv_fk ON public.upload_folders_parent_links USING btree (folder_order);


--
-- Name: upload_folders_updated_by_id_fk; Type: INDEX; Schema: public; Owner: fractal
--

CREATE INDEX upload_folders_updated_by_id_fk ON public.upload_folders USING btree (updated_by_id);


--
-- Name: admin_permissions admin_permissions_created_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.admin_permissions
    ADD CONSTRAINT admin_permissions_created_by_id_fk FOREIGN KEY (created_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: admin_permissions_role_links admin_permissions_role_links_fk; Type: FK CONSTRAINT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.admin_permissions_role_links
    ADD CONSTRAINT admin_permissions_role_links_fk FOREIGN KEY (permission_id) REFERENCES public.admin_permissions(id) ON DELETE CASCADE;


--
-- Name: admin_permissions_role_links admin_permissions_role_links_inv_fk; Type: FK CONSTRAINT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.admin_permissions_role_links
    ADD CONSTRAINT admin_permissions_role_links_inv_fk FOREIGN KEY (role_id) REFERENCES public.admin_roles(id) ON DELETE CASCADE;


--
-- Name: admin_permissions admin_permissions_updated_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.admin_permissions
    ADD CONSTRAINT admin_permissions_updated_by_id_fk FOREIGN KEY (updated_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: admin_roles admin_roles_created_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.admin_roles
    ADD CONSTRAINT admin_roles_created_by_id_fk FOREIGN KEY (created_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: admin_roles admin_roles_updated_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.admin_roles
    ADD CONSTRAINT admin_roles_updated_by_id_fk FOREIGN KEY (updated_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: admin_users admin_users_created_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.admin_users
    ADD CONSTRAINT admin_users_created_by_id_fk FOREIGN KEY (created_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: admin_users_roles_links admin_users_roles_links_fk; Type: FK CONSTRAINT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.admin_users_roles_links
    ADD CONSTRAINT admin_users_roles_links_fk FOREIGN KEY (user_id) REFERENCES public.admin_users(id) ON DELETE CASCADE;


--
-- Name: admin_users_roles_links admin_users_roles_links_inv_fk; Type: FK CONSTRAINT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.admin_users_roles_links
    ADD CONSTRAINT admin_users_roles_links_inv_fk FOREIGN KEY (role_id) REFERENCES public.admin_roles(id) ON DELETE CASCADE;


--
-- Name: admin_users admin_users_updated_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.admin_users
    ADD CONSTRAINT admin_users_updated_by_id_fk FOREIGN KEY (updated_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: files files_created_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.files
    ADD CONSTRAINT files_created_by_id_fk FOREIGN KEY (created_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: files_folder_links files_folder_links_fk; Type: FK CONSTRAINT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.files_folder_links
    ADD CONSTRAINT files_folder_links_fk FOREIGN KEY (file_id) REFERENCES public.files(id) ON DELETE CASCADE;


--
-- Name: files_folder_links files_folder_links_inv_fk; Type: FK CONSTRAINT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.files_folder_links
    ADD CONSTRAINT files_folder_links_inv_fk FOREIGN KEY (folder_id) REFERENCES public.upload_folders(id) ON DELETE CASCADE;


--
-- Name: files_related_morphs files_related_morphs_fk; Type: FK CONSTRAINT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.files_related_morphs
    ADD CONSTRAINT files_related_morphs_fk FOREIGN KEY (file_id) REFERENCES public.files(id) ON DELETE CASCADE;


--
-- Name: files files_updated_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.files
    ADD CONSTRAINT files_updated_by_id_fk FOREIGN KEY (updated_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: i18n_locale i18n_locale_created_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.i18n_locale
    ADD CONSTRAINT i18n_locale_created_by_id_fk FOREIGN KEY (created_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: i18n_locale i18n_locale_updated_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.i18n_locale
    ADD CONSTRAINT i18n_locale_updated_by_id_fk FOREIGN KEY (updated_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: mains mains_created_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.mains
    ADD CONSTRAINT mains_created_by_id_fk FOREIGN KEY (created_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: mains_components mains_entity_fk; Type: FK CONSTRAINT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.mains_components
    ADD CONSTRAINT mains_entity_fk FOREIGN KEY (entity_id) REFERENCES public.mains(id) ON DELETE CASCADE;


--
-- Name: mains_localizations_links mains_localizations_links_fk; Type: FK CONSTRAINT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.mains_localizations_links
    ADD CONSTRAINT mains_localizations_links_fk FOREIGN KEY (main_id) REFERENCES public.mains(id) ON DELETE CASCADE;


--
-- Name: mains_localizations_links mains_localizations_links_inv_fk; Type: FK CONSTRAINT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.mains_localizations_links
    ADD CONSTRAINT mains_localizations_links_inv_fk FOREIGN KEY (inv_main_id) REFERENCES public.mains(id) ON DELETE CASCADE;


--
-- Name: mains mains_updated_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.mains
    ADD CONSTRAINT mains_updated_by_id_fk FOREIGN KEY (updated_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: strapi_api_token_permissions strapi_api_token_permissions_created_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.strapi_api_token_permissions
    ADD CONSTRAINT strapi_api_token_permissions_created_by_id_fk FOREIGN KEY (created_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: strapi_api_token_permissions_token_links strapi_api_token_permissions_token_links_fk; Type: FK CONSTRAINT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.strapi_api_token_permissions_token_links
    ADD CONSTRAINT strapi_api_token_permissions_token_links_fk FOREIGN KEY (api_token_permission_id) REFERENCES public.strapi_api_token_permissions(id) ON DELETE CASCADE;


--
-- Name: strapi_api_token_permissions_token_links strapi_api_token_permissions_token_links_inv_fk; Type: FK CONSTRAINT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.strapi_api_token_permissions_token_links
    ADD CONSTRAINT strapi_api_token_permissions_token_links_inv_fk FOREIGN KEY (api_token_id) REFERENCES public.strapi_api_tokens(id) ON DELETE CASCADE;


--
-- Name: strapi_api_token_permissions strapi_api_token_permissions_updated_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.strapi_api_token_permissions
    ADD CONSTRAINT strapi_api_token_permissions_updated_by_id_fk FOREIGN KEY (updated_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: strapi_api_tokens strapi_api_tokens_created_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.strapi_api_tokens
    ADD CONSTRAINT strapi_api_tokens_created_by_id_fk FOREIGN KEY (created_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: strapi_api_tokens strapi_api_tokens_updated_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.strapi_api_tokens
    ADD CONSTRAINT strapi_api_tokens_updated_by_id_fk FOREIGN KEY (updated_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: strapi_release_actions strapi_release_actions_created_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.strapi_release_actions
    ADD CONSTRAINT strapi_release_actions_created_by_id_fk FOREIGN KEY (created_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: strapi_release_actions_release_links strapi_release_actions_release_links_fk; Type: FK CONSTRAINT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.strapi_release_actions_release_links
    ADD CONSTRAINT strapi_release_actions_release_links_fk FOREIGN KEY (release_action_id) REFERENCES public.strapi_release_actions(id) ON DELETE CASCADE;


--
-- Name: strapi_release_actions_release_links strapi_release_actions_release_links_inv_fk; Type: FK CONSTRAINT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.strapi_release_actions_release_links
    ADD CONSTRAINT strapi_release_actions_release_links_inv_fk FOREIGN KEY (release_id) REFERENCES public.strapi_releases(id) ON DELETE CASCADE;


--
-- Name: strapi_release_actions strapi_release_actions_updated_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.strapi_release_actions
    ADD CONSTRAINT strapi_release_actions_updated_by_id_fk FOREIGN KEY (updated_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: strapi_releases strapi_releases_created_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.strapi_releases
    ADD CONSTRAINT strapi_releases_created_by_id_fk FOREIGN KEY (created_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: strapi_releases strapi_releases_updated_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.strapi_releases
    ADD CONSTRAINT strapi_releases_updated_by_id_fk FOREIGN KEY (updated_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: strapi_transfer_token_permissions strapi_transfer_token_permissions_created_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.strapi_transfer_token_permissions
    ADD CONSTRAINT strapi_transfer_token_permissions_created_by_id_fk FOREIGN KEY (created_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: strapi_transfer_token_permissions_token_links strapi_transfer_token_permissions_token_links_fk; Type: FK CONSTRAINT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.strapi_transfer_token_permissions_token_links
    ADD CONSTRAINT strapi_transfer_token_permissions_token_links_fk FOREIGN KEY (transfer_token_permission_id) REFERENCES public.strapi_transfer_token_permissions(id) ON DELETE CASCADE;


--
-- Name: strapi_transfer_token_permissions_token_links strapi_transfer_token_permissions_token_links_inv_fk; Type: FK CONSTRAINT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.strapi_transfer_token_permissions_token_links
    ADD CONSTRAINT strapi_transfer_token_permissions_token_links_inv_fk FOREIGN KEY (transfer_token_id) REFERENCES public.strapi_transfer_tokens(id) ON DELETE CASCADE;


--
-- Name: strapi_transfer_token_permissions strapi_transfer_token_permissions_updated_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.strapi_transfer_token_permissions
    ADD CONSTRAINT strapi_transfer_token_permissions_updated_by_id_fk FOREIGN KEY (updated_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: strapi_transfer_tokens strapi_transfer_tokens_created_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.strapi_transfer_tokens
    ADD CONSTRAINT strapi_transfer_tokens_created_by_id_fk FOREIGN KEY (created_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: strapi_transfer_tokens strapi_transfer_tokens_updated_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.strapi_transfer_tokens
    ADD CONSTRAINT strapi_transfer_tokens_updated_by_id_fk FOREIGN KEY (updated_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: up_permissions up_permissions_created_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.up_permissions
    ADD CONSTRAINT up_permissions_created_by_id_fk FOREIGN KEY (created_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: up_permissions_role_links up_permissions_role_links_fk; Type: FK CONSTRAINT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.up_permissions_role_links
    ADD CONSTRAINT up_permissions_role_links_fk FOREIGN KEY (permission_id) REFERENCES public.up_permissions(id) ON DELETE CASCADE;


--
-- Name: up_permissions_role_links up_permissions_role_links_inv_fk; Type: FK CONSTRAINT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.up_permissions_role_links
    ADD CONSTRAINT up_permissions_role_links_inv_fk FOREIGN KEY (role_id) REFERENCES public.up_roles(id) ON DELETE CASCADE;


--
-- Name: up_permissions up_permissions_updated_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.up_permissions
    ADD CONSTRAINT up_permissions_updated_by_id_fk FOREIGN KEY (updated_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: up_roles up_roles_created_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.up_roles
    ADD CONSTRAINT up_roles_created_by_id_fk FOREIGN KEY (created_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: up_roles up_roles_updated_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.up_roles
    ADD CONSTRAINT up_roles_updated_by_id_fk FOREIGN KEY (updated_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: up_users up_users_created_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.up_users
    ADD CONSTRAINT up_users_created_by_id_fk FOREIGN KEY (created_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: up_users_role_links up_users_role_links_fk; Type: FK CONSTRAINT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.up_users_role_links
    ADD CONSTRAINT up_users_role_links_fk FOREIGN KEY (user_id) REFERENCES public.up_users(id) ON DELETE CASCADE;


--
-- Name: up_users_role_links up_users_role_links_inv_fk; Type: FK CONSTRAINT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.up_users_role_links
    ADD CONSTRAINT up_users_role_links_inv_fk FOREIGN KEY (role_id) REFERENCES public.up_roles(id) ON DELETE CASCADE;


--
-- Name: up_users up_users_updated_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.up_users
    ADD CONSTRAINT up_users_updated_by_id_fk FOREIGN KEY (updated_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: upload_folders upload_folders_created_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.upload_folders
    ADD CONSTRAINT upload_folders_created_by_id_fk FOREIGN KEY (created_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: upload_folders_parent_links upload_folders_parent_links_fk; Type: FK CONSTRAINT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.upload_folders_parent_links
    ADD CONSTRAINT upload_folders_parent_links_fk FOREIGN KEY (folder_id) REFERENCES public.upload_folders(id) ON DELETE CASCADE;


--
-- Name: upload_folders_parent_links upload_folders_parent_links_inv_fk; Type: FK CONSTRAINT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.upload_folders_parent_links
    ADD CONSTRAINT upload_folders_parent_links_inv_fk FOREIGN KEY (inv_folder_id) REFERENCES public.upload_folders(id) ON DELETE CASCADE;


--
-- Name: upload_folders upload_folders_updated_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: fractal
--

ALTER TABLE ONLY public.upload_folders
    ADD CONSTRAINT upload_folders_updated_by_id_fk FOREIGN KEY (updated_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- PostgreSQL database dump complete
--

\unrestrict TmYysordyu2ih3pkMPfD4dOqMbdUUaFgYS48XANsiRLd1OgRfP76yVoDcld9qMN

--
-- PostgreSQL database cluster dump complete
--

