<?php
namespace dictionary\data;

class dAddDefinition extends \ODBO
{
    public function customQuery($params=[])
    {
        if(empty($params['word_id'])) throw new \Exception("word_id value is required.");
        if(empty($params['def_text'])) throw new \Exception("def_text value is required.");

        $this->route('/m/oDefinition/add/', [
                'word_id' => $params['word_id'],
                'def_text' => $params['def_text']
        ]);

        return $this->getFirst();
    }
}