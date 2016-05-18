//hear is the bot just listening to something, not dependant on an @, if the text is typed it sends
/*module.exports = function(robot) {
	robot.hear(/These boots/, function(response){
		return response.send('...are made for walkin');
	})
}*/

//respond is a call to the bot so you bot responds
/*module.exports = function(robot) {
	robot.respond(/Hi Nancy! My name is (.*)/i, function(message){
		var name = message.match[1];
		if (name == 'Nancy') {
			return message.send('You are not Nancy--I am Nancy!');
		} else {
			return message.reply('Nice to meet you, ' + name + '!');
		}
	})
}*/

module.exports = function(robot) {
	robot.respond(/Hi (.*), my name is Shuzaambot/i, function(message){
		var name = message.match[1];
		if (name == 'Raffi') {
			return message.send('The force is strong with you!');
		} else if (name == 'Yoda' || name == 'Obi Wan') {
			return message.send('You are a Jedi knight!');
		} else {
			return message.reply('Hello ' + name + ', I am Shuzaambot');
		}
	})
}