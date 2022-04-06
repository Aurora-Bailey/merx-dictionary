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
        $this->route('/d/dFoo')->index();
        // ob_start();
        // header('Content-Type: application/json; charset=utf-8');
        // echo json_encode($this->route('/d/dFoo')->index());
        // $output = ob_get_clean();
        // echo $output;
        // exit();
    }
}