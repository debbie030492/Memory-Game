        var picsArray = [
            "img/flag1.png",
            "img/flag2.png",
            "img/flag3.png",
            "img/flag4.png",
            "img/flag5.png",
            "img/flag6.png",
            "img/flag1.png",
            "img/flag2.png",
            "img/flag3.png",
            "img/flag4.png",
            "img/flag5.png",
            "img/flag6.png",
            ];

        var idsArray = [
            "#card00",
            "#card01",
            "#card02",
            "#card03",
            "#card04",
            "#card05",
            "#card06",
            "#card07",
            "#card08",
            "#card09",
            "#card10",
            "#card11"
        ];

        function newGame(){
            location.reload();
        };

        // --------------- SHUFFLE THE PICTURES -------------------

        function shuffle(a){
            var i, j = 0, x;

            for(i=a.length; i; i--){
                j=Math.floor(Math.random()*i);
                x =a[i-1];
                a[i-1] = a[j];
                a[j]=x;
            }
        }
        shuffle(picsArray);
        
        // --------------- MATCH THE PICTURES TO THE ID-------------------

        function matchCards(a,b){
            var i = 0;

            for (i=0; i<a.length; i++){
                    a[i]=b[i];
            }
        }

        matchCards(idsArray,picsArray);
        console.log(idsArray);

        // --------------- FLIP BACK THE CARD-------------------
        
        function flipBack(){
                                var cardn1 = document.getElementById(cardsIds[0]);
                                var cardn2 = document.getElementById(cardsIds[1]);
                                cardn1.classList.remove("flipped");
                                cardn2.classList.remove("flipped");
                                console.log(cardsIds[0]);
                                console.log(cardsIds[1]);
                                console.log(cardn1);
                                console.log(cardn2);

                                cardn1.innerHTML = "";
                                cardn1.style.backgroundImage = "url('img/flags.jpg')";
                                cardn2.innerHTML = "";
                                cardn2.style.backgroundImage = "url('img/flags.jpg')";
                            }
        
        // --------------- MAKE THE PICTURES APPEAR ON CLICK-------------------

        var cardsValues = [];
        var cardsIds = [];
        var cardsFlipped = 0;

        for (i=0; i<idsArray.length; i++){
                var card_num = 'card'+i;
                if(i<10){
                    card_num = 'card0' + i;
                }
                var card = document.getElementById(card_num);
                document.getElementById(card_num).addEventListener("click", cardAppear);  
            }

        function cardAppear(clickEvent){
            var cardElement = clickEvent.target;
            console.log(cardsValues);
            cardElement.classList.add("flipped");
            if (cardsValues.length<2){
                    var picture = document.createElement("img");
                    var i =cardElement.id[4] + cardElement.id[5];
                    i = parseInt(i);
                    picture.src = idsArray[i];
                    picture.id = "pic0"+i;
                    console.log(picture.id);
                    
                        picture.style.height = "120px";
                        picture.style.width = "90%";
                        picture.style.borderRadius = "10px";
                        picture.style.marginLeft = "13px";
                        picture.style.marginTop = "10px";
                        picture.style.border = "1px solid black";
                        
                    cardElement.appendChild(picture);

                    if(cardsValues.length == 0){
                        cardsValues.push(clickEvent.target);
                        cardsIds.push(cardElement.id);
                        console.log(cardsValues);
                        console.log(cardsIds);
                    }
                    else if(cardsValues.length ==1){
                        cardsValues.push(clickEvent.target);
                        cardsIds.push(cardElement.id);
                        console.log(cardsValues);
                        console.log(cardsIds);
                        
                        var image1= document.getElementById(cardsValues[0].id).getElementsByTagName('img')[0];
                        var image2 = document.getElementById(cardsValues[1].id).getElementsByTagName('img')[0];
                        console.log(image1);
                        console.log(image2);

                        if(image1.src == image2.src){
                            cardsFlipped += 2;
                            console.log("same");
                            console.log(cardsFlipped);
                            cardsValues = [];
                            cardsIds = [];
                        } else {
                            //setTimeout(flipBack,2000);
                            setTimeout(function(){
                                flipBack();
                                cardsValues = [];
                                cardsIds = [];
                            },300)
                        }
                        if (cardsFlipped == picsArray.length){
                            setTimeout(function(){alert("You won !!!! Do you want to play again ?");
                            newGame();
                            }, 500);
                        }
                    }
                }
                }
               
        
            


            
        

            
        

        

        

        