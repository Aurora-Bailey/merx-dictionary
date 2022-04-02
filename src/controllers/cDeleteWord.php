<?php
namespace dictionary\controllers;

class cDeleteWord extends \ODBO
{
    protected $permissions = [
        'object' => 'any',
        'index' => 'any'
    ];

    public function index($params=[])
    {
        ob_start();
        header('Content-Type: application/json; charset=utf-8');

        if(empty($params['word_id'])) throw new \Exception("word_id value is required.");

        echo json_encode($this->route('/m/oDictionaryWord/delete/', [
            'word_id' => $params['word_id']
        ])->getFirst());

        $output = ob_get_clean();
        echo $output;
        exit();
    }
}