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
	});
	
	robot.hear(/ardvark/i, function(msg){
		msg.send('What a silly looking animal!');
	});

	robot.respond(/convert \$(.*) to btc/i, function(res){
        var usd = res.match[1];
        res.reply('That is about ' + usd * 0.0024 + ' in BTC');
    });
}

var ackbars;

ackbars = ["http://i.imgur.com/OTByx1b.jpg", "http://farm4.static.flickr.com/3572/3637082894_e23313f6fb_o.jpg", "http://6.asset.soup.io/asset/0610/8774_242b_500.jpeg", "http://files.g4tv.com/ImageDb3/279875_S/steampunk-ackbar.jpg", "http://farm6.staticflickr.com/5126/5725607070_b80e61b4b3_z.jpg", "http://farm6.static.flickr.com/5291/5542027315_ba79daabfb.jpg", "http://farm6.staticflickr.com/5250/5216539895_09f963f448_z.jpg", "http://static.fjcdn.com/pictures/Its_2031a3_426435.jpg", "http://www.millionaireplayboy.com/mpb/wp-content/uploads/2011/01/1293668358_bottom_trappy.jpeg", "http://31.media.tumblr.com/tumblr_lqrrkpAqjf1qiorsyo1_500.jpg", "https://i.chzbgr.com/maxW500/4930876416/hB0F640C6/", "http://i.qkme.me/356mr9.jpg", "http://24.media.tumblr.com/e4255aa10151ebddf57555dfa3fc8779/tumblr_mho9v9y5hE1r8gxxfo1_500.jpg", "http://farm2.staticflickr.com/1440/5170210261_fddb4c480c_z.jpg", "http://fashionablygeek.com/wp-content/uploads/2010/02/its-a-mouse-trap.jpg?cb5e28", "http://31.media.tumblr.com/tumblr_lmn8d1xFXN1qjs7yio1_500.jpg"];

module.exports = function(robot) {
  return robot.hear(/it['’]?s a trap\b/i, function(msg) {
    return msg.send(msg.random(ackbars));
  });
};