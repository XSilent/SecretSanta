var ADB     = ADB || {};
ADB.Kata    = ADB.Kata || {};

ADB.Kata.SecretSanta = function()
{
	var _participants = new ADB.Kata.SecretSanta.Participants();

	this.doSomething = function()
	{
		console.log('we re running here sam!');
	};

	this.getParticipant = function()
	{
		return _participants;
	};

};

ADB.Kata.SecretSanta.Participants = function()
{
	/**
	 *
	 * @type {Array}
	 * @private
	 */
	var _participants = [];

	/**
	 *
	 * @param participant
	 */
	this.addParticipant = function(participant)
	{
		_participants.push(participant);
	};

	this.assignGifts = function()
	{

	};

	/**
	 *
	 * @returns {Number}
	 */
	this.count = function()
	{
		return _participants.length;
	};
};