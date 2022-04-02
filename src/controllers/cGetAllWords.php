<?php
namespace dictionary\controllers;

class cGetAllWords extends \ODBO
{
    protected $permissions = [
        'object' => 'any',
        'index' => 'any'
    ];

    public function index($params=[])
    {
        ob_start();
        header('Content-Type: application/json; charset=utf-8');

        echo json_encode($this->route('/m/oDictionaryWord/get/')->data);
        
        $output = ob_get_clean();
        echo $output;
        exit();
    }
}