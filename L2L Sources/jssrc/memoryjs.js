var cards =
[
	// Round 1
	[
		{
			question_number: 1,
			type: "image",
			value: "single_pear.png",
			is_flipped: false
		},
		{
			question_number: 1,
			type: "text",
			value: "Pear",
			is_flipped: false
		},
		{
			question_number: 2,
			type: "image",
			value: "single_apple.png",
			is_flipped: false
		},	
		{
			question_number: 2,
			type: "text",
			value: "Apple",
			is_flipped: false
		},
		{
			question_number: 3,
			type: "image",
			value: "single_pineapple.png",
			is_flipped: false
		},
		{
			question_number: 3,
			type: "text",
			value: "Pineapple",
			is_flipped: false
		},
		{
			question_number: 4,
			type: "image",
			value: "single_orange.png",
			is_flipped: false
		},
		{
			question_number: 4,
			type: "text",
			value: "Orange",
			is_flipped: false
		},
		{
			question_number: 5,
			type: "image",
			value: "single_banana.png",
			is_flipped: false
		},
		{
			question_number: 5,
			type: "text",
			value: "Banana",
			is_flipped: false
		},
		{
			question_number: 6,
			type: "image",
			value: "single_strawberry.png",
			is_flipped: false
		},
		{
			question_number: 6,
			type: "text",
			value: "Strawberry",
			is_flipped: false
		}
	],
	
	// Round 2
	[
		{
			question_number: 1,
			type: "image",
			value: "elephant.png",
			is_flipped: false
		},
		{
			question_number: 1,
			type: "text",
			value: "Elephant",
			is_flipped: false
		},
		{
			question_number: 2,
			type: "image",
			value: "giraffe.png",
			is_flipped: false
		},	
		{
			question_number: 2,
			type: "text",
			value: "Giraffe",
			is_flipped: false
		},
		{
			question_number: 3,
			type: "image",
			value: "lion.png",
			is_flipped: false
		},
		{
			question_number: 3,
			type: "text",
			value: "Lion",
			is_flipped: false
		},
		{
			question_number: 4,
			type: "image",
			value: "zebra.png",
			is_flipped: false
		},
		{
			question_number: 4,
			type: "text",
			value: "Zebra",
			is_flipped: false
		},
		{
			question_number: 5,
			type: "image",
			value: "rhino.png",
			is_flipped: false
		},
		{
			question_number: 5,
			type: "text",
			value: "Rhino",
			is_flipped: false
		},
		{
			question_number: 6,
			type: "image",
			value: "gorilla.png",
			is_flipped: false
		},
		{
			question_number: 6,
			type: "text",
			value: "Gorilla",
			is_flipped: false
		}
	],
	
	//Round 3
	[
		{
			question_number: 1,
			type: "text",
			value: "3 + 2",
			is_flipped: false
		},
		{
			question_number: 1,
			type: "text",
			value: "= 5",
			is_flipped: false
		},
		{
			question_number: 2,
			type: "text",
			value: "2 + 1",
			is_flipped: false
		},	
		{
			question_number: 2,
			type: "text",
			value: "= 3",
			is_flipped: false
		},
		{
			question_number: 3,
			type: "text",
			value: "6 + 4",
			is_flipped: false
		},
		{
			question_number: 3,
			type: "text",
			value: "= 10",
			is_flipped: false
		},
		{
			question_number: 4,
			type: "text",
			value: "5 + 2",
			is_flipped: false
		},
		{
			question_number: 4,
			type: "text",
			value: "= 7",
			is_flipped: false
		},
		{
			question_number: 5,
			type: "text",
			value: "1 + 3",
			is_flipped: false
		},
		{
			question_number: 5,
			type: "text",
			value: "= 4",
			is_flipped: false
		},
		{
			question_number: 6,
			type: "text",
			value: "3 + 3",
			is_flipped: false
		},
		{
			question_number: 6,
			type: "text",
			value: "= 6",
			is_flipped: false
		}
	]
];

// the instructions for each round
var round_instructions = 
["Match the cards with the correct name of each fruit.",
"Match the cards with the correct name of each animal.",
"Match the cards with the correct sum."];

