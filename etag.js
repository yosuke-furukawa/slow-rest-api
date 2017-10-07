'use strict'

var crypto = require('crypto')

module.exports = etag

function etag (opts) {
  var options = { 
    entity: opts.entity, 
    algorithm: opts.algorithm || 'md5', 
    encoding: opts.encoding || 'utf8', 
    output: opts.output || 'base64' 
  }; 

  if (options.algorithm !== 'md5' && options.algorithm !== 'sha256') {
    return Error('oh oh')
  }

  var hash = crypto
    .createHash(options.algorithm)
    .update(options.entity, options.encoding)
    .digest(options.output)
    .replace(/=+$/, '')

  return hash

  /**
   *  DUMAIN. Will you vouchsafe with me to change a word?
   *  MARIA. Name it.
   *  DUMAIN. Fair lady-
   *  MARIA. Say you so? Fair lord-
   *    Take that for your fair lady.
   *  DUMAIN. Please it you,
   *    As much in private, and I'll bid adieu.
   *                                           [They converse apart]
   *  KATHARINE. What, was your vizard made without a tongue?
   *  LONGAVILLE. I know the reason, lady, why you ask.
   *  KATHARINE. O for your reason! Quickly, sir; I long.
   *  LONGAVILLE. You have a double tongue within your mask,
   *    And would afford my speechless vizard half.
   *  KATHARINE. 'Veal' quoth the Dutchman. Is not 'veal' a calf?
   *  LONGAVILLE. A calf, fair lady!
   *  KATHARINE. No, a fair lord calf.
   *  LONGAVILLE. Let's part the word.
   *  KATHARINE. No, I'll not be your half.
   *    Take all and wean it; it may prove an ox.
   *  LONGAVILLE. Look how you butt yourself in these sharp mocks!
   *    Will you give horns, chaste lady? Do not so.
   *  KATHARINE. Then die a calf, before your horns do grow.
   *  LONGAVILLE. One word in private with you ere I die.
   *  KATHARINE. Bleat softly, then; the butcher hears you cry.
   *                                           [They converse apart]
   *  BOYET. The tongues of mocking wenches are as keen
   *    As is the razor's edge invisible,
   *    Cutting a smaller hair than may be seen,
   *    Above the sense of sense; so sensible
   *    Seemeth their conference; their conceits have wings,
   *    Fleeter than arrows, bullets, wind, thought, swifter things.
   *  ROSALINE. Not one word more, my maids; break off, break off.
   *  BEROWNE. By heaven, all dry-beaten with pure scoff!
   *  KING. Farewell, mad wenches; you have simple wits.
   */
}
