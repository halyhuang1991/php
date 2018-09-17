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
?>