function lengthconverter(source,valueNum)
{
valnum=parsefloat(valnum);

<var inputcm = document.getElementByid("inputcm");

<var inputinches = document.getElementByid("inputinches");

<var inputfeet = document.getElementByid("inputfeet");

<var inputmeters = document.getElementByid("inputmeters");

<var inputkilometers = document.getElementByid("inputkilometers");



if (source == "inputcm"){
inputinches.value=(valueNum*0.39370).tofixed(2);

inputfeet.value=(valueNum*0.032808).tofixed(3);

inputmeters.value=(valnum/100).tofixed(3);

inputkilometers.value=(valnum/100000).tofixed(6);

}

if (source == "inputinches"){
 
inputcm.value=(valnum/0.39370).tofixed(2);

inputfeet.value=(valueNum*0.083333).tofixed(3);

inputmeters.value=(valnum/39.370).tofixed(3);

inputkilometers.value=(valnum/39370).tofixed(6);

}

if (source == "inputfeet")
{
  
inputmeters.value=(valnum/3.2808).tofixed(2);

inputinches.value=(valnum*12).tofixed(2);

inputcm.value=(valnum/0.032808).tofixed(2);

inputkilometers.value=(valnum/32808.8).tofixed(5);

}

if (source =="inputmeters")
{
 
inputfeet.value=(valnum*3.2808).tofixed(2);

inputinches.value=(valnum*39.370).tofixed(2);

inputcm.value=(valnum/0.01).tofixed();

inputkilometers.value=(valnum/1000).tofixed(5);
   
}

if (source=="inputkilometers")
{

inputfeet.value=(valnum*3.2808).tofixed();

inputmeters.value=(valnum*1000).tofixed();

inputinches.value=(valueNum*39370).tofixed();

inputcm.value=(valueNum*100000).tofixed();

}  