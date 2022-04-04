<?php
namespace dictionary\models;

class oDefinition extends \ODBO
{
    protected $table = 'oDefinition';
    protected $table_definition = [
        'def_id' =>    ['primary_key' => true],
        'word_id' =>   ['data_type' => 'uninteger', 
            'word' => 'word_id:/m/oWord/', 
            'foreign' => 'word_id:/m/oWord/'
        ],
        'def_text' =>  ['data_type' => 'text']
    ];

}