<?php
namespace dictionary\models;

class oWord extends \ODBO
{
    protected $table = 'oDictionaryWord';
    protected $table_definition = [
        'word_id' =>    ['primary_key' => true],
        'word_text' =>  ['data_type' => 'text']
    ];
}