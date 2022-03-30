<?php
namespace dictionary\controllers;

class cIndex extends \ODBO
{
    protected $permissions = [
        'object' => 'any',
        'index' => 'any'
    ];

    public function index($params=[])
    {
        ob_start();
        include(__SELF__ . 'src/views/template.php');
        $output = ob_get_clean();
        echo $output;
        exit();
    }
}