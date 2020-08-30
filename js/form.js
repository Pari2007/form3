class Form {
  constructor() {}
  display() {
    color("red");
    var title = createElement("h1");
    title.html("Are we really Aware?");
    title.position(600, 100);
    title.style("color","White")
    title.style("textSize","30px")

    
    var Ques1 = createElement("h2");
    Ques1.html("A bank official calls you up asking for your account no, to check your account detalils, would you give? ");
    Ques1.position(450, 150);
    Ques1.style("color","White")
    var YES = createButton("YES");
    var nO = createButton("NO");
    YES.position(450, 240);
    nO.position(450, 200);
    YES.style("backgroundColor","BLUE")
    nO.style("backgroundColor","red")
    

    YES.mousePressed(function () {
      YES.hide();
      nO.hide();

      
    });
    nO.mousePressed(function () {
      YES.hide();
      nO.hide();

      
    });
    var Ques2 = createElement("h2");
    Ques2.html("Would you like to click onto a website 'http\\google.com? ");
    Ques2.position(450, 250);
    Ques2.style("color","White")
    var Yes1 = createButton("YES");
    var no1 = createButton("NO");
    Yes1.position(450, 340);
    no1.position(450, 300);
    Yes1.style("backgroundColor","BLUE")
    no1.style("backgroundColor","red")

    Yes1.mousePressed(function () {
      Yes1.hide();
     no1.hide();

    });
    no1.mousePressed(function () {
      Yes1.hide();
     no1.hide();

    });
    var Ques3 = createElement("h2");
    Ques3.html("Does your email have a two step verification?");
    Ques3.position(450, 350);
    Ques3.style("color","White")
    


    var Yes2 = createButton("YES");
  
    var No2= createButton("NO");
    Yes2.position(450, 440);
    No2.position(450, 400);
    Yes2.style("backgroundColor","BLUE")
    No2.style("backgroundColor","red")

    Yes2.mousePressed(function () {
     Yes2.hide();
      No2.hide();
    });
    No2.mousePressed(function () {
      Yes2.hide();
     No2.hide();

    });
    var Ques4 = createElement("h2");
    Ques4.html("Is your Location always switched on on your mobile phone?");
    Ques4.position(450, 450);
    Ques4.style("color","White")
    

    var yes3 = createButton("YES");
    var no3 = createButton("NO");
    yes3.position(450, 540);
    no3.position(450, 500);
    yes3.style("backgroundColor","BLUE")
    no3.style("backgroundColor","red")

    yes3.mousePressed(function () {
      yes3.hide();
      no3.hide();
    });
    no3.mousePressed(function () {
      yes3.hide();
      no3.hide();
    });
    var Ques5 = createElement("h2");
    Ques5.html("Do you know that all your activity on the internet is saved? ");
    Ques5.position(450, 550);
    Ques5.style("color","White")
    
    

    var yes4 = createButton("YES");
    var no4 = createButton("NO");
    yes4.position(450, 640);
    no4.position(450, 600);
    yes4.style("backgroundColor","BLUE")
    no4.style("backgroundColor","red")

    yes4.mousePressed(function () {
      no4.hide();
      yes4.hide();
    });
    no4.mousePressed(function () {
      no4.hide();
      yes4.hide();
    });
    var button6 = createButton("END!");
    button6.position(600, 750);
    button6.style("fontSize","20px")
    button6.style("color","orange")

    button6.mousePressed(function () {
      button6.hide();
      Ques1.hide();
      Ques2.hide();
      Ques3.hide();
      Ques4.hide();
      Ques5.hide();

  YES.hide();
  Yes1.hide();
  Yes2.hide();
  yes3.hide();
  yes4.hide();

  nO.hide();
  no1.hide()
  No2.hide();
  no3.hide();
  no4.hide();

  var info1 = createElement("h2");
  info1.html("Never give your bank detalis over a phone call, You may become a victim of a vishing attack!")
  info1.position(450, 150);
  info1.style("color","White")


  var info2 = createElement("h2");
  info2.html("Never click on unsecured websites'http' is an unsecured websites, always click on websites having 'https' as their prefix!")
  info2.position(450, 250);
  info2.style("color","White")


  var info3 = createElement("h2");
  info3.html("Always have a 2 step verification on your email id, or else you could be the next on who's email is hacked!")
  info3.position(450, 350);
  info3.style("color","White")


  var info4 = createElement("h2");
  info4.html("Never enable your location to always on reason being that anyone can track where you are!")
  info4.position(450, 450)
  info4.style("color","White")


  var info5 = createElement("h2");
  info5.html("Always disable your history anyone on the internet can have an access to what you do on the internet!")
  info5.position(450, 550);
  info5.style("color","White")


      var thankyou = createElement("h1");
      thankyou.html("Thank you for spending your valuable time!");
      thankyou.position(450, 750);
      thankyou.style("color","White");
      
    });
  }
}
