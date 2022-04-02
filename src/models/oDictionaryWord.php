<?php
namespace dictionary\models;

class oDictionaryWord extends \ODBO
{
    protected $table = 'oDictionaryWord';
    protected $table_definition = [
        'word_id' =>    ['primary_key' => true],
        'word_name' =>  ['data_type' => 'varchar(50)'],
        'word_definition' => ['data_type' => 'text']
    ];
}