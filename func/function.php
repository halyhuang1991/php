<?php
namespace F\subnamespace;
const FOO = 1;
function foo() 
{
  return "foo\r\n";
}
class foo 
{
  static function staticmethod()
  {
    $a="asa";
    return 'staticmethod'."\r\n" ;
  }
  function foofunction()
  {
    return "foofunction" . "\r\n" ;
  }
}
//测试单例模式
class Uni
{
  //创建静态私有的变量保存该类对象
  static private $instance;
  //参数
  private $config;
  //防止直接创建对象
  private function __construct($config)
  {
    $this->config = $config;
  }
  //防止克隆对象
  private function __clone()
  {

  }
  static public function getInstance($config)
  {
          //判断$instance是否是Uni的对象
          //没有则创建
    if (!self::$instance instanceof self) {
      self::$instance = new self($config);
    }
    return self::$instance;

  }
  public function getName()
  {
    return $this->config;
  }
}
?>