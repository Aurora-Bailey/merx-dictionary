<?php
namespace dictionary\data;

class dRemoveDefinition extends \ODBO
{
    public function customQuery($params=[])
    {
        if(empty($params['def_id'])) throw new \Exception("def_id value is required.");

        $this->route('/m/oDefinition/delete/', [
                'def_id' => $params['def_id']
        ]);

        return $this->getFirst();
    }
}