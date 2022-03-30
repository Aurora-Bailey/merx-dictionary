<?php
define('__APP_TIMEZONE__', 'America/Denver');
date_default_timezone_set(__APP_TIMEZONE__);

/******************************************************
    DATABASE SETTINGS
******************************************************/

define('__OBRAY_DATABASE_HOST__', 'merx.cluster-c6wvc3qesd6h.us-west-2.rds.amazonaws.com');
define('__OBRAY_DATABASE_PORT__', '3306');
define('__OBRAY_DATABASE_USERNAME__', 'admin');
define('__OBRAY_DATABASE_PASSWORD__', 'nyvvaw-batmun-dytcU6');
define('__OBRAY_DATABASE_NAME__', 'dictionary-aurora');
define('__OBRAY_DATABASE_ENGINE__','InnoDB');
define('__OBRAY_DATABASE_CHARACTER_SET__','utf8mb4');
define('__NAMESPACE_ROOT__', 'src/');
define('DATABASE_CLIENT_IS_MARIA', false);

/******************************************************
    APPLICATION CONSTANTS
******************************************************/
define('__SITE_DIRECTORY__','/srv/www/dictionary');
define('__URL__','https://dictionary.aurora.merxsolutions.com');
define('__SELF__',__SITE_DIRECTORY__ . '/');
define('__OBRAY_APP_NAME__','dictionary');
define('__OBRAY_NAMESPACE_ROOT__', __SELF__ . "src/");
define('__OBRAY_SITE_ROOT__', __SELF__ );
define('__OBRAY_PATH_TO_CORE__',__SELF__.'vendor/obray/obray/core/');
define('__OBRAY_AUTHENTICATION_HEADER__', '__OBRAY_AUTHENTICATION_HEADER__');
define('__OBRAY_DEBUG_MODE__',FALSE);
define('__OBRAY_TOKEN__','');
define('__OBRAY_MAX_FAILED_LOGIN_ATTEMPTS__', 10);
define('__OBRAY_REMOTE_HOSTS__',serialize(array( )));
define('__OBRAY_USER_GROUPS__',serialize(array( )));
define('__OBRAY_ROUTES__',serialize( array(
	// Custom Routes
	"m" => __SELF__."models/",
    "d" => __SELF__."data/",
	// System Routes
	"obray" => __OBRAY_PATH_TO_CORE__ // do not change this
)));
define ("__OBRAY_DATATYPES__", serialize (array (
    "varchar"   =>          array("sql"=>" VARCHAR(size) COLLATE utf8_general_ci ",	"my_sql_type"=>"varchar(size)",		"validation_regex"=>""),
    "mediumtext"=>          array("sql"=>" MEDIUMTEXT COLLATE utf8_general_ci ",    "my_sql_type"=>"mediumtext",		"validation_regex"=>""),
    "text"      =>          array("sql"=>" TEXT COLLATE utf8_general_ci ",			"my_sql_type"=>"text",				"validation_regex"=>""),
    'integer'  	=>          array("sql"=>' int ',									"my_sql_type"=>"int(11)",			"validation_regex"=>'/^([+,-]?[0-9])*$/'),
    'uninteger'     =>      array('sql'=>' int(11) unsigned ',                      'my_sql_type'=>'int(11) unsigned',  'validation_regex'=>'/^([+,-]?[0-9])*$/'),
    "tinyUnsignedInt" =>    array( "sql" => " TINYINT UNSIGNED ZEROFILL ",          "my_sql_type"=>"tinyint(1)",        "validation_regex"=>""),
    "float"     =>          array("sql"=>" float ",									"my_sql_type"=>"float",				"validation_regex"=>"/[0-9\.]*/"),
    "boolean"   =>          array("sql"=>" boolean ",								"my_sql_type"=>"boolean",			"validation_regex"=>""),
    "datetime"  =>          array("sql"=>" datetime ",								"my_sql_type"=>"datetime",			"validation_regex"=>""),
    "date"  =>              array("sql"=>" date ",								    "my_sql_type"=>"date",			    "validation_regex"=>""),
    "datetimeMicro" =>      array("sql"=>" datetime(6) ",						    "my_sql_type"=>"datetime(6)",		"validation_regex"=>""),
    "decimal"  =>           array("sql"=>" decimal(10,2) ",							"my_sql_type"=>"decimal(10,2)",		"validation_regex"=>""),
    "password"  =>          array("sql"=>" varchar(255) ",							"my_sql_type"=>"varchar(255)",		"validation_regex"=>""),
    "time"  =>              array("sql"=>" TIME ",							        "my_sql_type"=>"time",		        "validation_regex"=>""),
)));
