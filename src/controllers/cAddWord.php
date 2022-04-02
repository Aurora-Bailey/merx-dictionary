<?php
namespace dictionary\controllers;

class cAddWord extends \ODBO
{
    protected $permissions = [
        'object' => 'any',
        'index' => 'any'
    ];

    public function index($params=[])
    {
        ob_start();
        header('Content-Type: application/json; charset=utf-8');

        if(empty($params['word_name'])) throw new \Exception("word_name value is required.");
        if(empty($params['word_definition'])) throw new \Exception("word_definition value is required.");

        echo json_encode($this->route('/m/oDictionaryWord/add/', [
            'word_name' => $params['word_name'],
            'word_definition' => $params['word_definition']
        ])->getFirst());
        
        $output = ob_get_clean();
        echo $output;
        exit();
    }
}