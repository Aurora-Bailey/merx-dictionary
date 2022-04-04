<?php
namespace dictionary\data;

class dGetAllWordsWithDefinitions extends \ODBO
{
    public function customQuery($params=[])
    {
        return $this->route('/m/oDefinition/get/?with=word')->data;
    }
}