<?php
namespace dictionary\data;

class dExamples extends \ODBO
{
    public function customQuery($params=[])
    {
        if(empty($params['oexample_value'])) throw new \Exception("Example value is required.");
        $this->run('SELECT * FROM oExamples WHERE oexample_value = :oexample_value', [
            ':oexample_value' => $params['oexample_value']
        ]);
        return $this->data;
    }
}