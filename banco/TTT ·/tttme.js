const tttme = (pushname, userWins, userDefeats, userTies, userPoints) => {
  return `┏═══🔥*IL TUO PROFILO*🔥═══┓
║ 
║ *User: ${pushname}* 
║
║ ➻❥ *Vittorie: ${userWins}* 
║ ➻❥ *Sconfitte: ${userDefeats}*
║ ➻❥ *Pareggi : ${userTies}*
║ ➻❥ *Punti  : ${userPoints}*
║
┗═══════════════════┛`
}

exports.tttme = tttme
