class Form{
    constructor(){}
    
    display(){
        var title = createElement('h2');
        title.html("Car Racing Game");
        title.position(130,50);

        var input =  createInput("Name");
        var button = createButton("Play");
        var greeting = createElement('h3');

        input.position(130,200);
        button.position(250,300);

        button.mousePressed(function(){
            input.hide();
            button.hide();

            var name =  input.value();
            
            playerCount += 1;
            player.update(name);
            player.updateCount(playerCount);

            greeting.html("Hello " + name);
            greeting.position(130,160);
        })
    }
}
