<?php
namespace dictionary\models;

class oDefinition extends \ODBO
{
    protected $table = 'oDictionaryWord';
    protected $table_definition = [
        'def_id' =>    ['primary_key' => true],
        'def_word_id' => ['data_type' => 'uninteger', 'foreign' => 'oproduct_id:/m/oWord/'],
        'def_text' =>  ['data_type' => 'text']
    ];
}