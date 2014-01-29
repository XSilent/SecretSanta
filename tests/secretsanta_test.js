var suite = new ADB.Test.Suite();
suite.setVerbose(false);

suite.addTest( 'create participants', function()
{
	var secretSanta = new ADB.Kata.SecretSanta();

	var countBefore = secretSanta.getParticipant().count();
	secretSanta.getParticipant().addParticipant('Michael Neuhaus');
	var countAfter = secretSanta.getParticipant().count();

	suite.assert(countAfter, (countBefore + 1), 'new participant, but participant counter wrong');
});

suite.addTest( 'assign gifts', function()
{
	var secretSanta = new ADB.Kata.SecretSanta();

	secretSanta.getParticipant().assignGifts();
});


suite.runTests();