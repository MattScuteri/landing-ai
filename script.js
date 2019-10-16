// var canvas = document.getElementById('cavnas');
// var ctx = canvas.getContext('2d');

// canvas.width = innerWidth;
// canvas.height = innerHeight;


function init() {
    // module aliases
    var Engine = Matter.Engine
    var Render = Matter.Render
    var World = Matter.World
    var Bodies = Matter.Bodies;

    // create an engine
    var engine = Engine.create();

    // create a renderer
    var render = Render.create({
        element: document.body,
        engine: engine
    });

    // create two boxes and a ground
    var boxA = Bodies.rectangle(400, 200, 80, 80);
    var boxB = Bodies.rectangle(450, 50, 80, 80);
    var ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

    // add all of the bodies to the world
    World.add(engine.world, [boxA, boxB, ground]);

    // run the engine
    Engine.run(engine);

    // run the renderer
    Render.run(render);
}

init();