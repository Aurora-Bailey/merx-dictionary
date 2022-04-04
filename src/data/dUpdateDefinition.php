<?php
namespace dictionary\data;

class dUpdateDefinition extends \ODBO
{
    public function customQuery($params=[])
    {
        if(empty($params['def_id'])) throw new \Exception("def_id value is required.");
        if(empty($params['def_text'])) throw new \Exception("def_text value is required.");

        $this->route('/m/oDefinition/update/', [
                'def_id' => $params['def_id'],
                'def_text' => $params['def_text']
        ]);

        return $this->getFirst();
    }
}