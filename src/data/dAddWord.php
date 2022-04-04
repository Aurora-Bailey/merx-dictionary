<?php
namespace dictionary\data;

class dAddWord extends \ODBO
{
    public function customQuery($params=[])
    {
        if(empty($params['word_text'])) throw new \Exception("word_text value is required.");

        $this->route('/m/oWord/add/', [
                'word_text' => $params['word_text']
        ]);

        return $this->getFirst();
    }
}