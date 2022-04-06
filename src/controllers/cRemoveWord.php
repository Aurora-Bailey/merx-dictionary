<?php
namespace dictionary\controllers;

class cRemoveWord extends \ODBO
{
    protected $permissions = [
        'object' => 'any',
        'index' => 'any'
    ];

    public function index($params=[])
    {
        $this->route('/d/dRemoveWord')->customQuery($params);
        // ob_start();
        // header('Content-Type: application/json; charset=utf-8');
        // echo json_encode($this->route('/d/dRemoveWord')->customQuery($params));
        // $output = ob_get_clean();
        // echo $output;
        // exit();
    }
}