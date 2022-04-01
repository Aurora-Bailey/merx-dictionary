<?php
namespace dictionary\controllers;

class cFoo extends \ODBO
{
    protected $permissions = [
        'object' => 'any',
        'index' => 'any'
    ];

    public function index($params=[])
    {
        ob_start();
        // header('Content-Type: application/json; charset=utf-8');
        // echo json_encode(['test' => 1]);
        // echo json_encode($this->route('/m/dFoo/index')->data);
        $myData = $this->route('/m/dFoo/index');
        print_r($myData->data);
        $output = ob_get_clean();
        echo $output;
        exit();
    }
}