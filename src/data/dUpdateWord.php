<?php
namespace dictionary\data;

class dUpdateWord extends \ODBO
{
    public function customQuery($params=[])
    {
        if(empty($params['word_id'])) throw new \Exception("word_id value is required.");
        if(empty($params['word_text'])) throw new \Exception("word_text value is required.");

        $this->route('/m/oWord/update/', [
                'word_id' => $params['word_id'],
                'word_text' => $params['word_text']
        ]);

        return $this->getFirst();
    }
}