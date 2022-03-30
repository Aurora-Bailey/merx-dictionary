<?php
namespace dictionary\models;

class oExamples extends \ODBO
{
    protected $table = 'oExamples';
    protected $table_definition = [
        'oexample_id' =>    ['primary_key' => true],
        'oexample_name' =>  ['data_type' => 'varchar(50)'],
        'oexample_value' => ['data_type' => 'integer']
    ];
}