var cards_to_compare = [];  	// used to compare two cards at a time
var questions_answered = 0;     // used to check if all questions have been answered
var round_number = 0;           // used to see if all rounds have been completed
var current_round = [];         // used to store the array of cards for the current round number

// Randomly shuffles the cards
var shuffle_cards = function (array_of_cards) 
{
	var current_index = array_of_cards.length;
	var temporary_value, random_index;

	// While there remain elements to shuffle
	while (current_index !== 0) 
	{
		// Pick a remaining element...
		random_index = Math.floor(Math.random() * current_index);
		current_index -= 1;

		// And swap it with the current element.
		temporary_value = array_of_cards[current_index];
		array_of_cards[current_index] = array_of_cards[random_index];
		array_of_cards[random_index] = temporary_value;
	}
	return array_of_cards;
};

function load_board()
{
	questions_answered = 0;
	current_round = cards[round_number];
	var dynamic_html = '';
	dynamic_html += '<p><b>' + round_instructions[round_number] + '</b></p>';
	
    shuffle_cards(current_round);
	for(var i = 0; i < current_round.length; i++)
	{
		dynamic_html += '<div class="memory_question" id="card_'+i+'" onclick="flip_card(this,\''+ i +'\')"></div>';	
		current_round[i].div_id = "card_" + i; // creates new field for id
		current_round[i].card_number = i;		
	}
	document.getElementById('memory_game').innerHTML = dynamic_html;
}

function load_new_cards()
{
	alert("Round " + round_number + " Complete. Click OK to play next round.");
	document.getElementById('memory_game').innerHTML = "";
	load_board();
}
function win_game()
{
	alert("You win! Click OK to print your Certificate.");
	window.location = "print_certificate.html";
}

//if two cards are compared and don't match
//this will flip them back over
function flip_back_over()
{
    var card_one = document.getElementById(cards_to_compare[0].div_id);
	var card_two = document.getElementById(cards_to_compare[1].div_id);
					
	current_round[cards_to_compare[0].card_number].is_flipped = false;
	current_round[cards_to_compare[1].card_number].is_flipped = false;
					
	card_one.style.background = 'url(imgsrc/card.png) no-repeat';
    card_one.innerHTML = "";
	card_two.style.background = 'url(imgsrc/card.png) no-repeat';
    card_two.innerHTML = "";
									    
	cards_to_compare = [];
}

//Runs every time a card is clicked
function flip_card(selected_card, index)
{
	if(current_round[index].is_flipped == false && cards_to_compare.length <= 1)
	{
		// if the backside of the card is an image
		if(current_round[index].type == "image") 
		{
			var card_image = 'imgsrc/' + current_round[index].value; 
			selected_card.setAttribute("style", "background: white url(" + card_image + ") center no-repeat; ");
		}
		
		// if the backside of the card is text
		else if(current_round[index].type == "text") 
		{
			selected_card.style.background = '#FFF';
			selected_card.innerHTML = current_round[index].value;
		}
		
		current_round[index].is_flipped = true; 
		
		cards_to_compare.push(current_round[index]);
		
		if(cards_to_compare.length == 2) // if two cards have been selected
		{				
			// If the text on card 1 is the name of the image on card 2
			if(cards_to_compare[0].question_number == cards_to_compare[1].question_number)
			{
				questions_answered = questions_answered + 2;
				
				var card_1 = document.getElementById(cards_to_compare[0].div_id); 
				var card_2 = document.getElementById(cards_to_compare[1].div_id);
				
				card_1.style.borderColor = "rgba(255,0,0)";
				card_2.style.borderColor = "rgba(255,0,0)";
			
				cards_to_compare = [];
				
				// If all cards are flipped over
				if(questions_answered == current_round.length)
				{
					round_number = round_number + 1;
					if(round_number == 3)
					{
						//print certificate
						setTimeout(win_game, 800);
					}
					else
					{
						// load new set of cards
						setTimeout(load_new_cards, 800);
					}
				}
			} 
			else 
			{
				setTimeout(flip_back_over, 800);
			}
		}
	}	
}