//using factory function an object is returned

function createRobot(name){
    return{
        name:name,
        tlak:function(){
            console.log('my name is '+name+',the robot.');
        }
    };
}
const robot1=createRobot('chitti');
robot1.tlak();
const robot2=createRobot('chitti 2.0');
robot2.tlak();

//output -
// my name is chitti,the robot.
// my name is chitti 2.0,the robot.

