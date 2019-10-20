var Engine = Matter.Engine
var Render = Matter.Render
var World = Matter.World
var Bodies = Matter.Bodies;

window.onload = function() {
    var canvas = document.getElementById('canvas');

    canvas.height = innerHeight;
    canvas.width = innerWidth;
    
    // create an engine
    var engine = Engine.create();

    // create a renderer
    var render = Render.create({
        element: document.body,
        canvas: canvas,
        engine: engine,
        options: {
            width: canvas.width,
            height: canvas.height
        }
    });

    var ship = Bodies.polygon(400, 200, 3, 80, 80);
    var ground = Bodies.rectangle(400, 610, canvas.width, 60, { isStatic: true });

    // add all of the bodies to the world
    World.add(engine.world, [ship, ground]);

    // run the engine
    Engine.run(engine);

    // run the renderer
    Render.run(render);
}