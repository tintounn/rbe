<?php
/**
 * Created by PhpStorm.
 * User: tintounn
 * Date: 12/03/18
 * Time: 23:54
 */

namespace App;

class Autoloader{

    public static function register(){
        spl_autoload_register(array(__CLASS__, 'autoload'));
    }

    public static function autoload($class){
        $nameSpace = explode('\\', $class);
        $nameSpace = array_map('strtolower', $nameSpace);
        $i = count($nameSpace) - 1;
        $nameSpace[$i] = ucfirst($nameSpace[$i]);
        $class = implode('/', $nameSpace);
        require $class.'.php';
    }

}