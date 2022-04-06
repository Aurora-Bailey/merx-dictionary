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
        $this->data = $this->route('/d/dAddWord')->customQuery($params);
        // ob_start();
        // header('Content-Type: application/json; charset=utf-8');
        // echo json_encode($this->route('/d/dAddWord')->customQuery($params));
        // $output = ob_get_clean();
        // echo $output;
        // exit();
    }
}