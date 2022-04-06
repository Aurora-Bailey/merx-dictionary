<?php
namespace dictionary\controllers;

class cAddDefinition extends \ODBO
{
    protected $permissions = [
        'object' => 'any',
        'index' => 'any'
    ];

    public function index($params=[])
    {
        $this->data = $this->route('/d/dAddDefinition')->customQuery($params);
        // ob_start();
        // header('Content-Type: application/json; charset=utf-8');
        // echo json_encode($this->route('/d/dAddDefinition')->customQuery($params));
        // $output = ob_get_clean();
        // echo $output;
        // exit();
    }
}