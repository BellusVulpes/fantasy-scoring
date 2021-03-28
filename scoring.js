const calculateScore = (player) => {
    switch(player.position) {
        case "QB":
            const passingScore = player.stats.passing.yards/25 + player.stats.passing.touchdowns*6 - player.stats.passing.interceptions*3
            const rushingScore = player.stats.rushing.yards/10 + player.stats.rushing.touchdowns*6 - player.stats.rushing.fumbles*3
            score = passingScore + rushingScore
            return score
            break
         case "RB":
            const rushingScoreRB = player.stats.rushing.yards/10 + player.stats.rushing.touchdowns*6 - player.stats.rushing.fumbles*3
            const receivingScoreRB = player.stats.receiving.receptions + player.stats.receiving.yards/10 + player.stats.receiving.touchdowns*6 - player.stats.receiving.fumbles*3
            const kickReturnScoreRB = player.stats.return.kickreturn.yards/15 + player.stats.return.kickreturn.touchdowns*6 - player.stats.return.kickreturn.fumbles*3
            const puntReturnScoreRB = player.stats.return.puntreturn.yards/15 + player.stats.return.puntreturn.touchdowns*6 - player.stats.return.puntreturn.fumbles*3
            score = rushingScoreRB + receivingScoreRB + kickReturnScoreRB + puntReturnScoreRB
            return score
            break
        case "WR":
            const rushingScoreWR = player.stats.rushing.yards/10 + player.stats.rushing.touchdowns*6 - player.stats.rushing.fumbles*3
            const receivingScoreWR = player.stats.receiving.receptions + player.stats.receiving.yards/10 + player.stats.receiving.touchdowns*6 - player.stats.receiving.fumbles*3
            const kickReturnScoreWR = player.stats.return.kickreturn.yards/15 + player.stats.return.kickreturn.touchdowns*6 - player.stats.return.kickreturn.fumbles*3
            const puntReturnScoreWR = player.stats.return.puntreturn.yards/15 + player.stats.return.puntreturn.touchdowns*6 - player.stats.return.puntreturn.fumbles*3
            score = rushingScoreWR + receivingScoreWR + kickReturnScoreWR + puntReturnScoreWR
            return score
            break
        case "TE":
            const receivingScoreTE = player.stats.receiving.receptions + player.stats.receiving.yards/10 + player.stats.receiving.touchdowns*6 - player.stats.receiving.fumbles*3
            score = receivingScoreTE
            return score
            break
        case "K":
            return 0
            break
    }
}

module.exports = calculateScore