<?php
namespace dictionary\controllers;

class cUpdateWord extends \ODBO
{
    protected $permissions = [
        'object' => 'any',
        'index' => 'any'
    ];

    public function index($params=[])
    {
        ob_start();
        header('Content-Type: application/json; charset=utf-8');
        echo json_encode($this->route('/d/dUpdateWord')->customQuery($params));
        $output = ob_get_clean();
        echo $output;
        exit();
    }
}