<?php
namespace dictionary\data;

class dRemoveWord extends \ODBO
{
    public function customQuery($params=[])
    {
        if(empty($params['word_id'])) throw new \Exception("word_id value is required.");

        $this->route('/m/oWord/delete/', [
                'word_id' => $params['word_id']
        ]);

        return $this->getFirst();
    }
}